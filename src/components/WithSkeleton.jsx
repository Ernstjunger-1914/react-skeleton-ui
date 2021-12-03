import React from "react";
import Skeleton from "./Skeleton";
import "../App.css";

const WithSkeleton = props => {
  return (
    <div>
      <h1>With Skeleton</h1>
      {props.isLoading
        ? new Array(10).fill(1).map((_, i) => {
            return <Skeleton key={i} />;
          })
        : props.data.map(item => {
            return (
              <li key={item.id} className="item">
                <div>
                  <img className="img" src={item.avatar} alt="" />
                </div>
                <div className="info">
                  <p>
                    <strong>
                      {item.first_name} {item.last_name}
                    </strong>
                  </p>
                  <p>{item.email}</p>
                </div>
              </li>
            );
          })}
    </div>
  );
};

export default WithSkeleton;
