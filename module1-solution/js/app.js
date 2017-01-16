(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
   $scope.item = "";
   $scope.message = "";

   $scope.check = function() {
      var arrayOfItem = $scope.item.split(',');
      var numOfItem = arrayOfItem.length;
      if(numOfItem == 0 || $scope.item == ""){
         $scope.message = "Please enter data first";
      }
      else if (numOfItem <= 3) {
         $scope.message = "Enjoy!";
      }
      else{
         $scope.message = "Too much!";
      }
  };
}

})();
