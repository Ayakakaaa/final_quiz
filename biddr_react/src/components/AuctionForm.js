import React from "react";

import { FormErrors } from "./FormErrors";

export const AuctionForm = props => {
  let doAction;
  if (props.onUpdateAuction) {
    doAction = props.onUpdateAuction;
  } else {
    doAction = props.onCreateAuction;
  }

  let updateAuction = { title: "", description: "", price:"", ends_at:"" };
  let auctionPlaceholder = { ...updateAuction };

  if (props.auction) {
    updateAuction = {
      title: props.auction.title,
      description: props.auction.description,
      price: props.auction.price,
      ends_at: props.auction.ends_at
    };
  } else {
    auctionPlaceholder = {
      title: "enter auction title",
      description: "enter auction description",
      price: "enter auction price",
      ends_at: "enter auction ends_at",

    };
  }
  return (
    <form
      className="NewAuctionForm ui form"
      onSubmit={event => doAction(event)}
    >
      <div className="field">
        <label htmlFor="title">Title</label>
        <FormErrors errors={props.errors} forField="title" />
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={updateAuction.title}
          placeholder={auctionPlaceholder.title}
        />
      </div>
      <div className="field">
        <label htmlFor="description">description</label>
        <FormErrors errors={props.errors} forField="description" />
        <textarea
          name="description"
          id="description"
          rows="3"
          defaultValue={updateAuction.description}
          placeholder={auctionPlaceholder.description}
        />
        <div className="field">
            <label htmlFor="price">Price</label>
            <FormErrors errors={props.errors} forField="price" />
            <input
            type="number"
            name="price"
            id="price"
            defaultValue={updateAuction.price}
            placeholder={auctionPlaceholder.price}
        />
        <div className="field">
            <label htmlFor="ends_at">Ends At</label>
            <FormErrors errors={props.errors} forField="ends_at" />
            <input
            type="date"
            name="ends_at"
            id="ends_at"
            defaultValue={updateAuction.ends_at}
            placeholder={auctionPlaceholder.ends_at}
        />
      </div>
      </div>
      </div>
      <button className="ui orange button" type="submit">
        {props.buttonMessage}
      </button>
    </form>
  );
};
