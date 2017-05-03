var app =angular.module('ourModule', []);

app.controller('ourController', function($scope) {
	//array pull words form
	$scope.wordBank = [
		{text: 'Alphabet'},
		{text: 'Baby'},
		{text: 'Bike'},
		{text: 'Skate'},
		{text: 'Big Wheels'},
		{text: 'Momma'},
		{text: 'Fish'},
		{text: 'Apple'},
		{text: 'Bed'},
		{text: 'Book'},
		{text: 'Butterfly'},
		{text: 'Chocolates'},
		{text: 'Circus'},
		{text: 'Computer'},
		{text: 'Drum'},
		{text: 'Flower'},
		{text: 'Ice-cream'},
		{text: 'Kaleidoscope'},
		{text: 'Rainbow'},

	];
	$scope.wordsBanks = [
		{text: 'Alphabet',cls:"nice"},
		{text: 'Baby',cls:"nice"},
		{text: 'Bike', cls: "nice"},
		{text: 'Skate', cls:"nice"},
		{text: 'Big Wheels',cls:"nice"},
		{text: 'Momma', cls:"nice"},
		{text: 'Fish', cls:"nice"},
		{text: 'Apple', cls:"nice"},
		{text: 'Bed', cls:"nice"},
		{text: 'Book', cls:"nice"},
		{text: 'Butterfly', cls:"nice"},
		{text: 'Chocolates', cls:"nice"},
		{text: 'Circus', cls:"nice"},
		{text: 'Computer', cls:"nice"},
		{text: 'Drum', cls:"nice"},
		{text: 'Flower', cls:"nice"},
		{text: 'Ice-cream', cls:"nice"},
		{text: 'Kaleidoscope', cls:"nice"},
		{text: 'Rainbow', cls:"nice"},

	];

	$scope.fancyWordBank = [
		{text: 'Art' ,cls:"fancy1"},
		{text: 'Dance' ,cls:"fancy1"},
		{text: 'Dogs' ,cls:"fancy1"},
		{text: 'Fish' ,cls:"fancy1"},
		{text: 'Fruit' ,cls:"fancy1"},
		{text: 'People' ,cls:"fancy1"},
		{text: 'Farm' ,cls:"fancy1"},
		{text: 'Carnival' ,cls:"fancy1"},
		{text: 'Toy Store' ,cls:"fancy1"},
		{text: 'Science' ,cls:"fancy1"},
		{text: 'Sports-car',cls:"fancy1"},
		{text: 'Television',cls:"fancy1"},
		{text: 'Sucka',cls:"fancy1"},
		{text: 'Terrible', cls:"fancy1"},
	];
	$scope.fancysWordBank = [
		{text: 'Art' ,cls:"fancy2"},
		{text: 'Dance' ,cls:"fancy2"},
		{text: 'Dogs' ,cls:"fancy2"},
		{text: 'Fish' ,cls:"fancy2"},
		{text: 'Fruit' ,cls:"fancy2"},
		{text: 'People' ,cls:"fancy2"},
		{text: 'Farm' ,cls:"fancy2"},
		{text: 'Carnival', cls:"fancy2"},
		{text: 'Toy Store' ,cls:"fancy2"},
		{text: 'Science' ,cls:"fancy2"},
		{text: 'Sports-car',cls:"fancy2"},
		{text: 'Television',cls:"fancy2"},
		{text: 'Sucka',cls:"fancy2"},
		{text: 'Terrible', cls:"fancy2"},
	];


	$scope.displayWords = [];

	$scope.addWord = function(){
		$scope.randomWord = $scope.wordBank[Math.floor(Math.random() * $scope.wordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		console.log($scope.displayWords);
	};

	$scope.addWords = function(){
		$scope.randomWord = $scope.wordsBanks[Math.floor(Math.random() * $scope.wordsBanks.length)]
		$scope.displayWords.push($scope.randomWord);
		$scope.randomWord = $scope.wordsBanks[Math.floor(Math.random() * $scope.wordsBanks.length)]
		$scope.displayWords.push($scope.randomWord);
		$scope.randomWord = $scope.wordsBanks[Math.floor(Math.random() * $scope.wordsBanks.length)]
		$scope.displayWords.push($scope.randomWord);
		console.log($scope.displayWords);
	};

	$scope.addsFancyWord = function(){
		$scope.randomWord = $scope.fancysWordBank[Math.floor(Math.random() * $scope.fancysWordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		console.log($scope.displayWords);
	};

	$scope.addFancyWords = function(){
		$scope.randomWord = $scope.fancyWordBank[Math.floor(Math.random() * $scope.fancyWordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		$scope.randomWord = $scope.fancyWordBank[Math.floor(Math.random() * $scope.fancyWordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		$scope.randomWord = $scope.fancyWordBank[Math.floor(Math.random() * $scope.fancyWordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		console.log($scope.displayWords);
	};
});
