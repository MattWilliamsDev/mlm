angular.module( 'app.controllers' )
	.controller( 'WelcomeCtrl', function( $scope, $rootScope, $ionicModal ) {

		$scope.$on( '$ionicView.enter', function( e ) {
			// Do something on page activation (refresh data, etc)
		});

	});