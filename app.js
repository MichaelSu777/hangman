var app = angular.module("HangmanApp", []);
app.controller("GameController", ['$scope', function($scope){
  var words = ["rat", "cat", "bat", "mat"];
  $scope.incorrectLettersChosen=[];
  $scope.correctLettersChosen=[];
  $scope.guesses = 6;
  $scope.displayWord = '';
  $scope.input = {
    letter : ''
  }
  
  var selectRandomWord = function(){
   var index = Math.round(Math.random() * words.length);
    return words[index];
  }
  
  var newGame = function(){
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen=[];
    $scope.guesses = 6;
    $scope.displayWord = '';
    
    var selectedWord = selectRandomWord();
    var tempDisplayWord = '';
    for (var i = 0; i < selectedWord.length; i++){
      tempDisplayWord += '*';
    }
    console.log(tempDisplayWord);
    $scope.displayWord = tempDisplayWord;
  }
  $scope.letterChosen = function(){
    for (var i = 0; i < $scope.correctLettersChosen.length; i++){
     if ($scope.correctLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
      $scope.input.letter = "";
       return;
     }
   }
     for (var i = 0; i < $scope.incorrectLettersChosen.length; i++){
     if ($scope.incorrectLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
      $scope.input.letter = "";
       return;
     }
    }
    
    var correct = false;
     for (var i = 0; i < selectedWord.length; i++){
      if (selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()){
        $scope.displayWord = $scope.displayWord(0, i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i + 1);
        correct = true;
      
      }
     }
    if (correct){
     $scope.correctLettersChosen.push($scope.input.letter.toLowerCase()); 
    } else {
      $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase()); 
    }
    $scope.input.letter = "";
    
  }
  newGame();
  
}])
