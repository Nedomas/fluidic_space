class DaysController < ApplicationController
  respond_to :json

  def index
    if params[:week_from]
      start_date = params[:week_from].to_date
      end_date = start_date + 7
      respond_with Day.where(date: start_date..end_date)
    else
      respond_with Day.where(params.slice(:date, :state, :habit))
    end
  end

  def show
    respond_with Day.find(params[:id])
  end

  def new
    respond_with Day.new
  end

  def edit
    respond_with Day.find(params[:id])
  end

  def create
    create_params = day_params.dup
    create_params["date"] = Time.zone.parse(day_params["date"])
    day = Day.new(create_params)

    if day.save
      respond_with day, status: :created, location: day
    else
      respond_with day.errors, status: :unprocessable_entity
    end
  end

  def update
    day = Day.find(params[:id])

    if day.update_attributes(day_params)
      head :no_content
    else
      respond_with day.errors, status: :unprocessable_entity
    end
  end

  def destroy
    day = Day.find(params[:id])
    day.destroy

    head :no_content
  end

  private

  def day_params
    params.require(:day).permit(:date, :state, :habit_id)
  end
end
