import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, 
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export const registerUser = (email, username, password) =>
  API.post("/user/register", { email, username, password });

export const loginUser = (identifier, password) =>
  API.post("/user/login", { identifier, password });

export const sendResetEmail = (email) => API.post("/auth/forgot-password", { email });

export const resetPassword = (token, newPassword) => {
  return API.post(`/auth/reset-password/${token}`, {
    newPassword,
  });
};

// UserProfile APIs

export const getUserProfile = (username) =>
  API.get(`/user/${username}`);

export const getFavoritesByUsername = (username) =>
  API.get(`/user/${username}/favorites`);

// Reviews APIs

export const getReviews = (movieId) =>
  API.get(`/reviews/${movieId}`);

export const addReview = (movieId, reviewText, rating) =>
  API.post("/reviews", { movieId, reviewText, rating });

// Favorite APIs
export const addToFavorites = (movieId) =>
  API.post(`/favorites/${movieId}`); 

export const removeFromFavorites = (movieId) =>
  API.delete(`/favorites/${movieId}`); 

export const checkIfFavorite = (movieId) =>
  API.get(`/favorites/check/${movieId}`); 

export const getUserFavorites = () =>
  API.get(`/favorites`); 
export default API;