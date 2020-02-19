class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user! only: [:create]

    def create 
        auction = Auction.find params[:auction_id]
        new_bid = Bid.new bid_params
        new_bid.user = current_user
        new_bid.auction = auction
        if new_bid.save
            render json: { id: new_bid.id }
        else
            bids = auction.bids.order(created_at: :desc)
            render(
                json: {  errors: new_bid.errors },
                status: 422 # Unprocessable Entity
                )
        end
    end

    private

    def bid_params
        params.permit(:price)
    end
end
