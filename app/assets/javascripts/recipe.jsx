require(["config"], function() {
    require(["react", "components/Recipe"], function(React, Recipe) {
        React.render(<Recipe />, document.getElementById("recipe"));
    });
});