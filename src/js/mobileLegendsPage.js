import "../css/mobileLegendsPage.css";
import mobileLegendsMainPhoto from "../img/mobileLegendsMainPhoto.webp";
import mobileLegendsBanner from "../img/mobileLegendsBanner.webp";
import elmasMontly from "../img/elmasMontly.webp";
import elmasKupon from "../img/elmasKupon.webp";
import elmasTruck from "../img/elmasTruck.webp";
import elmasBank from "../img/elmasBank.webp";

const products = [
  {
    id: 1,
    name: "Haftalık Elmas",
    price: "134.45 TL",
    img: elmasMontly,
  },
  { id: 2, name: "Kupon", price: "325.64 TL", img: elmasKupon },
  { id: 3, name: "Elmas", price: "853.23 TL", img: elmasTruck },
  { id: 4, name: "Bank", price: "1251.30 TL", img: elmasBank },
];

function MobileLegendsPage() {
  return (
    <div className="mobileLegendsContainer">
      <div className="mobileLegendsMainPhoto">
        <img src={mobileLegendsMainPhoto} width={290} height={290}></img>
        <p>Category : Mobile Legends Bang Bang TR</p>
        <p>
          MLBB (Mobile Legends: Bang Bang) oyununda elmas satın almak için
          izlemeniz gereken adımlar oldukça basittir. İlk olarak, satın
          alımların gerçekleştiği platformlardan birini seçmelisiniz. Burada
          çeşitli elmas paketlerini göreceksiniz. Bütçenize uygun bir paket
          seçin ve "Satın Al" butonuna tıklayın. Ardından, ödeme yönteminizi
          seçerek işlemi tamamlayın. Satın alma işlemi tamamlandığında, elmaslar
          hesabınıza anında yüklenecektir.
        </p>
      </div>
      <div className="sectionMobileLegends">
        <div className="mobileLegendsBanner">
          <img src={mobileLegendsBanner} width={800} height={230}></img>
        </div>
        <div className="products">
          <div className="product">
            {products.map((product) => (
              <div className="uc1" key={product.id}>
                <img src={product.img} alt={product.name} className="elmas" />
                <p>{product.name}</p>
                <h3>{product.price}</h3>
                <button>Add to basket</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLegendsPage;
