class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_auction, only: [:show, :edit, :update, :destroy]

    def create
        byebug
        auction = Auction.new auction_params
        user = User.first
        # auction.user = current_user || user
        auction.user = user
        if auction.save
            render json: { id: auction.id }
        else 
            render(
            json: {  errors: auction.errors },
            status: 422 # Unprocessable Entity
            )
        end
    end

    def index
        auctions = Auction.order(created_at: :desc)
        # This allows us to use the 
        # auctionCollectionSerlializer to render json of 
        # auctions in this list in order to keep the data 
        # limited to the minimum we need.
        render json: auctions   
    end

    def show        
        render json: @auction
        # , include: [:author, {answers: [:author]}]
    end

    def edit
    end

    def update
        if @auction.update auction_params
            render json: {id: @auction.id}
        else
            render(
                json: { errors: @auction.errors },
                status: 422 # Unprocessable Entity
            )
        end
    end

    def destroy
        @auction.destroy
        render(json: {status: 200}, status: 200)
    end

    private

    def find_auction
        @auction = Auction.find params[:id]
    end

    def auction_params
        params.require(:auction).permit(:title, :description, :ends_at, :price)
    end

end
