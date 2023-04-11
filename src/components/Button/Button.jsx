import React from "react";
import "./Button.css";

export default function Button({ children, onFetchAdvice }) {
  
  return <button onClick={()=>onFetchAdvice()}>{children}</button>;
}
