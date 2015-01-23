(function() {
	var HoWApp = angular.module("HoWApp", ['ngSanitize']);

        HoWApp.controller("HoWCtrl", function ($scope, $sce) {
            $scope.people_list = people_data;

            $scope.trustSrc = function(src) {
                 return $sce.trustAsResourceUrl(src);
            }
        });

    var people_data = [{
        name: "Christian Green",
        quote: "Let go of the fear. Let go of the mistrust and be able to allow people to sow good seeds and sow good thoughts.",
        id: 1,
        video: "https://www.youtube.com/embed/B_15_oU7yvs",
        img: "img/christian-green.jpg"
    }, {
        name: "Blanca Cortes",
        quote: "I am a volunteer for the Make-A-Wish Foundation. My official title is a 'wish granter.'",
        id: 2,
        video: "https://www.youtube.com/embed/T8QctHh6UPk",
        img: "img/blanca-cortes.jpg"
    }]; 

})();