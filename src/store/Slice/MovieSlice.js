import { createSlice } from '@reduxjs/toolkit';

import { MoviesApi } from '../../services/MoviesApi';

const MovieSlice = createSlice({
  name: 'MovieSlice',
  initialState: {
    InputText: '',
    MenuItems: [
      {
        label: 'Search',
        key: 'Search',
      },
      {
        label: 'Rated',
        key: 'Rated',
      },
    ],
    MoviesLoad: false,
    SelectedMenuItem: 'Search',
    Movies: [],
    ShowMovies: [],
    Pages: 1,
    ActivePage: 1,
    Genres: [],
    RatedMoviesInfo: [],
  },
  reducers: {
    addRatedMoviesInfo(state, { payload }) {
      const { id, value } = payload;
      const index = state.RatedMoviesInfo?.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.RatedMoviesInfo[index].value = value;
      } else {
        state.RatedMoviesInfo = [...state.RatedMoviesInfo, payload];
      }
    },

    setRatedMoviesInfo(state, { payload }) {
      const r = payload || [];
      console.log(r);
      state.RatedMoviesInfo = payload || [];
    },

    setInputText(state, { payload }) {
      const text = payload;
      state.InputText = text;
    },

    setMoviesLoad(state, { payload }) {
      state.MoviesLoad = payload;
    },
    setSelectedMenuItem(state, { payload }) {
      state.SelectedMenuItem = payload;
    },

    setMovies(state, { payload }) {
      const movies = payload;
      state.Movies = movies?.map((movie, index) => {
        movie.poster_path = movie.poster_path ? `${'https://image.tmdb.org/t/p/original' + movie.poster_path}` : null;
        let sliceOverview = movie.overview;
        let titleLength = movie.title.length;
        const maxLength = titleLength > 40 ? 15 : titleLength > 20 ? 25 : 30;
        const overviewLength = movie.overview.split(' ').length;
        sliceOverview = sliceOverview.split(' ').slice(0, maxLength).join(' ');
        movie.overview = sliceOverview + `${overviewLength > maxLength ? ' ...' : ''}`;
        const ratingMovieIndex = state.RatedMoviesInfo.findIndex((item) => item.id === movie.id);
        if (ratingMovieIndex !== -1) {
          movie.rating = state.RatedMoviesInfo[ratingMovieIndex].value;
        } else {
          movie.rating = 0;
        }
        movie.success_vote = false;
        movie.genres_names = [];
        return movie;
      });
    },

    setAllGenres(state, { payload }) {
      state.Genres = payload;
    },

    setMovieGenres(state, { payload }) {
      const { movieId, genresIds } = payload;
      const movieIndex = state.Movies.findIndex((item) => item.id === movieId);
      genresIds?.forEach((genreId) => {
        const genreIndex = state.Genres.findIndex((item) => item.id === genreId);
        if (movieIndex !== -1 && genreIndex !== -1) {
          const genreName = state.Genres[genreIndex].name;
          state.Movies[movieIndex].genres_names.push(genreName);
        }
      });
    },

    setRating(state, { payload }) {
      const { id, value, status_message } = payload;
      const index = state.Movies.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.Movies[index].rating = value;
        state.Movies[index].success_vote = true;
        state.Movies[index].status_message = status_message;
      }
    },

    setPages(state, { payload }) {
      const pages = payload;
      state.Pages = pages;
    },
    setActivePage(state, { payload }) {
      const activePage = payload;
      state.ActivePage = activePage;
    },
  },
});

export const getRatedMoviesInfoThunk = () => {
  return async (dispatch) => {
    try {
      const data = JSON.parse(localStorage.getItem('rated_movies_info'));
      if (!data) {
        localStorage.setItem('rated_movies_info', JSON.stringify([]));
      }
      console.log(data);
      dispatch(setRatedMoviesInfo(data));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setMovieGenresThunk = (movieId, genresIds) => {
  return async (dispatch) => {
    try {
      dispatch(setMovieGenres({ movieId, genresIds }));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const getAllGenresThunk = () => {
  return async (dispatch) => {
    try {
      const response = await MoviesApi.getGenres();
      dispatch(setAllGenres(response.data.genres));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setSelectedMenuItemThunk = (key) => {
  return async (dispatch) => {
    try {
      dispatch(setSelectedMenuItem(key));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const getDetailsData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setMoviesLoad(true));
      const response = await MoviesApi.getDetailsData(id);
      dispatch(pushDetailedMovies(response.data));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    } finally {
      dispatch(setMoviesLoad(false));
    }
  };
};

export const getMoviesThunk = (newPage, text) => {
  return async (dispatch) => {
    try {
      if (!text) {
        throw Error('введите текст');
      }
      text = text.split(' ').filter(Boolean).join(' ');
      dispatch(setMoviesLoad(true));
      const response = await MoviesApi.getDefData(newPage, text);
      const { page, results, total_pages } = response.data;
      dispatch(setMovies(results));
      dispatch(setPages(total_pages));
      dispatch(setActivePage(page));
    } catch (e) {
      dispatch(setMovies([]));
      console.log(e.response?.data?.message || e.message || 'error');
    } finally {
      dispatch(setMoviesLoad(false));
    }
  };
};

export const setRatingThunk = (id, value) => {
  return async (dispatch) => {
    try {
      const response = await MoviesApi.setRating(id, value);
      if (response.data.success) {
        dispatch(setRating({ id, value, status_message: response.data.status_message }));
        dispatch(addRatedMoviesInfo({ id, value }));
        let ratedMovies = JSON.parse(localStorage.getItem('rated_movies_info')) || [];
        const index = ratedMovies.findIndex((item) => item.id === id);
        if (index !== -1) {
          ratedMovies[index].value = value;
        } else {
          ratedMovies.push({ id, value });
        }
        localStorage.setItem('rated_movies_info', JSON.stringify(ratedMovies));
      }
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const getRatedMoviesThunk = (page) => {
  return async (dispatch) => {
    try {
      dispatch(setMoviesLoad(true));
      const response = await MoviesApi.getRatedData(page);
      dispatch(setMovies(response.data.results));
      dispatch(setPages(response.data.total_pages));
      dispatch(setActivePage(response.data.page));
    } catch (e) {
      dispatch(setMovies(null));
      console.log(e.response?.data?.message || e.message || 'error');
    } finally {
      dispatch(setMoviesLoad(false));
    }
  };
};

export const setInputTextThunk = (text) => {
  return async (dispatch) => {
    try {
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const {
  addRatedMoviesInfo,
  setRatedMoviesInfo,
  setMovieGenres,
  setAllGenres,
  setRating,
  setMovies,
  setMoviesLoad,
  setSelectedMenuItem,
  pushDetailedMovies,
  setInputText,
  setActivePage,
  setPages,
} = MovieSlice.actions;

export default MovieSlice.reducer;
