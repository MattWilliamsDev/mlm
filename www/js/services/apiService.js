/**
* app.services Module
*
* Contacts Service
*/
angular.module( 'app.services' )
	.service( 'ApiService', function( $http, $q ) {
		var params = {
			url: 'https://query.odatahq.com/v3/centric/MLMData/'
			, apiKey: '2E88DA1568D84719B2D33036DB4AB5F24EA4D813DB8845F8AF2EA04F61D6B7D84957EA6684C74EF5B83021FF835A4249'
			, count: 'allpages'
			, format: 'json'
		};

		var requestObject = {
			params: {
				'api-key': params.apiKey
				, '$inlinecount': params.count
				, '$format': params.format
			}
		};

		this.get = function( resource ) {
			var deferred = $q.defer();
			var config = angular.merge( requestObject, {
				url: params.url + resource
				, method: 'GET'
			});

			var request = $http( config );

			request.then( function successCallback( response ) {
				var data = response.data;
				console.log( 'request data', data );
				deferred.resolve( data );
			}, function errorCallback( err ) {
				console.error( err );
				deferred.reject( 'There was an error getting the requested resource', err );
			});

			return deferred.promise;
		};

		this.post = function( resource, payload ) {
			var deferred = $q.defer();
			var config = angular.merge( requestObject, {
				url: params.url + resource
				, method: 'POST'
			}, payload );

			var request = $http( config );

			request.then( function successCallback( data ) {
				console.log( 'request data', data );
				deferred.resolve( data );
			}, function errorCallback( err ) {
				console.error( err );
				deferred.reject( 'There was an error with your POST request', err );
			});

			return deferred.promise;
		};

		this.setItem = function( item, value ) {
			this.params[ item ] = value;
		};

		this.getItem = function( item ) {
			return this.params[ item ];
		};

		// Coming Soon
		this.put = angular.noop;
		this.delete = angular.noop;
	});