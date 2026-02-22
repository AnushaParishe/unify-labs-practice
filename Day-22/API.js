const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchCoins = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export default { fetchCoins };