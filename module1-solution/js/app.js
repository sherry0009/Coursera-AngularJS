(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
   $scope.item = "";
   $scope.check = function() {
      var arrayOfItem = $scope.item.split(',');
      var numOfItem = arrayOfItem.length;
      if($scope.item == ""){
         $scope.answer = {
                message: "Please enter data first",
                font: { "color":"red" },
                box : { "border" : "solid 1px red" }};
      }
      else if (numOfItem <= 3) {
        $scope.answer = {
               message: "Enjoy!",
               font: { "color":"green" },
               box : { "border" : "solid 1px green" }};
      }
      else{
        $scope.answer = {
               message: "Too much!",
               font: { "color":"green" },
               box : { "border" : "solid 1px green" }};
      }
  };
}

})();
