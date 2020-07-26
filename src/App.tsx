import React from "react";
import "./App.css";
import { Score } from "./components/Score/Score";

export default function App() {
  return (
    <div className="App">
      <Score score={2} />
    </div>
  );
}
