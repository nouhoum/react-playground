define([
    "jquery",
    "react",
    'react-bootstrap'
], function($, React, ReactBootstrap) {
    return React.createClass({
        render: function() {
            var Alert = ReactBootstrap.Alert;
            return (
                <div>
                    <Alert bsStyle='warning'>
                        <strong>Hey!</strong> This is a react-bootstrap alert ;-).
                    </Alert>
                    <Alert bsStyle='success'>
                        <strong>Hey!</strong> This is a react-bootstrap alert ;-).
                    </Alert>
                    <h1>Hello, world!</h1>
                </div>
                );
        }
    });
});