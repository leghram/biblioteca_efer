import portada from "../../../src/assets/images/home/portada.jpg";

import TopCategories from "./components/TopCategories";
import SpecialOffers from "./components/SpecialOffers";

function Home() {
  return (
    <div>
      <div>
        <img src={portada} alt="" />
      </div>
      <TopCategories />
      <SpecialOffers />
    </div>
  );
}

export default Home;
