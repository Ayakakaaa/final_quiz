import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Auction } from "../../api/auction";

export const AuctionIndexPage = () => {

  const [auctionIndex, setAuctionIndex] = useState({
    auctions: [],
    isLoading: true
  });

  const deleteAuction = id => {
    const newAuctionsList = auctionIndex.auctions.filter(q => q.id !== id);
    setAuctionIndex({ ...auctionIndex, auctions: newAuctionsList });
  };


  useEffect(() => {
    Auction.all().then(auctions => {
      setAuctionIndex({ auctions, isLoading: false });
    });
  }, []);

  return (
    <main>
      <h2 className="ui horizontal divider header">Auctions</h2>
      <ul className="ui list">
        {auctionIndex.auctions.map(auction => (
          <li className="item" key={auction.id}>
            <Link to={`/auctions/${auction.id}`} className="ui link" href="">
              {auction.title}
            </Link>
            
            <button
              className="ui small right floated red button"
              onClick={() => deleteAuction(auction.id)}
            >
              Delete
            </button>

            
          </li>
        ))}
      </ul>
    </main>
  );
};
