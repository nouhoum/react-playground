requirejs.config({
    paths: {
        'react': '../lib/react/react-with-addons',
        'react-bootstrap': '../lib/react-bootstrap/react-bootstrap',
        'jquery': '../lib/jquery/jquery'
    },
    shim: {
        'jquery': { exports: '$' }
    }
});

define("window", function () {
    return window;
});

require(["react", "components/App"], function(React, App) {
    //var app = React.createFactory(App);
    //React.render(app({}), document.getElementById("react-app"));
    React.render(<App />, document.getElementById("react-app"));
});