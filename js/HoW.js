(function() {
	var HoWApp = angular.module("HoWApp", ['ngSanitize']);

        HoWApp.controller("HoWCtrl", function ($scope, $sce) {
            $scope.people_list = people_data;

            $scope.trustSrc = function(src) {
                 return $sce.trustAsResourceUrl(src);
            }
        });

    var people_data = [
    {
        name: "Stephanie Gauthier",
        quote: "My biggest fear growing up was being stuck my whole life not becoming anything... now looking back at it its not a fear I have.",
        id: 1,
        video: "https://www.youtube.com/embed/YB2eFou5rmo",
        img: "img/stephanie-gauthier.jpg"
    },
    {
        name: "Melissa Nobile",
        quote: "I really wanted to work with animals once in my life, so I had this opportunity to work with primates in the rehabilitation centers in South Africa.",
        id: 2,
        video: "https://www.youtube.com/embed/ECzW8Myk1_k",
        img: "img/melissa-nobile.jpg"
    },
    {
        name: "Lorraine Schneider",
        quote: "My advice to my younger self would be to not think as much as I do or as I did... to not overthink everything, to be more spontaneous, more open to new ideas...",
        id: 3,
        video: "https://www.youtube.com/embed/kj7d-ZWgDxc",
        img: "img/lorraine-schneider.jpg"
    },
    {
        name: "Jean Kevin Aguirre",
        quote: "Well I started dressing like this a couple of months after my great-grandfather passed away.",
        id: 4,
        video: "https://www.youtube.com/embed/twmdGglKV9w",
        img: "img/jean-aguirres.jpg"
    },
    {
        name: "Christian Green",
        quote: "Let go of the fear. Let go of the mistrust and be able to allow people to sow good seeds and sow good thoughts.",
        id: 5,
        video: "https://www.youtube.com/embed/B_15_oU7yvs",
        img: "img/christian-green.jpg"
    }, 
    {
        name: "Blanca Cortes",
        quote: "I am a volunteer for the Make-A-Wish Foundation. My official title is a 'wish granter.'",
        id: 6,
        video: "https://www.youtube.com/embed/T8QctHh6UPk",
        img: "img/blanca-cortes.jpg"
    }]; 

})();