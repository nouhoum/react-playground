package controllers

import play.api.mvc._

object Application extends Controller {
  def index = Action {
    Ok(views.html.index("Main App.", "main"))
  }

  def recipe = Action {
    Ok(views.html.index("Recipe App", "recipe"))
  }
}