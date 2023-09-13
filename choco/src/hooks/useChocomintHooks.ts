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

  const startCountdownTimer = () => {
    const countdownTimer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1); // seconds - 1だと1秒しか減らない
    }, 1000);
    return countdownTimer;
  };

  const clearCountdownTimer = (timer: NodeJS.Timer) => {
    clearInterval(timer);
  };

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
    const countdownTimer = startCountdownTimer();
    setTimeout(() => clearCountdownTimer(countdownTimer), 20000);
  };

  const onClickStartButton = () => {
    const newFallingImages = imageList.map((item) => ({
      id: item.id,
      path: item.path,
      top: Math.random() * window.innerHeight * 1.4,
      left: Math.random() * window.innerWidth,
      delay: Math.random() * 1.5,
    }));
    setFallingImages(newFallingImages);
    setStartText(false);

    const countdownTimer = startCountdownTimer();
    setTimeout(() => clearCountdownTimer(countdownTimer), 20000);
  };

  useEffect(() => {
    /**
     *  const timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(timer);
     */
    if (seconds === 0) {
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
