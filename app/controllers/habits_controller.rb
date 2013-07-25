class HabitsController < ApplicationController
  respond_to :json

  def index
    respond_with Habit.all
  end

  def show
    respond_with Habit.find(params[:id])
  end

  def new
    respond_with Habit.new
  end

  def edit
    respond_with Habit.find(params[:id])
  end

  def create
    binding.pry
    habit = Habit.new(params[:habit])

    if habit.save
      respond_with habit, status: :created, location: habit
    else
      respond_with habit.errors, status: :unprocessable_entity
    end
  end

  def update
    habit = Habit.find(params[:id])

    if habit.update_attributes(params[:habit])
      head :no_content
    else
      respond_with habit.errors, status: :unprocessable_entity
    end
  end

  def destroy
    habit = Habit.find(params[:id])
    habit.destroy

    head :no_content
  end
end
