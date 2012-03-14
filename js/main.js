/**
 * Author: Jan Myler <honza.myler@gmail.com>
 * 
 * Require.js paths configuration, application initialization.
 */

require.config({
	paths: {
		// libs
		jquery    	: 'libs/jquery/jquery',
		underscore 	: 'libs/underscore/underscore-min',
		backbone  	: 'libs/backbone/backbone',
		modernizr 	: 'libs/modernizr-2.5.3-respond-1.1.0.min',	 // TODO delete?
		
		// plugins
		text 		: 'libs/require/text',
		order		: 'libs/require/order',
		plugins		: 'libs/bootstrap'
	},
});

require(['app'], function(App) {
	App.initialize();
});