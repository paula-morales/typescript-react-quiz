import React from "react";
import { answerObject } from "../App";
//Style
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: answerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

//FC: functional component with props
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      {" "}
      Question: {questionNr} / {totalQuestions}{" "}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);
export default QuestionCard;
