import React, { useEffect, useState } from "react";
import Button from "../Components/Common/Button";
import Footer from "../Components/Common/Footer";
import Header from '../Components/Common/Header';
import Loader from "../Components/Common/Loader";
import TabsComponent from "../Components/Dashboard/Tabs";
import { get150Coins } from "../functions/get150Coins";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    setLoading(true);
    const allCoins = await get150Coins();
    if (coins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setLoading(false);
  };

  return (
    <div>
      {loading && !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="/dashboard">
                  <Button text={"Dashboard"}  onClick={() => {}}/>
                </a>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default WatchlistPage;