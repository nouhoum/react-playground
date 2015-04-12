define([
    "jquery",
    "react"
], function ($, React) {
    return React.createClass({
        getInitialState: function () {
            console.log("Initial state....props", this.props);
            return {
                dropdownIsOpen: false
            };
        },
        handleClick: function () {
            this.setState({
                dropdownIsOpen: !this.dropdownIsOpen
            });
        },
        renderDropDown: function () {
            return (
                <div style={{ background: "#ccc"}}>
                I am a dropdown !
                </div>
                );
        },
        logState: function () {
            console.log(this.state);
            return null;
        },
        render: function () {
            var dropdown = this.state.dropDownIsOpen ? this.renderDropDown() : null;
            return (
                <div onClick={this.handleClick} onMouseEnter={this.logState}>
                Hover me!
             {dropdown}
                </div>
            );
        }
    });
});