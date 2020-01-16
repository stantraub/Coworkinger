class Api::SpacesController < ApplicationController
    def create 
        @space = Space.new(space_params)
        if @space.save
            render :show
        else 
            render json: @space.errors.full_messages, status: 422
        end

    end

    def index 
        @spaces = Space.all
        render :index
    end 

    def show 
        @space = Space.find(params[:id])
        if @space
            render :show
        else
            render json: @space.errors.full_messages, status: 404
        end
    end 

    def update 
        @space = Space.find(params[:id])
        if @space.update(space_params)
            render :show
        else
            render json: @space.errors.full_messages, status: 422
        end
    end 

    def destroy 
        @space = Space.find(params[:id])
        if @space.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end 

    private

    def space_params
        params.require(:space).permit(:photos, :address, :city, :state, :zipcode, :phone, :name, :description, :email, :parking, :wifi_included, :website, :cost, :open_hour, :closing_hour )
    end
end
