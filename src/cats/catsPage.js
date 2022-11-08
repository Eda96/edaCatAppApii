import { catsView } from "./catsView.js";

export const initCatsPage = (number) => {
  const fetchData = async (number) => {
    try {
      if ((number === "10") | (number === "20") | (number === "30")) {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=${number}&has_breeds=1&api_key=live_CEKMh36HMAEeGUD8Z97uq9SwbKtiLgf0jarW4kSwrKO8x35lxOs0C0KZMUXZpiy0`
        );
        const data = await response.json();
        view.showCats(data);
      } else {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${number}&api_key=live_CEKMh36HMAEeGUD8Z97uq9SwbKtiLgf0jarW4kSwrKO8x35lxOs0C0KZMUXZpiy0`
        );
        const data = await response.json();
        view.showCats(data);
      }
    } catch (error) {
      view.showError(error.message);
    }
  };

  fetchData(number);
  const view = catsView();
  return view;
};
