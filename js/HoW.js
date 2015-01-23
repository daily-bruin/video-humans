(function() {
	var HoWApp = angular.module("HoWApp", ['ngSanitize']);

        HoWApp.controller("HoWCtrl", function ($scope, $sce) {
            $scope.people_list = people_data;

            $scope.trustSrc = function(src) {
                 return $sce.trustAsResourceUrl(src);
            }
        });


    var people_data = [{
        name: "Will Smith",
        quote: "Throughout life people will make you mad, disrespect you and treat you bad. Let God deal with the things they do, cause hate in your heart will consume you too.",
        id: 1,
        video: "https://www.youtube.com/embed/Z2c9csnQMDY",
        img: "img/img1.jpg"
    }, {
        name: "Dwight Eisenhower",
        quote: "A people that values its privileges above its principles soon loses both.",
        id: 2,
        video: "https://www.youtube.com/embed/Z2c9csnQMDY",
        img: "img/img1.jpg"
    }, {
        name: "Isaac Asimov",
        quote: "People who think they know everything are a great annoyance to those of us who do.",
        id: 3,
        video: "https://www.youtube.com/embed/Z2c9csnQMDY",
        img: "img/img1.jpg"
    }, {
        name: "Maya Angelou",
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        id: 4,
        video: "https://www.youtube.com/embed/Z2c9csnQMDY",
        img: "img/img1.jpg"
    }, {
        name: "UCLA",
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        id: 5,
        video: "https://www.youtube.com/embed/Z2c9csnQMDY",
        img: "img/img1.jpg"
    }];

})();