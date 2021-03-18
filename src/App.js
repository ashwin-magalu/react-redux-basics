import React from "react";
import "./App.css";
import CakeContainerWithConnect from "./components/CakeContainerWithConnect";
import CakeContainerWithHooks from "./components/CakeContainerWithHooks";
import IceCreamContainerWithConnect from "./components/IceCreamContainerWithConnect";
import IceCreamContainerWithHooks from "./components/IceCreamContainerWithHooks";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <CakeContainerWithConnect />
      <CakeContainerWithHooks />
      <IceCreamContainerWithConnect />
      <IceCreamContainerWithHooks />
      <NewCakeContainer />
      <ItemContainer cake />
      <ItemContainer />
      <UserContainer />
    </div>
  );
}

export default App;
