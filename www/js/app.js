// Ionic app App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'app.controllers' is found in controllers/
angular.module( 'app', [
	'ionic'
	, 'ionic-material'
	, 'app.controllers'
	, 'app.services'
])

.run( function( $ionicPlatform, $rootScope /*, LoginModalService */ ) {
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

	$rootScope.$on( '$stateChangeStart', function appStateChange( event, toState, toParams ) {
		var requireLogin = toState.data.requireLogin;

		if ( requireLogin && typeof $rootScope.currentUser === 'undefined' ) {
			// event.preventDefault();

			// LoginModalService()
			// 	.then( function loginSuccessCallback() {
			// 		return $state.go( toState.name, toParams );
			// 	})
			// 	.catch( function loginErrorCallback() {
			// 		return $state.go( 'welcome' );
			// 	});
		}
	});
})

.config( function( $stateProvider, $urlRouterProvider, $httpProvider ) {

	$stateProvider
		.state( 'welcome', {
			url: '/welcome'
			, templateUrl: 'templates/welcome.html'
			, controller: 'WelcomeCtrl'
			, data: {
				requireLogin: false
			}
		})
		.state( 'login', {
			url: '/login'
			, templateUrl: 'templates/login.html'
			, controller: 'LoginCtrl'
			, data: {
				requireLogin: false
			}
		})
		.state( 'app', {
			url: '/app'
			, abstract: true
			, templateUrl: 'templates/menu.html'
			, controller: 'AppCtrl'
			, data: {
				requireLogin: true
			}
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
	$urlRouterProvider.otherwise( '/welcome' );

	$httpProvider.interceptors.push( function checkLoginInterceptor( $timeout, $q, $injector ) {
		var LoginService, $http, $state;

		// this trick must be done so that we don't receive
		// `Uncaught Error: [$injector:cdep] Circular dependency found`
		$timeout( function() {
			// LoginService = $injector.get( 'LoginService' );
			$http = $injector.get( '$http' );
			$state = $injector.get( '$state' );
		});

		return {
			responseError: function ( rejection ) {
				if ( rejection.status !== 401 ) {
					return rejection;
				}

				var deferred = $q.defer();

				// LoginModalService()
				// 	.then( function() {
				// 		deferred.resolve( $http( rejection.config ) );
				// 	})
				// 	.catch( function() {
				// 		$state.go( 'welcome' );
				// 		deferred.reject( rejection );
				// 	});

				return deferred.promise;
			}
		};
	});

});
