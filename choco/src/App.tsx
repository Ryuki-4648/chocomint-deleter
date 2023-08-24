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

  const [seconds, setSeconds] = useState(10);
  const [finishText, setFinishText] = useState("");

  const handleClick = (clickedId: number) => {
    if (seconds > 0) {
      setScore(score + 1);
      console.log(score);
      const updatedFallingImages = fallingImages.filter(
        (item) => item.id !== clickedId,
      );
      setFallingImages(updatedFallingImages);
    }
  };

  useEffect(() => {
    const newFallingImages = imageList.map((item) => ({
      id: item.id,
      path: item.path,
      top: Math.random() * (window.innerHeight - 100),
      left: Math.random() * (window.innerWidth - 100),
      delay: Math.random() * 1,
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
      setFallingImages([]);
      setFinishText("終了!");
    }
  }, [seconds]);

  return (
    <div className="App h-screen px-10 pt-10 pb-20">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <div className="falling-container bg-white h-full relative overflow-hidden rounded-xl">
        <p className="text-3xl font-bold text-center absolute top-4 left-1/2 -translate-x-1/2">
          上から降ってくるチョコミントをクリックしよう
        </p>
        {fallingImages.map((item) => (
          <img
            key={item.id}
            src={item.path}
            alt=""
            onClick={() => handleClick(item.id)}
            className="falling-image z-0"
            style={{
              top: `${item.top}px`,
              left: `${item.left}px`,
              animationDelay: `${item.delay}s`,
            }}
          />
        ))}
        <p>{finishText}</p>
      </div>
      <div className="px-6 py-2 flex justify-between content-center">
        <p className="text-gray-900 text-5xl font-semibold">残り {seconds}秒</p>
        <p className="text-gray-900 text-5xl font-semibold">
          スコア: <span>{score}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
