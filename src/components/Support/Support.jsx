import React from "react";

import classes from "./Support.module.css";

function Support() {
  return (
    <div className={classes.support}>
      <div className={classes.box}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
          id={classes.star}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <h4 style={{ fontWeight: "bold" }}>Return and Exchange</h4>
        <p style={{ color: "#A9A9A9", fontWeight: "bold" }}>
          10 Days return policy
        </p>
      </div>
      <div className="box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
          id={classes.star}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <h4 style={{ fontWeight: "bold" }}>Customer Support</h4>
        <p style={{ color: "#A9A9A9", fontWeight: "bold" }}>support 24/7</p>
      </div>
      <div className="box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
          id={classes.star}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <h4 style={{ fontWeight: "bold" }}>Payments</h4>
        <p style={{ color: "#A9A9A9", fontWeight: "bold" }}>secure Payment</p>
      </div>
    </div>
  );
}

export default Support;
