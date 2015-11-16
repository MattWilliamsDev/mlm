angular.module( 'app.services' )
	.service( 'LoginModalService', function( $http, $q, $rootScope, $ionicModal ) {

		function assignCurrentUser( user ) {
			$rootScope.currentUser = user;
			return user;
		}

		return function( options ) {
			var instance = $ionicModal.fromTemplateUrl( 'templates/login.html', {
				scope: $scope
				, animation: 'slide-in-up'
			}).then( function( modal ) {
				$scope.modal = modal;
			});
			// var instance = $ionicModal.show({
			// 	// templateUrl: 'templates/loginModal.html'
			// 	, controller: 'LoginModalCtrl'
			// 	, controllerAs: 'LoginModalCtrl'
			// });

			return instance.result.then( assignCurrentUser );
		};

	});