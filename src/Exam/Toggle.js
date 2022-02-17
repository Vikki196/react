import React from "react";
import axios from "axios";
import ToggleHeader from "./ToggleHeader";
import { Button,Form } from "reactstrap";
export const Toggle = ({ setQuestionData, setToggleView, setIndex }) => {
  const getData = async () => {
    debugger
    try {
      const icomingData = await axios.get(
        `http://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
      );
      debugger
      setQuestionData(icomingData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToggleHeader></ToggleHeader>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getData();
          setToggleView(false);
          setIndex(0);
        }}
      >
        <Button color="primary">开始</Button>
      </Form>
    </>
  );
};