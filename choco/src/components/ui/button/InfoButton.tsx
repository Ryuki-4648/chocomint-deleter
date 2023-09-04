import { Button } from "./Button";

type Props = {
  buttonText?: string;
  className?: string;
};

export const InfoButton = ({ buttonText, className }: Props) => {
  const handleTriviaClick = () => {
    alert(
      `Chocomint ${buttonText}!　\n　\nチョコミントが嫌いな人は約6割。\n特に近畿地方ではチョコミント味の馴染みが薄く、嫌いな人が多いと考えられる。`,
    );
  };
  return (
    <Button onClick={handleTriviaClick} className={className}>
      {buttonText}
    </Button>
  );
};
