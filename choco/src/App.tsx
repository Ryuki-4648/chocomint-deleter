import "./App.css";
import { InfoButton } from "./components/ui/button/InfoButton";
import { QuizButton } from "./components/ui/button/QuizButton";
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
    <div className="App h-screen pt-12 lg:pt-16 pb-20 bg-color01 relaive">
      <QuizButton className="left-8 top-2 lg:top-4" />
      <p className="text-white text-4xl lg:text-5xl font-semibold absolute right-6 top-1 lg:top-2 font01">
        {seconds}
      </p>
      <div className="falling-container bg-white h-full relative overflow-hidden text-gray-600">
        {startText && (
          <>
            <div className="text-center absolute top-10 tracking-widest left-1/2 -translate-x-1/2 w-full">
              <p className="text-md lg:text-xl">
                チョコミントをクリックして
                <br className="block md:hidden" />
                消していこう！
              </p>
              <p className="text-sm mt-2 lg:text-md">制限時間：20秒</p>
            </div>
          </>
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          {startText && (
            <>
              <p className="text-color01 text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest font01">
                CHOCOMINT DELETER
              </p>
              <button
                onClick={onClickStartButton}
                className="text-color01 font-bold mt-8 border-color01 border border-solid w-44 text-sm lg:w-60 py-2 lg:text-lg hover:bg-color01 hover:text-white transition duration-300 ease-in-out"
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
            className="falling-image z-0 scale-75 md:scale-100"
            style={{
              top: `${item.top}px`,
              left: `${item.left}px`,
              animationDelay: `${item.delay}s`,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-5xl lg:text-6xl font-semibold text-center mb-8">
            {finishText}
          </p>
          {resetButton && (
            <button
              className="text-md lg:text-xl border border-solid w-40 lg:w-60 py-2 border-gray-300"
              onClick={onClickResetButton}
            >
              リベンジする
            </button>
          )}
        </div>
      </div>
      <div className="px-6 py-2 flex justify-center items-center relative">
        <InfoButton buttonText="Info" className="left-8" />
        <div className="flex justify-center items-center ml-10 md:ml-0">
          <p className="text-white text-2xl md:text-3xl font-semibold mr-3 tracking-widest font01">
            SCORE
          </p>
          <p className="text-white text-5xl md:text-6xl font-semibold font01">
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
