import React, { useState, useEffect } from "react";

import { Auction } from "../../api/auction";
import { FormErrors } from "../FormErrors";
import { AuctionForm } from "../AuctionForm";

export const AuctionEditPage = props => {
  const [errors, setErrors] = useState([]);
  const [auction, setAuction] = useState([]);

  const updateAuction = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    const updatedAuction = {
      title: fd.get("title"),
      description: fd.get("description"),
      price: fd.get("price"),
      ends_at: fd.get("ends_at")
    };

    Auction.update(props.match.params.id, updatedAuction).then(data => {
      if (data.errors) {
        setErrors(data.errors);
      } else {
        props.history.push(`/auctions/${data.id}`);
      }
    });
  };

  useEffect(() => {
    Auction.one(props.match.params.id).then(auction => {
      setAuction(auction);
      setIsLoading(false);
    });
  }, [props.match.params.id]);

  return (
    <AuctionForm
      errors={errors}
      onUpdateAuction={updateAuction}
      buttonMessage="Update Auction"
      auction={auction}
    />
  );
};
