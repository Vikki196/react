import React,{ useState } from "react";
import { Toggle } from "./Toggle";
import { Question } from "./Question";
import { Jumbotron } from "reactstrap";
import  QuestionHeader from "./QuestionHeader";
export const Quiz=()=>{
  // const [setQuestionData] = useState([]);
  var [index,setIndex] = useState(0);
  const [questionData,setQuestionData] = useState([]);
  const questions = questionData.map(({question})=>[question]);
  const answers = questionData.map(({ incorrect_answers, correct_answers }) =>
    [incorrect_answers, correct_answers].flat()
  );
   var [toggleView, setToggleView] = useState(true);
  return (
    <>
      {toggleView && (
        <Toggle
          setIndex={setIndex}
          setQuestionData={setQuestionData}
          setToggleView={setToggleView}
        ></Toggle>
      )}
      {!toggleView && (
        <Jumbotron>
          <QuestionHeader setToggleView={setToggleView}></QuestionHeader>
          <Question question={questions[index]}>

          </Question>
        </Jumbotron>
      )}
    </>
  );
}