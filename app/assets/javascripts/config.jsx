define("config", [], function () {
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
});

define("window", function () {
    return window;
});
