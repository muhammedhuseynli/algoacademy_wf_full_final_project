import "../css/gamesBtn.css";
import mobileLegends from "../img/mobileLegends.webp";
import brawlStars from "../img/brawlStars.webp";
import clashOfClans from "../img/clashOfClans.webp";
import clashRoyale from "../img/clashRoyale.webp";
import freeFire from "../img/freeFire.webp";
import genshinImpact from "../img/genshinImpact.webp";
import hayDay from "../img/hayDay.webp";
import honorOfKings from "../img/honorOfKings.webp";
import lol from "../img/lol.webp";
import pashaFencer from "../img/pashaFencer.webp";
import pubgMobile from "../img/pubgMobile.webp";
import valorant from "../img/valorant.webp";
import apexLegends from "../img/apexLegends.webp";
import whiteOut from "../img/whiteOut.webp";
import { Link } from 'react-router-dom';


function GamesBtn() {
  return (
    <div className="main">
      <div className="categories">
        <div className="category">
          <Link to="/MobileLegends" className="anyLink"><img src={mobileLegends}/></Link>
        </div>
        <div className="category">
          <img src={brawlStars}/>
        </div>
        <div className="category">
          <img src={clashOfClans}/>
        </div>
        <div className="category category3">
          <img src={clashRoyale}/>
        </div>
        <div className="category category3">
          <img src={freeFire}/>
        </div>
        <div className="category category2">
          <img src={genshinImpact}/>
        </div>
        <div className="category category2">
          <img src={hayDay}/>
        </div>
        <div className="category category2">
          <img src={honorOfKings}/>
        </div>
        <div className="category category2">
          <img src={lol}/>
        </div>
        <div className="category category2">
          <img src={pashaFencer}/>
        </div>
        <div className="category category2">
          <img src={pubgMobile}/>
        </div>
        <div className="category category2">
          <img src={valorant}/>
        </div>
        <div className="category category2">
          <img src={apexLegends}/>
        </div>
        <div className="category category2">
          <img src={whiteOut}/>
        </div>
      </div>
    </div>
  );
}

export default GamesBtn;
