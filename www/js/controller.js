angular.module('starter.controller', [])

.controller('indexController', function ($scope, $ionicModal, $window, $log, ballService, $rootScope) {
    $scope.answers = ballService.getAllAnswers();
    $scope.askedQuestions = [];
	$scope.usedAnswers = [];
	$scope.askedQuestionTracker = 0;
	$answer = "";
	$scope.askedQuestions.answers = [];
	
	$scope.addQuestion = function(newQuestion) {
		
        if (newQuestion != undefined) {
			if( $scope.askedQuestions.indexOf(newQuestion) == -1){
				$scope.askedQuestions.push(newQuestion);
				$scope.answer = $scope.answers[Math.floor(Math.random()*20)];
				if ($scope.askedQuestionTracker <= 19){
					while($scope.usedAnswers.indexOf($scope.answer) != -1){
						$scope.answer = $scope.answers[Math.floor(Math.random()*20)];
					}
				}
				$scope.usedAnswers.push($scope.answer);
				$scope.askedQuestions.answers[$scope.askedQuestions.indexOf(newQuestion)] = $scope.answer;
				$window.alert($scope.answer);
				//$window.alert($scope.askedQuestions.indexOf(newQuestion));
				//$window.alert($scope.askedQuestions.answers[$scope.askedQuestions.indexOf(newQuestion)]);
				$scope.askedQuestionTracker += 1;
			
			}
			else $window.alert($scope.askedQuestions.answers[$scope.askedQuestions.indexOf(newQuestion)]);
        }
       
    };
	
    
})