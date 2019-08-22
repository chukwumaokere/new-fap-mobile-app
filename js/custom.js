function Nav(){
	var action = document.getElementById("Nav").getAttribute("action");
	if (action == 'openSideNav'){
		$("#overlay").toggle();
		document.getElementById("sidenav").style.paddingLeft = "5.5%";
		document.getElementById("sidenav").style.width = "60%";
	}else{
		$("#main").addClass("back");
		window.history.back();
		//TODO: hide ng-enter and ng-enter-active
		//console.log($('#main.ng-enter.ng-enter-active'));
	}
}
function closeSideNav(){
	$("#overlay").toggle();
	document.getElementById("sidenav").style.paddingLeft = "0%";
	document.getElementById("sidenav").style.width = "0%";
}
function login(){
	$("#overlay").hide();
	document.getElementById("sidenav").style.paddingLeft = "0%";
	document.getElementById("sidenav").style.width = "0%";
	window.location.replace(".#!/");
}
function logout(){
	$("#overlay").hide();
	document.getElementById("sidenav").style.paddingLeft = "0%";
	document.getElementById("sidenav").style.width = "0%";
	window.location.replace(".#!/login");
}
function goHome(){
	$("#main").addClass("back");
	window.location.href=".#/";
}
function callSupport(){
	window.location.href='tel:17733072549';
	//TODO: find method that works on native android
}
function createTicket(){
	$("#exampleModal").modal({
		show: true,
		focus: true,
		backdrop: 'static',
		
	})
}

 $('#exampleModal').on('show.bs.modal', function (event) {
	var modal = $(this)
	modal.find('.modal-title').text('New Ticket')
 })

 function submitTicket(){
	//TODO: create ticket in vtiger via ajax	
	$("#exampleModalSuccessFail").modal({
		show: true,
		focus: true,
		backdrop: 'static'
	})
 }