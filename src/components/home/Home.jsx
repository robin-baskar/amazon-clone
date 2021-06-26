import React from "react";
import Product from "../product/Product";
import "./Home.css";

const products = [
  {
    id: "1",
    title:
      "Amazon Brand - Solimo 500 ml Large Vegetable Chopper with 3 Blades, Blue",
    price: 179,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/51tjMeONVoL._AC_UL320_.jpg",
  },
  {
    id: "2",
    title:
      "Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette (Silent Movement, Black Frame)",
    price: 599,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81XEPquUw3L._AC_UL320_.jpg",
  },
];
const products2 = [
  {
    id: "3",
    title:
      "Amazon Brand - Presto! Spin Mop, Oval Bucket with Plastic Basket, 2 Refills",
    price: 879,
    rating: 3,
    image: "https://m.media-amazon.com/images/I/71qIx5iUL7L._AC_UL320_.jpg",
  },
  {
    id: "4",
    title:
      "Amazon Brand - Presto! Oxo-Biodegradable Garbage Bags, Small (17 x 19 inches) - 30 bags/roll (Pack of 6, Black)",
    price: 300,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71vxvDPBpPL._AC_UL320_.jpg",
  },
  {
    id: "5",
    title:
      "Amazon Brand - Solimo 100% Cotton 2 Piece Bath Towel Set, 500 GSM (Olive Green and Turquoise Blue)",
    price: 799,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/91-V6MJ0IXL._AC_UL320_.jpg",
  },
];

const products3 = [
  {
    id: "6",
    title: "Amazon Brand - Solimo Checkered Jar Set of 18",
    price: 549,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/91IpehOCi2L._AC_UL320_.jpg",
  },
];

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Javed/GTM/HeroPC_1500x600_CBCC._CB669049594_.jpg"
        alt=""
      />
      <div className="home__row">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <div className="home__row">
        {products2.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <div className="home__row">
        {products3.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
