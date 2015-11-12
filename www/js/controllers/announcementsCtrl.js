angular.module( 'app.controllers' )
	.controller( 'AnnouncementsCtrl', function( $scope, $sce, ApiService ) {
		
		var getAnnouncements = function() {
			ApiService.get( 'Announcements' )
				.then( function successCallback( data ) {
					console.log( 'announcements', data.value );
					_.each( data.value, function( item ) {
						item.hasLink = false;
						if ( item.link && item.link !== '' ) {
							item.hasLink = true;
						}
					});
					$scope.announcements = data.value;
				}, function errorCallback( err ) {
					console.error( 'Error getting announcements:', err );
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

		$scope.followLink = function( link ) {
			window.location.href( link );
		};

		$scope.$on( '$ionicView.enter', function( e ) {
			// Do something on page activation (refresh data, etc)
			getAnnouncements();
		});

	});