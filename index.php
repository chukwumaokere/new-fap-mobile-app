<!DOCTYPE html>
<html lang="en" ng-app="newApp">
	<title>{{title.name}} </title>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
		<!-- Bootstrap core CSS -->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
		<!-- Material Design Bootstrap -->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/css/mdb.min.css" rel="stylesheet">
		<link href="css/custom.css" rel="stylesheet">
		<!-- AngularJS CDN -->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-route.min.js"></script>
		<!-- App scripts -->
		<script src="app.js"></script>
		<script src="components/components.js"></script>

	</head>
	<body >
		<div class="overlay" id="overlay"></div>
		<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top navbar-custom">
		    <div class="container-fluid header-wrapper">
			<div class="navbar-wrapper text-center">
			    <a onClick = "openSideNav()" ng-on-click="openSideNav()"><i class="{{title.bicon}} {{title.test}} fa-2x icon white-text"></i></a>
			    <div class="navbar-brand"> {{title.name}} </div>
			    <a onClick="window.location.reload();"> <i class="fas fa-sync-alt fa-2x icon white-text"></i> </a>
			</div>
		    </div>
		</nav>

		<div id="sidenav" class="sidenav" style="width: 0px">
		  <a onClick = "closeSideNav();" class="hamburg"><i class="fas fa-bars fa-2x icon white-text"></i></a>
		  <a class="big-text" href="#!/orders">Orders</a>
		  <a class="big-text" href="#">Payments</a>
		  <a class="big-text" href="#">Tickets</a>
		  <a class="big-text" href="#">Profile</a>
		  <a class="big-text" href="#!/login">Logout</a>
		</div>

		<div ng-view id="main"></div>

		<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-bottom navbar-custom">
		    <div class="container-fluid header-wrapper">
			<div class="navbar-wrapper text-center">
				<i class="fas fa-phone fa-2x icon white-text circle-icon"></i>
				<a onClick="goHome();"><i class="fas fa-home fa-2x icon white-text circle-icon"></i></a>
			    <i class="fas fa-ticket-alt fa-2x icon white-text circle-icon"></i>
			</div>
		    </div>
		</nav>

		<!-- JQuery -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<!-- Bootstrap tooltips -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
		<!-- Bootstrap core JavaScript -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
		<!-- MDB core JavaScript -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/js/mdb.min.js"></script>

		<script type="text/javascript" src="js/custom.js"></script>
	</body>
</html>
