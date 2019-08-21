function Nav(){
	var action = document.getElementById("Nav").getAttribute("action");
	if (action == 'openSideNav'){
		$("#overlay").toggle();
		document.getElementById("sidenav").style.paddingLeft = "5.5%";
		document.getElementById("sidenav").style.width = "60%";
	}else{
		window.history.back();
	}
}
function closeSideNav(){
	$("#overlay").toggle();
        //$("#sidenav").toggle();
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
	window.location.href=".#/";
}
function callSupport(){
	window.location.href='tel:17733072549';
}
function createTicket(){

}