import "../css/footer.css";
import { Link } from "react-router-dom";
import GamesBtn from "../js/gamesBtn.js";
import PubgMobile from "../js/pubgMobile.js";
import MobileLegends from "../js/mobileLegends.js";

function Home() {
  return (
    <div>
      <Link to="/">
        <GamesBtn />
        <PubgMobile />
        <MobileLegends />
      </Link>
    </div>
  );
}

export default Home;
