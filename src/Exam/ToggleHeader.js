import React from "react";
import { Jumbotron,Container } from "reactstrap";
export default function ToggleHeader(){
  return(
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-4">
          计算机测验小知识
        </h1>
      </Container>
    </Jumbotron>
  )
}