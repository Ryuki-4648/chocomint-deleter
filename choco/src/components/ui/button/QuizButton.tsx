import { Button } from "./Button";

type Props = {
  className?: string;
};

export const QuizButton = ({ className }: Props) => {
  return (
    <Button
      className={className}
      onClick={() =>
        alert(
          "チョコミントアイスを最初に販売したのは？　\n　\n　\nこたえは1945年にオープンしたアメリカの31のメニュー！",
        )
      }
    >
      Quiz
    </Button>
  );
};
