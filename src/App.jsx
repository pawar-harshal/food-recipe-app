import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import Inner from "./Components/Inner";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("656329");
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <Inner>
          <FoodList setfoodId={setfoodId} foodId={foodId} foodData={foodData} />
        </Inner>
        <Inner>
          <FoodDetails foodId={foodId} />
        </Inner>
      </Container>
    </div>
  );
}

export default App;
