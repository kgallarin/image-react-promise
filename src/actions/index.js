import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";

// receive data
export const RECEIVE_DATA = "RECEIVE_DATA";
export const RECEIVE_DATA_PENDING = "RECEIVE_DATA_PENDING";
export const RECEIVE_DATA_FULFILLED = "RECEIVE_DATA_FULFILLED";
export const RECEIVE_DATA_REJECTED = "RECEIVE_DATA_REJECTED";

export const receiveData = () => ({
  type: RECEIVE_DATA,
  payload: axios.get(
    `https://api.unsplash.com/photos/search/?page=1&query="pepper"&per_page=10&client_id=${`2c4400f3f215808d974faa8e7a39db221fe4e9d38a7bb19f87a5e187241b1a05`}`
  )
});
