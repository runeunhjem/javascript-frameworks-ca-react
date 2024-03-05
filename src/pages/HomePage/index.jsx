import { useEffect } from "react";
import OnlineShop from "../../components/OnlineShop";

function HomePage() {
  useEffect(() => {
    document.title = "CGG | Home Page | Buy your gifts here";
  }, []);
  return (
    <div className="main-container" id="HomePage">
        <OnlineShop />
    </div>
  );
}

export default HomePage;
