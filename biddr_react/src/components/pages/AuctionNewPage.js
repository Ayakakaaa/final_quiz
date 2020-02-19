import React, { useState } from "react";

import { Auction } from "../../api/auction";
import { AuctionForm } from "../AuctionForm";

export const AuctionNewPage = props => {
  const [errors, setErrors] = useState([]);

  const createAuction = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newAuction = {
      title: fd.get("title"),
      description: fd.get("description"),
      price: fd.get("price"),
      ends_at: fd.get("ends_at")
    };

    Auction.create(newAuction).then(data => {
      if (data.errors) {
        setErrors(data.errors);
        console.log("errors: ", errors);
      } else {
        props.history.push(`/auctions/${data.id}`);
      }
    });

    currentTarget.reset();
  };
  return (
    <AuctionForm
      errors={errors}
      onCreateAuction={createAuction}
      buttonMessage="Create Auction"
    />
  );
};
