var React = require('React');
var domready = require('domready');

domready(function() {
    React.render(
	<h1> hello world! </h1>,
	document.body
    );
});
