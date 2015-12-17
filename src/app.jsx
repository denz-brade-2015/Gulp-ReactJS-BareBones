var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {

		thumbnailData: [{
			title: 'See Tutorials', 
			number: 32,  
			header: 'Learn React',
			description: 'React is fantastic new library for making fast, dynamic pages.', 
			imageUrl: 'http://formatjs.io/img/react.svg'

		}, {
			title: 'Show Courses', 
			number: 12,  
			header: 'Learn Gulp',
			description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.', 
			imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
		}]
	};

	console.log('Hey');

	// Array of data ^^ would look like this Outside object, containing thumbnaildata that points at an array of objects 
	// options = { thumbnailData: [ {}, {}, {} ]}
	
	//React, please render this Class
	var element = React.createElement(ThumbnailList, options);
	
	//React, after you render this class, please place it in within class target
	React.render(element, document.querySelector('.target'));