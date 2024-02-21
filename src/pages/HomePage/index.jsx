import OnlineShop from "../../components/OnlineShop"; // Import the component

function HomePage() {
  return (
    <div className="main-container" id="HomePage">
      {/* <h1>Welcome to the Online Shop</h1> */}
      <main className="App-header">
        <OnlineShop /> {/* Use the component */}
      </main>
    </div>
  );
}

export default HomePage;
