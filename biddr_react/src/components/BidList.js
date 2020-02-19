import React from "react";
import{ BidDetails } from "./BidDetails"

export const BidList = props => {

    return(
        <>
        <h2 className="ui horizontal divider header">Bids</h2>
        <ul className="ui list">
            {props.bids.map(bid => (
                <BidDetails 
                    key = {bid.id}
                    {...bid}
                    onDeleteClick={props.onBidDeleteClick}
                />
            ))}
        </ul>
        </>
    )
}