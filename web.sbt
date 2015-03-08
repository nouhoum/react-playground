pipelineStages := Seq(rjs)

excludeFilter in rjs := GlobFilter("*.jsx")

RjsKeys.mainModule := "main"

ReactJsKeys.harmony := true

//JsEngineKeys.engineType := JsEngineKeys.EngineType.Node

RjsKeys.modules ++= Seq(
  WebJs.JS.Object("name" -> "main")
)

libraryDependencies ++= Seq(
  "org.webjars" % "jquery" % "2.1.3",
  "org.webjars" %% "webjars-play" % "2.3.0-2",
  "org.webjars" % "react" % "0.12.2",
  "org.webjars" % "react-bootstrap" % "0.13.2"
)
