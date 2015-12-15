var CardGameApp = angular.module('CardGameApp');

CardGameApp.controller('CardGameController', ['$scope','$location','$timeout',
        function ($scope, $location, $timeout) {
	$scope.cards = [];
	$scope.positionAndCards = [];//map card by position
	$scope.flipped = [];
	$scope.moves = 0;
	$scope.pairs = 0;
	$scope.init = function() {
		$scope.cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
		$scope.positionAndCards = [];
		$scope.moves = 0;
		$scope.pairs = 0;
		var index = 0;
		var cardNum = 0;
		while($scope.cards.length > 0) {
			//return a random index between 0 and the length of cards
			index= Math.floor(Math.random() * $scope.cards.length);
			cardNum = $scope.cards.splice(index,1);
			$scope.positionAndCards.push({card: cardNum[0], matched: false, isUp: false});
		}
	}
	$scope.flipCard = function(card) {
		if($scope.flipped.length < 2 && !card.isUp && !card.matched) {
			$scope.flipped.push(card);	
			card.isUp = true;
			if($scope.flipped.length == 2) {
				$scope.moves++;
				$timeout(function() {
					$scope.flipped[0].matched = $scope.flipped[1].matched = ($scope.flipped[0].card == $scope.flipped[1].card);
					$scope.flipped[0].isUp =false;
					$scope.flipped[1].isUp = false;

					if($scope.flipped[0].matched) $scope.pairs++;
					$scope.flipped = [];
					if($scope.pairs == 18) {
						if(confirm("Congratulation! You has matched all pairs. Do you want to play again?")) {
							$scope.init();	
						} else {
							$location.path('/');	
						}	
					}
				}, 1000);
			}
		}

	}
	$scope.init();
}]);