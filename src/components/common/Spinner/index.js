import React from "react";
import { Wrapper } from "./styled";

export default function Spinner() {
  return (
    <Wrapper>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </Wrapper>
  );
}
