require(["config"], function() {
    require(["react", "components/App"], function(React, App) {
        React.render(<App />, document.getElementById("main"));
    });
});