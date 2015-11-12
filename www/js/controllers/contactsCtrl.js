angular.module( 'app.controllers' )
	.controller( 'ContactsCtrl', function( $scope, $sce, ApiService ) {
		$scope.listCanSwipe = true;

		var getContacts = function() {
			ApiService.get( 'Contacts' )
				.then( function successCallback( data ) {
					_.each( data.value, function setExpandedToFalse( item ) {
						item.expanded = false;
					});
					$scope.contacts = _.groupBy( _.sortBy( data.value, 'Lastname' ), function( contact ) {
						return contact.Lastname[0];
					});
				}, function errorCallback( err ) {
					console.error( 'Error getting contacts:', err );
				});
		};

		$scope.toggleContactDetails = function( contact ) {
			if ( !contact.expanded ) {
				contact.expanded = true;
			} else {
				contact.expanded = false;
			}
		};

		$scope.$on( '$ionicView.enter', function( e ) {
			// Do something on page activation (refresh data, etc)	
			getContacts();
		});

	});
