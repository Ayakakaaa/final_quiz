import React from "react";

export const AuctionDetails = props => {
  return (
    <div className="ui segment">
      <h2 className="ui header">{props.title}</h2>
      <p>
        {props.description} <br />
        $ {props.price}<br />
        {props.ends_at}<br />
        {/* By {props.seller.first_name} */}
      </p>
      <small>
        Created At {props.created_at.toLocaleString()}
      </small>
    </div>
  );
};
