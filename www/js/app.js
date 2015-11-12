// Ionic app App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'app.controllers' is found in controllers/
angular.module( 'app', [
	'ionic'
	, 'app.controllers'
	, 'app.services'
])

.run( function( $ionicPlatform ) {
	$ionicPlatform.ready( function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if ( window.cordova && window.cordova.plugins.Keyboard ) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
			cordova.plugins.Keyboard.disableScroll( true );

		}
		if ( window.StatusBar ) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

		moment.locale( 'en' );
	});
})

.config( function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
		.state( 'app', {
			url: '/app'
			, abstract: true
			, templateUrl: 'templates/menu.html'
			, controller: 'AppCtrl'
		})
		.state( 'app.home', {
			url: '/'
			, views: {
				'menuContent': {
					templateUrl: 'templates/home.html'
					, controller: 'HomeCtrl'
				}
			}
		})
		.state( 'app.contacts', {
			url: '/contacts'
			, views: {
				'menuContent': {
					templateUrl: 'templates/contacts.html'
					, controller: 'ContactsCtrl'
				}
			}
		})
		.state( 'app.orders', {
			url: '/orders'
			, views: {
				'menuContent': {
					templateUrl: 'templates/orders.html'
					, controller: 'OrdersCtrl'
				}
			}
		})
		.state( 'app.events', {
			url: '/events'
			, views: {
				'menuContent': {
					templateUrl: 'templates/events.html'
					, controller: 'EventsCtrl'
				}
			}
		})
		.state( 'app.reports', {
			url: '/reports'
			, views: {
				'menuContent': {
					templateUrl: 'templates/reports.html'
					, controller: 'ReportsCtrl'
				}
			}
		})
		.state( 'app.announcements', {
			url: '/announcements'
			, views: {
				'menuContent': {
					templateUrl: 'templates/announcements.html'
					, controller: 'AnnouncementsCtrl'
				}
			}
		})
		.state( 'app.products', {
			url: '/products'
			, views: {
				'menuContent': {
					templateUrl: 'templates/products.html'
					, controller: 'ProductsCtrl'
				}
			}
		});
		
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise( '/app' );
});
