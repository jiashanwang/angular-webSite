var app = angular.module("myApp", ["ui.router"]);
//run  模板注入完成就执行的方法
//app.run(function ($routScope, $state, $stateParams) {
//    $rootScope.$state = $state;
//    $rootScope.$stateParams = $stateParams;
//});
app.config(function ($stateProvider, $urlRouterProvider) {
    //默认跳转地址
    $urlRouterProvider.otherwise("/index");
    $stateProvider.state("index", {
        url: "/index",
        views: {
            '': {
                templateUrl: "pages/main.html"
            },
            "topbar@index": {
                templateUrl: "pages/nav.html"
            },
            "main@index": {
                templateUrl: "pages/welcome.html"
            }
        }
    }).state("usermng", {
        url: "/usermng",
        views:{
            '': {
                templateUrl: "pages/main.html"
            },
            'topbar@usermng': {
                templateUrl: 'pages/nav.html'
            },
            'main@usermng': {
                templateUrl: 'pages/usermng.html',
            },
            "leftBar@usermng": {
                templateUrl: 'pages/leftbar.html',
            },
            "userMain@usermng": {
                templateUrl: 'pages/hightendusers.html',
            }

        }
      
    }).state("setting", {
        url: "/setting",
        views: {
            '': {
                templateUrl: "pages/main.html"
            },
            'topbar@setting': {
                templateUrl: 'pages/nav.html'
            },
            'main@setting': {
                templateUrl: 'pages/setting.html',
            },
        }
    }).state("usermng.hightendusers", {
        url: "hightendusers",
        views: {
            "userMain@usermng": {
                templateUrl: "pages/hightendusers.html"
            }
        }
    }).state("usermng.normalusers", {
        url: "normalusers",
        views: {
            "userMain@usermng": {
                templateUrl: "pages/normalusers.html"
            }
        }
    }).state("usermng.slowusers", {
        url: "slowusers",
        views: {
            "userMain@usermng": {
                templateUrl: "pages/slowusers.html"
            }
        }
    });
});
