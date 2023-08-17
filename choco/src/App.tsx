import logo from "./logo.svg";
import "./App.css";
import imageList from "./data/imageList.json";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const handleClick = () => {
    setScore(score + 1);
    console.log(score);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="text-xl">上から降ってくるチョコミントをクリックしよう</p>
      {imageList.map((item) => (
        <img key={item.id} src={item.path} alt="" onClick={handleClick} />
      ))}
    </div>
  );
}

export default App;
