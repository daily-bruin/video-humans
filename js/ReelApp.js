var ReelApp = angular.module('ReelApp', []);
var results= [];
/* Google Doc URL */
var url = "https://spreadsheets.google.com/feeds/list/1ltIDoDROZ_b0x8qMAmKTQBvE_5cSY73B0-9lbFimuDA/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK"

    ReelApp.controller("ReelCtrl", ["$scope", "$sce", "$http", function ($scope, $sce, $http) {
      $scope.results = [];
        /* allow videos */
        $scope.trustSrc=function(src){
            return $sce.trustAsResourceUrl(src);
        }
        /* get info from google doc & put results in people */
        $http.jsonp(url).success(function(data){
            	angular.forEach(data, function(value, index){
            		angular.forEach(value.entry, function(people, index){
            			$scope.results.push(people);
            			console.log(people);
            		});
            	});
            }).error(function(error){
        });
    }
                     
                            
                            
                
              
]);
                          

