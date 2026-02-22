import { fetchCoins } from "./API.js";
import { renderCoins, showLoader, showNotification } from "./UI.js";

const State = {
  coins: [],
  filteredCoins: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  theme: localStorage.getItem("theme") || "light"
};

const init = async () => {
  applyTheme();
  showLoader(true);

  try {
    const data = await fetchCoins();
    State.coins = data;
    State.filteredCoins = data;
    renderCoins(State.filteredCoins, State.favorites);
  } catch (error) {
    showNotification("Failed to fetch data. Please try again.");
  } finally {
    showLoader(false);
  }
};

const applyTheme = () => {
  document.body.classList.toggle("dark", State.theme === "dark");
};

const toggleTheme = () => {
  State.theme = State.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", State.theme);
  applyTheme();
};

const handleSearch = (e) => {
  const value = e.target.value.toLowerCase();
  State.filteredCoins = State.coins.filter(coin =>
    coin.name.toLowerCase().includes(value)
  );
  renderCoins(State.filteredCoins, State.favorites);
};

const handleSort = (e) => {
  const value = e.target.value;

  if (value === "name") {
    State.filteredCoins.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (value === "market_cap_asc") {
    State.filteredCoins.sort((a, b) =>
      a.market_cap - b.market_cap
    );
  } else {
    State.filteredCoins.sort((a, b) =>
      b.market_cap - a.market_cap
    );
  }

  renderCoins(State.filteredCoins, State.favorites);
};

const handleFavorites = (e) => {
  if (!e.target.classList.contains("fav-btn")) return;

  const id = e.target.dataset.id;

  if (State.favorites.includes(id)) {
    State.favorites = State.favorites.filter(fav => fav !== id);
  } else {
    State.favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(State.favorites));
  renderCoins(State.filteredCoins, State.favorites);
};

document.getElementById("search").addEventListener("input", handleSearch);
document.getElementById("sort").addEventListener("change", handleSort);
document.getElementById("cards").addEventListener("click", handleFavorites);
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

init();