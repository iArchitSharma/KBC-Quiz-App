import { useEffect } from "react";

export default function Trivia(data, setTimeOut, questionNumber, setQuestionNumber) {

  const [question, setQuestion] = useState(null);

  //whenever data, questionNumber change useEffect will be called
  useEffect(() => {
    setQuestion(data[questionNumber-1]);
  }, [data, questionNumber]);

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answer.map((i) => (
          <div className="answer">{i.text}</div>
        ))}
        
      </div>
    </div>
  );
}
