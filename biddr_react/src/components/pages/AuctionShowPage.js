import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

import { AuctionDetails } from "../AuctionDetails";
import { BidList } from "../BidList";
import { Auction } from "../../api/auction";

export const AuctionShowContext = React.createContext();

const initialState = {
  auction: null,
  isLoading: true
};

const reducer = (state, action) => {

  switch (action.type) {

    case "FETCH_AUCTION":
      return {
        auction: action.payload,
        isLoading: false
      };

    case "DELETE_AUCTION":
      return {
        auction: null,
        isLoading: true
      };

    case "DELETE_BId":
      return {
        ...state,
        auction: action.payload
      };
  }
};

const AuctionShowPage = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentAuctionId = props.match.params.id;

  const deleteAuction = () => {
    Auction.destroy(state.auction.id).then(data => {
      dispatch({ type: "DELETE_AUCTION" });
      props.history.push("/auctions");
    });
  };

  const deleteBid = id => {
    const newBids = state.auction.bids.filter(a => a.id !== id);

    const payload = {
      ...state.auction,
      bids: newBids
    };

    dispatch({ type: "DELETE_BID", payload });
  };

  useEffect(() => {
    Auction.one(currentAuctionId).then(auction => {
      // setauctionShow({ auction, isLoading: false });
      dispatch({ type: "FETCH_AUCTION", payload: auction });
    });
  }, [currentAuctionId]);

  if (state.isLoading) {
    return <div>It dosen't exist</div>;
  }

//   if (!state.auction){
//       return (
//           <div>
//               Loading..
//           </div>
//       )
//   }
  return (
        <div className="Page">
          <AuctionDetails {...state.auction} />
          {/* <Link
            className="ui small right floated orange button" 
            to={`/auctions/${state.auction.id}/edit`}
          >
            Edit
          </Link> */}
          <button
            className="ui small right floated red button"
            onClick={() => deleteAuction()}
          >
            Delete
          </button>
          <AuctionShowContext.Provider value={deleteBid}>
            <BidList bids={state.auction.bids} />
          </AuctionShowContext.Provider>
        </div>

  );
};

export default AuctionShowPage;
