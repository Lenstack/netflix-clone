import React from "react";
import { Accordion } from "../components";
import { JumbotronContainer } from "../containers";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <Accordion>
        <Accordion.Title>lorem5 </Accordion.Title>
        <Accordion.Item>
          <Accordion.Header>prueba</Accordion.Header>
          <Accordion.Body>prueba</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
