/** @jsx React.DOM */

console.info("index.js load file");


var pub = {};

pub.init = function() {
  var $ = require("jquery");
  $("body").append("<div id='dd'>iiiiii</div>");

  var React = require("react");

  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
        Hello, world! I am a CommentBox.
        </div>
      );
    }
  });

  $(function() {
  React.render(
    <CommentBox />,
    document.getElementById('dd')
  );
  })
  console.info("load inline");
}

pub.init();
console.info("end index.js load file");