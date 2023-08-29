import { useEffect, useState } from "react";
import imageList from "../data/imageList.json";

export const useChocomintHooks = () => {
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [finishText, setFinishText] = useState("");
  const [startText, setStartText] = useState(true);
  const [resetButton, setResetButton] = useState(false);
  const [fallingImages, setFallingImages] = useState<
    Array<{
      id: number;
      path: string;
      top: number;
      left: number;
      delay: number;
    }>
  >([]);

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

  const onClickResetButton = () => {
    setSeconds(20);
    setScore(0);
    setFinishText("");
    setResetButton(false);
    setFallingImages(
      imageList.map((item) => ({
        id: item.id,
        path: item.path,
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
        delay: Math.random() * 1.5,
      })),
    );
  };

  const onClickStartButton = () => {
    const newFallingImages = imageList.map((item) => ({
      id: item.id,
      path: item.path,
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      delay: Math.random() * 1.5,
    }));
    setFallingImages(newFallingImages);
    setStartText(false);
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (seconds === 0) {
      console.log("終了");
      setFallingImages([]);
      setResetButton(true);
      setFinishText("終了!");
      setStartText(false);
    }
  }, [seconds]);

  return {
    score,
    seconds,
    finishText,
    startText,
    resetButton,
    fallingImages,
    handleClick,
    onClickResetButton,
    onClickStartButton,
  };
};
