angular.module( 'app.controllers' )
	.controller( 'LoginCtrl', function( $scope, $rootScope, $ionicModal ) {

		$ionicModal.fromTemplateUrl( 'templates/login.html', {
			scope: $scope
			, animation: 'slide-in-up'
		}).then( function( modal ) {
			$scope.modal = modal;
		});

		//Cleanup the modal when we're done with it!
		$scope.$on( '$destroy', function() {
			$scope.modal.remove();
		});

		// Execute action on hide modal
		$scope.$on( 'modal.hidden', function() {
			// Execute action
		});

		// Execute action on remove modal
		$scope.$on( 'modal.removed', function() {
			// Execute action
		});
		
		// Form data for the login modal
		$scope.loginData = {};

		$scope.openModal = function() {
			$scope.modal.show();
		};

		$scope.closeModal = function() {
			$scope.modal.hide();
		};

		// Triggered in the login modal to close it
		$scope.closeLogin = function() {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.login = function() {
			$scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		$scope.doLogin = function() {
			console.log( 'Doing login', $scope.loginData );

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout( function() {
				$scope.closeLogin();
			}, 1000 );
		};

		this.cancel = $scope.$dismiss;
	});