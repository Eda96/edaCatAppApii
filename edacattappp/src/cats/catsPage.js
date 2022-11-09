import { catsView } from "./catsView.js";

export const initCatsPage = (parameter) => {
  const fetchData = async (parameter) => {
    try {
      if ((parameter === "10") | (parameter === "20") | (parameter === "30")) {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=${parameter}&has_breeds=1&api_key=live_CEKMh36HMAEeGUD8Z97uq9SwbKtiLgf0jarW4kSwrKO8x35lxOs0C0KZMUXZpiy0`
        );
        const data = await response.json();
        view.showCats(data);
      } else {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${parameter}&api_key=live_CEKMh36HMAEeGUD8Z97uq9SwbKtiLgf0jarW4kSwrKO8x35lxOs0C0KZMUXZpiy0`
        );
        const data = await response.json();
        view.showCats(data);
      }
    } catch (error) {
      view.showError(error.message);
    }
  };

  fetchData(parameter);
  const view = catsView();
  return view;
};
