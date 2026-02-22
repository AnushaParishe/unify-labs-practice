export const renderCoins = (coins, favorites) => {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  coins.forEach(coin => {
    const isFav = favorites.includes(coin.id);

    const card = `
      <div class="card">
        <img src="${coin.image}" />
        <h3>${coin.name}</h3>
        <p>Price: $${coin.current_price}</p>
        <p>Market Cap: $${coin.market_cap}</p>
        <button data-id="${coin.id}" class="fav-btn">
          ${isFav ? "★ Remove" : "☆ Favorite"}
        </button>
      </div>
    `;

    container.innerHTML += card;
  });
};

export const showLoader = (show) => {
  document.getElementById("loader").classList.toggle("hidden", !show);
};

export const showNotification = (message) => {
  const notif = document.getElementById("notification");
  notif.textContent = message;
  setTimeout(() => notif.textContent = "", 3000);
};

export default {
  renderCoins,
  showLoader,
  showNotification
};