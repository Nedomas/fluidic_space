class HabitsController < ApplicationController
  respond_to :json

  def index
    if params[:week_from]
      start_date = params[:week_from].to_date
      end_date = start_date + 7
      respond_with Habit.where(date: start_date..end_date)
    else
      respond_with Habit.where(params.slice(:title, :state, :date, :user))
    end
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
    create_params = habit_params.dup
    create_params["date"] = Time.zone.parse(habit_params["date"])
    habit = Habit.new(create_params)

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

  private

  def habit_params
    params.require(:habit).permit(:title, :state, :date, :user_id)
  end
end
