var newApp = angular.module('newApp', ['ngRoute', 'ngAnimate']);

newApp.config(function($routeProvider) {
        $routeProvider
	.when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController',
		title: 'My FAP Dashboard'
        })
	.when('/orders', {
                templateUrl: 'pages/orders.html',
				controller: 'ordersController',
		title: 'Orders List'
        })
	.when('/payments', {
			templateUrl: 'pages/payments.html',
			controller: 'paymentsController',
	title: 'Payments List'
	})
	.when('/login', {
		templateUrl: 'pages/login.html',
		controller: 'loginController',
		title: 'Login'
	})
	.when('/profile', {
		templateUrl: 'pages/profile.html',
		controller: 'profileController',
		title: 'Profile'
	})
	.when('/tickets', {
		templateUrl: 'pages/tickets.html',
		controller: 'ticketsController',
		title: 'Tickets List'
	})
    .when('/orderdetails', {
                templateUrl: 'pages/orderdetails.html',
                controller: 'orderDetailsController',
        title: 'Order Details'
        })
	.otherwise({redirectTo: '/'});
});

newApp.run(['$rootScope', function($rootScope){
	$rootScope.changeTitle=function(name, bicon, action){
		$rootScope.title = {
							name: name,
							bicon: bicon,
							action: action,
							test: "test",
							};
	}
}]);


newApp.controller('mainController', function($scope){
	var title = "My FAP Dashboard";
	var bicon = "fas fa-bars";
	var action = "openSideNav";
    $scope.message = 'This is the dashboard/home view';
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('ordersController', function($scope, $routeParams){
	if ($routeParams.filtername){
		var title = $routeParams.filtername;
	}else{
		var title = "All Orders";
	}
	var bicon = "fas fa-chevron-left";
	var action = "goBack";
    $scope.message = 'This is the orders list view';
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('paymentsController', function($scope, $routeParams){
	if ($routeParams.filtername){
		var title = $routeParams.filtername;
	}else{
		var title = "All Payments";
	}
	var bicon = "fas fa-chevron-left";
	var action = "goBack";
    $scope.message = 'This is the payments list view';
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('ticketsController', function($scope, $routeParams){
	if ($routeParams.filtername){
		var title = $routeParams.filtername;
	}else{
		var title = "All Tickets";
	}
	var bicon = "fas fa-chevron-left";
	var action = "goBack";
    $scope.message = 'This is the tickets list view';
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('loginController', function($scope){
	var title = "Login";
	var bicon = "fas fa-chevron-left";
	var action = "goBack";
	$scope.message = "This is the login view";
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('orderDetailsController', function($scope, $routeParams){
    var title = "Order Details ("  + $routeParams.order + ")";
    var bicon = "fas fa-chevron-left";
    var action = "goBack";
    $scope.message = "This is the order detail view";
    $scope.title = title;
    $scope.bicon = bicon;
    $scope.action = action;
    $scope.changeTitle(title, bicon, action);
});
newApp.controller('profileController', function($scope){
	var title = "Profile";
	var bicon = "fas fa-chevron-left";
	var action = "goBack";
	$scope.message = "This is the profile view";
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
