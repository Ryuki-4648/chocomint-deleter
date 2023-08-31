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
      <p className="text-white text-5xl font-semibold absolute right-6 top-2 font01">
        {seconds}
      </p>
      <div className="falling-container bg-white h-full relative overflow-hidden text-gray-600">
        {startText && (
          <p className="text-xl text-center absolute top-8 left-1/2 -translate-x-1/2">
            チョコミントをクリックして消していこう！
          </p>
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          {startText && (
            <>
              <p className="text-color01 text-6xl font-bold tracking-widest font01">
                CHOCOMINT DELETER
              </p>
              <button
                onClick={onClickStartButton}
                className="text-color01 font-bold mt-8 border-color01 border border-solid w-60 py-2 text-lg"
              >
                スタートする
              </button>
            </>
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
            <button
              className="text-xl border border-solid w-60 py-2 border-gray-300"
              onClick={onClickResetButton}
            >
              リベンジする
            </button>
          )}
        </div>
      </div>
      <div className="px-6 py-2 flex justify-center items-center">
        <p className="text-white text-3xl font-semibold mr-3 tracking-widest font01">
          SCORE
        </p>
        <p className="text-white text-6xl font-semibold font01">{score}</p>
      </div>
    </div>
  );
}

export default App;
