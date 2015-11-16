angular.module( 'app.controllers' )
	.controller( 'OrdersCtrl', function( $scope, $sce, ApiService ) {

		var getOrders = function() {
			ApiService.get( 'Orders' )
				.then( function successCallback( data ) {
					console.log( 'orders', data.value );
					$scope.orders = data.value;
				}, function errorCallback( err ) {
					console.error( 'Error getting orders:', err );
				});
		};

		$scope.formatDate = function( date, format ) {
			format = format || 'LLL';
			var m = moment( date );

			if ( m.isValid() ) {
				return m.format( format );
			} else {
				return date;
			}
		};

		$scope.$on( '$ionicView.enter', function( e ) {
			// Do something on page activation (refresh data, etc)
			getOrders();
		});

	});