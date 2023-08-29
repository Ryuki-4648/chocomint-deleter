import "./App.css";
import { useChocomintHooks } from "./hooks/useChocomintHooks";

function App() {
  const {
    score,
    seconds,
    finishText,
    startText,
    resetButton,
    fallingImages,
    handleClick,
    onClickResetButton,
    onClickStartButton,
  } = useChocomintHooks();

  return (
    <div className="App h-screen pt-16 pb-20 bg-color01">
      <p className="text-white text-5xl font-semibold absolute right-6 top-2">
        {seconds}
      </p>
      <div className="falling-container bg-white h-full relative overflow-hidden">
        <p className="text-2xl font-bold text-center absolute top-5 left-1/2 -translate-x-1/2">
          チョコミントをクリックして消していこう
        </p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {startText && (
            <p className="text-color01 text-5xl font-bold">CHOCOMINT DELETER</p>
          )}
          {startText && (
            <button
              onClick={onClickStartButton}
              className="text-color01 font-bold mt-4"
            >
              スタートする
            </button>
          )}
        </div>
        {fallingImages.map((item) => (
          <img
            key={item.id}
            src={item.path}
            alt="チョコミントのイラスト"
            onClick={() => handleClick(item.id)}
            className="falling-image z-0"
            style={{
              top: `${item.top}px`,
              left: `${item.left}px`,
              animationDelay: `${item.delay}s`,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-6xl font-semibold text-center mb-8">
            {finishText}
          </p>
          {resetButton && (
            <button className="text-xl" onClick={onClickResetButton}>
              リベンジする
            </button>
          )}
        </div>
      </div>
      <div className="px-6 py-2 flex justify-center items-center">
        <p className="text-white text-2xl font-semibold mr-3 tracking-wider">
          SCORE
        </p>
        <p className="text-white text-6xl font-semibold">{score}</p>
      </div>
    </div>
  );
}

export default App;
