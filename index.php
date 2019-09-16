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
		<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular-animate.js"></script>
		<!-- App scripts -->
		<script src="app.js"></script>
		<script src="components/components.js"></script>
        <script type="text/javascript">
            function displayMsg(){
                Print.postMessage("callSupport");
            }
        </script>

	</head>
	<body >
		<div class="overlay" id="overlay"></div>
		<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top navbar-custom">
		    <div class="container-fluid header-wrapper">
			<div class="navbar-wrapper text-center">
				<a  onClick="Nav()" action="{{title.action}}" id="Nav"><i class="{{title.bicon}} {{title.test}} fa-2x icon white-text"></i></a>
			    <div class="navbar-brand"> {{title.name}} </div>
			    <a onClick="window.location.reload();"> <i class="fas fa-sync-alt fa-2x icon white-text"></i> </a>
			</div>
		    </div>
		</nav>

		<div id="sidenav" class="sidenav" style="width: 0px">
		  <a onClick = "closeSideNav();" class="hamburg"><i class="fas fa-bars fa-2x icon white-text"></i></a>
		  <a onClick = "closeSideNav();" class="big-text" href="#!/orders">Orders</a>
		  <a onClick = "closeSideNav();" class="big-text" href="#!/payments">Payments</a>
		  <a onClick = "closeSideNav();" class="big-text" href="#!/tickets">Service Tickets</a>
		  <a onClick = "closeSideNav();" class="big-text" href="#!/notifications">Notifications</a>
		  <a onClick = "closeSideNav();" class="big-text" href="#!/profile">Profile</a>
		  <a onClick = "closeSideNav();" class="big-text" href="#!/help">Help</a>
		  <a onClick="logout();" class="big-text" href="">Logout</a>
		</div>
		<notification-button class="show"></notification-button>
		<loading-spinner class="show"></loading-spinner>
		<div ng-view id="main"></div>
		
		<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-bottom navbar-custom">
		    <div class="container-fluid header-wrapper">
			<div class="navbar-wrapper text-center">
				<a onClick="displayMsg()"><i class="fas fa-phone fa-2x fa-flip-horizontal icon white-text circle-icon"></i></a>
				<a onClick="goHome();"><i class="fas fa-home fa-2x icon white-text circle-icon"></i></a>
			    <a onClick="createTicket();" data-toggle="modal" data-whatever="@mdo"><i class="fas fa-ticket-alt fa-2x icon white-text circle-icon"></i></a>
			</div>
		    </div>
		</nav>
		
		<!-- Modal for Ticket -->
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">New message</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label for="recipient-name" class="col-form-label">Recipient:</label>
							<input type="text" class="form-control" id="recipient-name" disabled value="FAP Support">
						</div>
						<div class="form-group">
							<label for="message-text" class="col-form-label">Message:</label>
							<textarea class="form-control" id="message-text"></textarea>
						</div>
					</form>
				</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button onClick="submitTicket()" type="button" class="btn btn-primary" data-dismiss="modal">Send message</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Modal for Success/Fail -->
		<div class="modal fade" id="exampleModalSuccessFail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog-centered modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Ticket Created</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				Your ticket was successfully submitted! Please wait 1-2 business days for a response or call FAP support to escalate the issue.
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-dark" onClick="callSupport()" data-dismiss="modal">Call Support</button>
			</div>
			</div>
		</div>
		</div>

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
