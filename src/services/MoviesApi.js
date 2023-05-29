import { instance } from './AuthInstance';

export const MoviesApi = {
  createGuestSession() {
    return instance.get('/3/authentication/guest_session/new');
  },

  testApiKey() {
    return instance.get('/3/guest_session/d59e4bbdf10052485a07950311596a9d/rated/movies');
  },
  getDefData(page = 1, text) {
    return instance.get(`/3/search/movie?query=${text}&page=${page}`);
  },

  setRating(id, value) {
    const guestSess = JSON.parse(localStorage.getItem('guest_sess'));
    const formData = new FormData();
    formData.append('value', value);
    return instance.post(`/3/movie/${id}/rating?guest_session_id=${guestSess.guest_session_id}`, formData);
  },

  getRatedData(page = 1) {
    const guestSess = JSON.parse(localStorage.getItem('guest_sess'));
    return instance.get(`/3/guest_session/${guestSess?.guest_session_id}/rated/movies?page=${page}`);
  },

  getDetailsData(id) {
    return instance.get(`/3/movie/${id}`);
  },

  getGenres() {
    return instance.get('/3/genre/movie/list');
  },
};
