class TrailsController < ApplicationController
    def index
        trails = Trail.all
        render json: trails
    end
    def create
        trail = Trail.create(trail_params)
        if trail.valid?
            render json: trail
        else
            rendr json: trail.errors, status:422
        end
    end
    def update
        trail = Trail.find(params[:id])
        trail.update(trail_params)
        if trail.valid?
                render json: trail
        else
                render json: trail.errors, status:422
        end
    end
    def destroy
        trail = Trail.find(params[:id])
        if trail.destroy
            render json: trail
        else
            render json: trail.errors, status:422
        end
    end
    private
    def trail_params
        params.require(:trail).permit(:name, :location, :distance, :duration, :difficulty, :description, :image, :user_id)
    end
end
