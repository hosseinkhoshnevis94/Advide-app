import React from "react";
import Spinner from "../Spinner/Spinner";
import "./Card.css";

export default function Card({ advice, loading }) {
  return (
    <div className="card">
      <div className="card__content">
        {loading ? <Spinner></Spinner> : advice}
      </div>
    </div>
  
  )
}
