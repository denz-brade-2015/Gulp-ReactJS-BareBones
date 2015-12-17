var React = require('react'); // npm dependencies don't require a path
var Badge = require('./badge'); // Code that we write, when requiring we need the path to avoid file conflicts

// module exports allow this class to be accessed within our other files
module.exports = React.createClass({
	render: function() {
		return <div className="thumbnail">
		    <img src={ this.props.imageUrl }  />
		    <div className="caption">
		    	<h3>{ this.props.header }</h3>
		    	<p>{ this.props.description }</p>
		    	<p>
			    	<Badge title={ this.props.title } number={ this.props.number } /> 
		    	</p>
		    </div>
		</div>
		
	}
});