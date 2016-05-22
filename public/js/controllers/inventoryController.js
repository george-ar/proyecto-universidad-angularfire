APP.controller('inventoryController', function($scope, $firebaseArray) {

    $scope.$watchGroup(['user', 'secret'], function(){

		var url = "https://.firebaseio.com/" + $scope.user,
				ref = new Firebase(url);
				
        ref.authWithCustomToken($scope.secret, function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				var list = $firebaseArray(ref);
				$scope.inventory = list;

				$scope.remove = function (index) {
					var item = list[index];
					list.$remove(item).then(function(ref) {
						ref.key() === item.$id; 
					});
				};

				$scope.addItem = function () {
					if ($scope.addName && $scope.addBrand && $scope.addQuantity ) {
						ref.push({'quantity': $scope.addQuantity, 'brand': $scope.addBrand, 'item': $scope.addName});
						$scope.addQuantity = '';
						$scope.addBrand = '';
						$scope.addName = '';
					}
				};
			}
		});

	});
});