import axios from "axios";
import { API_URL } from "../constants";

export const get150Coins = () => {
  const coins = axios
    .get(
      `${API_URL}/markets?vs_currency=inr&order=market_cap_desc&per_page=150&page=1&sparkline=false`
    )
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (coins) return coins;
  else return;
};