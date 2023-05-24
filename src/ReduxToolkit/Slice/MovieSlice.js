import {createSlice} from "@reduxjs/toolkit";
import {MoviesApi} from "../../Api/MoviesApi";


const MovieSlice = createSlice({
    name: 'MovieSlice',
    initialState: {
        InputText: '',
        MenuItems: [
            {
                label: 'Search',
                key: 'Search'
            },
            {
                label: 'Rated',
                key: 'Rated'
            }
        ],
        MoviesLoad: false,
        SelectedMenuItem: 'Search',
        Movies: [],
        ShowMovies: [],
        Pages: 1,
        ActivePage: 1,
    },
    reducers: {
        setInputText(state, {payload}) {
            const text = payload
            state.InputText = text
        },

        setMoviesLoad(state, {payload}) {
            state.MoviesLoad = payload
        },
        setSelectedMenuItem(state, {payload}) {
            state.SelectedMenuItem = payload
        },
        setMovies(state, {payload}) {
            const movies = payload
            state.Movies = movies.map((movie, index) => {
                movie.poster_path = movie.poster_path ? `${`https://image.tmdb.org/t/p/original` + movie.poster_path}` : null
                let sliceOverview = movie.overview
                let titleLength = movie.title.length
                const maxLength = titleLength > 40 ? 15 : titleLength > 20 ? 25 : 30
                const overviewLength = movie.overview.split(" ").length
                sliceOverview = sliceOverview.split(' ').slice(0, maxLength).join(' ')
                movie.overview = sliceOverview + `${overviewLength > maxLength ? " ..." : ""}`
                movie.rating = movie?.rating || 0
                movie.success_vote = false
                return movie
            })
        },
        setRating(state, {payload}) {
            const {id, value, status_message} = payload
            const index = state.Movies.findIndex((item) => item.id === id)
            if (index !== -1) {
                state.Movies[index].rating = value
                state.Movies[index].success_vote = true
                state.Movies[index].status_message = status_message
            }
        },

        setPages(state, {payload}) {
            const pages = payload
            state.Pages = pages
        },
        setActivePage(state, {payload}) {
            const activePage = payload
            state.ActivePage = activePage
        }
    }
})


export const setSelectedMenuItemThunk = (key) => {
    return async (dispatch) => {
        try {
            dispatch(setSelectedMenuItem(key))
        } catch (e) {
            console.log(e.response?.data?.message || e.message || 'error');
        }
    }
}

export const getDetailsData = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setMoviesLoad(true))
            const response = await MoviesApi.getDetailsData(id)
            dispatch(pushDetailedMovies(response.data))
        } catch (e) {
            console.log(e.response?.data?.message || e.message || 'error');
        } finally {
            dispatch(setMoviesLoad(false))
        }
    }
}

export const getMoviesThunk = (newPage, text = "thor") => {
    return async (dispatch) => {
        try {
            dispatch(setMoviesLoad(true))
            const response = await MoviesApi.getDefData(newPage, text)
            const {page, results, total_pages} = response.data
            dispatch(setMovies(results))
            dispatch(setPages(total_pages))
            dispatch(setActivePage(page))
        } catch (e) {
            console.log(e.response?.data?.message || e.message || 'error');
        } finally {
            dispatch(setMoviesLoad(false))
        }
    }
}

export const setRatingThunk = (id, value) => {
    return async (dispatch) => {
        try {
            const response = await MoviesApi.setRating(id, value)
            if (response.data.success) {
                dispatch(setRating({id, value, status_message: response.data.status_message}))
            }
        } catch (e) {
            console.log(e.response?.data?.message || e.message || 'error');
        }
    }
}

export const getRatedMoviesThunk = (page) => {
    return async (dispatch) => {
        try {
            dispatch(setMoviesLoad(true))
            const response = await MoviesApi.getRatedData(page)
            dispatch(setMovies(response.data.results))
            dispatch(setPages(response.data.total_pages))
            dispatch(setActivePage(response.data.page))
        } catch (e) {
            console.log(e.response?.data?.message || e.message || 'error');
        } finally {
            dispatch(setMoviesLoad(false))
        }
    }
}

export const setInputTextThunk = (text) => {
    return async (dispatch) => {
        try {

        } catch (e) {
            console.log(e.response?.data?.message || e.message || 'error');
        }
    }
}

export const {setRating, setMovies, setMoviesLoad, setSelectedMenuItem, pushDetailedMovies, setInputText, setActivePage, setPages} = MovieSlice.actions

export default MovieSlice.reducer