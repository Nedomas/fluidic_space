class HabitsController < ApplicationController
  respond_to :json

  def index
    respond_with Habit.all
  end

  def show
    respond_with Habit.find(params[:id])
  end
end
