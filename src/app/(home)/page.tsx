import CryptoList from "@/components/Home/CryptoList/CryptoList";
import Header from "@/components/Home/Header/Header";
import React from "react";

const Home = () => {
  return (
    <main className="home-page">
      <Header />
      <CryptoList />
    </main>
  );
};

export default Home;
