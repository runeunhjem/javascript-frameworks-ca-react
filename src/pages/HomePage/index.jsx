import { useEffect } from "react";
import OnlineShop from "../../components/OnlineShop";

function HomePage() {
  useEffect(() => {
    document.title = "CGG | Home Page | Buy your gifts here";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.getElementsByTagName("head")[0].appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Explore our wide range of gifts and find the perfect present for anyone and any occasion."
    );
  }, []);


  return (
    <div className="main-container" id="HomePage">
        <OnlineShop />
    </div>
  );
}

export default HomePage;
