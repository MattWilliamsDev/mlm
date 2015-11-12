angular.module( 'app.controllers' )
	.controller( 'HomeCtrl', function( $scope, $sce, ApiService ) {

		$scope.$on( '$ionicView.enter', function( e ) {
			// Do something on page activation (refresh data, etc)
		});

	});