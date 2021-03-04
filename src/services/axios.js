import axios from "axios";

const key = "Your API Key here.";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getSearch(keywords) {
  const res = await instance.get(`/search/movie?api_key=${key}&query=${keywords}`);
  const data = await res.data;
  return data;
}

export async function getTrending(media_type, time_window) {
  const res = await instance.get(`/trending/${media_type}/${time_window}?api_key=${key}`);
  const data = await res.data;
  return data;
}
