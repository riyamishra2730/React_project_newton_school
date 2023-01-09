import React, { useState, useEffect } from "react";
import Maze from "./Maze";

const StyleSheet = {
  color: "white",
  marginLeft: "50px",
};

const Solution = ({ sol }) => {
  const convertSolToArr = (str) => {
    let solArr = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    let x = 0;
    let y = 0;
    solArr[x][y] = 1;

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "D") x = x + 1;
      if (str.charAt(i) === "L") y = y - 1;
      if (str.charAt(i) === "R") y = y + 1;
      if (str.charAt(i) === "U") x = x - 1;

      solArr[x][y] = 1;
    }
    return solArr;
  };

  return (
    <div className="center">
      {sol.map((item, i) => {
        return (
          <>
            <br />
            <p style={StyleSheet}>Available Path:{i + 1} </p>
            <Maze sol={true} arr={convertSolToArr(item)} />
          </>
        );
      })}
    </div>
  );
};

export default Solution;
