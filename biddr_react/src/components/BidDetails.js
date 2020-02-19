import React from "react";

export const BidDetails = props => {
  return (
    <div>
      <p>
        $ {props.price} <br />
        By{" "}
        <small
          style={{
            color: "red",
            fontStyle: "italic"
          }}
        >
          {props.author.first_name}
        </small>
      </p>
      <p>Created_At {props.created_at.toLocaleString()}</p>
          
    </div>
  );
};
