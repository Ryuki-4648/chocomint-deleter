import logo from "./logo.svg";
import "./App.css";
import imageList from "./data/imageList.json";
import { useEffect, useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  //const [fallingImages, setFallingImages] = useState([]);
  const [fallingImages, setFallingImages] = useState<
    Array<{
      id: number;
      path: string;
      top: number;
      left: number;
      delay: number;
    }>
  >([]);

  const handleClick = () => {
    setScore(score + 1);
    console.log(score);
  };

  useEffect(() => {
    const newFallingImages = imageList.map((item) => ({
      id: item.id,
      path: item.path,
      top: Math.random() * (window.innerHeight - 100), // 画面内のランダムな位置
      left: Math.random() * (window.innerWidth - 100), // 画面内のランダムな位置
      delay: Math.random() * 3, // 遅延時間 (秒)
    }));
    setFallingImages(newFallingImages);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="text-xl">上から降ってくるチョコミントをクリックしよう</p>
      <div className="falling-container">
        {fallingImages.map((item) => (
          <img
            key={item.id}
            src={item.path}
            alt=""
            onClick={handleClick}
            className="falling-image"
            style={{
              top: `${item.top}px`,
              left: `${item.left}px`,
              animationDelay: `${item.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
