class GreetingsController < ApplicationController
  def index
    render(json: Greeting.find(rand(1..5)))
  end
end
