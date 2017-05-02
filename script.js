var app =angular.module('ourModule', []); 

app.controller('ourController', function($scope) {
	//array pull words form
	$scope.wordBank = [
		{text: 'Alphabet'},
		{text: 'Baby'},
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
		{text: 'Sports-car'},
		{text: 'Television'},
		{text: 'Sucka'},
		{text: 'Terrible'},
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
	];
	
	
	$scope.displayWords = [];

	$scope.addWord = function(){
		$scope.randomWord = $scope.wordBank[Math.floor(Math.random() * $scope.wordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		console.log($scope.displayWords);
	};

	$scope.addWords = function(){
		$scope.randomWord = $scope.wordBank[Math.floor(Math.random() * $scope.wordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		$scope.randomWord = $scope.wordBank[Math.floor(Math.random() * $scope.wordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		$scope.randomWord = $scope.wordBank[Math.floor(Math.random() * $scope.wordBank.length)]
		$scope.displayWords.push($scope.randomWord);
		console.log($scope.displayWords);
	};
	
	$scope.addFancyWord = function(){
		$scope.randomWord = $scope.fancyWordBank[Math.floor(Math.random() * $scope.fancyWordBank.length)]
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
