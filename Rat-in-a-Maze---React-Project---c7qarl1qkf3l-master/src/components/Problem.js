import React, { useState, useEffect } from "react";
import Maze from "./Maze";
import Solution from "./Solution";

const StyleSheet = {
   color: "white",
   marginLeft:"40px"
}

const Problem = () => {
  let res = [];

  function isValid(row, col, m, n) {
    if (row >= 0 && row < n && col >= 0 && col < n && m[row][col] == 1) {
      return true;
    }
    return false;
  }

  function findPathHelper(m, n, x, y, dx, dy, path) {
    if (x == n - 1 && y == n - 1) {
      res.push(path);
      return;
    }
    let dir = "DLRU";
    for (let i = 0; i < 4; i++) {
      let row = x + dx[i];
      let col = y + dy[i];
      if (isValid(row, col, m, n)) {
        m[row][col] = 2;
        findPathHelper(m, n, row, col, dx, dy, path + dir[i]);
        m[row][col] = 1;
      }
    }
  }
  function printPath(m, n) {
    let dx = [1, 0, 0, -1];
    let dy = [0, -1, 1, 0];
    if (m[0][0] == 1) {
      m[0][0] = 2;
      findPathHelper(m, n, 0, 0, dx, dy, "");
    }
  }

  let m = [
    [1, 1, Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],

    [
      1,
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
    ],
    [
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
    ],
    [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), 1, 1],
  ];

  const [unqueArr, setUneq] = useState([
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [0, 0, 1, 1],
  ]);

  let n = unqueArr.length;

  const [resData, setData] = useState([]);

  const [solNo, setNo] = useState(0);

  useEffect(() => {
    setNo(resData.length);
    printPath(unqueArr, n);
  }, [resData, unqueArr]);

  return (
    <div className="center">
      <Maze problem={true} arr={unqueArr} />

      <button onClick={() => setUneq([...m])}>Play Again</button>
      <br />

      <button onClick={() => setData(res)}>Find path</button>

      <h4 style={StyleSheet}>
        Total Avilabe Path: {solNo}{" "}
      </h4>

      <Solution sol={resData} />
    </div>
  );
};

export default Problem;
