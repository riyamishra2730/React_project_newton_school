import React from "react";
import "./maze.css";

const Maze = ({ arr, sol, problem }) => {
  return (
    <div className="main-Container">
      <div className="icon top">🐭</div>
      <div className="Container">
        {arr?.map((item, index) => {
          return (
            <div className="row">
              {item?.map((block, number) => {
                return (
                  <div
                    className="block"
                    style={{
                      backgroundColor:
                        block === 1 && sol
                          ? "green"
                          : block === 1 && problem
                          ? "white"
                          : block === 0 && problem
                          ? "red"
                          : "white",
                      color:
                        block === 1 && sol
                          ? "green"
                          : block === 1 && problem
                          ? "white"
                          : block === 0 && problem
                          ? "red"
                          : "white",
                    }}
                  >
                    {block}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="icon bottom">🧀</div>
    </div>
  );
};

export default Maze;
