//import logo from "./logo.svg";
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

  const [seconds, setSeconds] = useState(30);

  const handleClick = () => {
    if (seconds > 0) {
      setScore(score + 1);
      console.log(score);
    }
  };

  useEffect(() => {
    const newFallingImages = imageList.map((item) => ({
      id: item.id,
      path: item.path,
      top: Math.random() * (window.innerHeight - 10), // 画面内のランダムな位置
      left: Math.random() * (window.innerWidth - 10), // 画面内のランダムな位置
      delay: Math.random() * 1, // 遅延時間 (秒)
    }));
    setFallingImages(newFallingImages);
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (seconds === 0) {
      console.log("終了");
    }
  }, [seconds]);

  return (
    <div className="App h-screen overflow-hidden">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <p className="text-3xl font-bold text-center">
        上から降ってくるチョコミントをクリックしよう
      </p>
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
      <p>
        スコア: <span>{score}</span>
      </p>
      <p>残り {seconds}秒</p>
    </div>
  );
}

export default App;
