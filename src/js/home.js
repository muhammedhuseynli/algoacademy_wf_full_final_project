import "../css/footer.css";
import { Link } from "react-router-dom";
import GamesBtn from "../js/gamesBtn.js";
import PubgMobile from "../js/pubgMobile.js";
import MobileLegends from "../js/mobileLegends.js";
import Footer from "./footer.js";
import Header from "./header.js";

function Home({ addToBasket }) {
  return (
    <>
    <Header />
    <div>
        <GamesBtn />
        <PubgMobile addToBasket={addToBasket} />
        <MobileLegends addToBasket={addToBasket} />
        <Footer />
    </div>
    </>
  );
}

export default Home;
