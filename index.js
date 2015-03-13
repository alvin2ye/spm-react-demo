/** @jsx React.DOM */

var React = require("react");

var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
      Hello, world! I am a react.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('example')
);
