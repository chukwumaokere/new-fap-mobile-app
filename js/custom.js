function openSideNav(){
	$("#overlay").toggle();
	//$("#sidenav").toggle();
	document.getElementById("sidenav").style.paddingLeft = "5.5%";
	document.getElementById("sidenav").style.width = "60%";
}
function closeSideNav(){
	$("#overlay").toggle();
        //$("#sidenav").toggle();
         document.getElementById("sidenav").style.paddingLeft = "0%";
	 document.getElementById("sidenav").style.width = "0%";
}
function login(){
	window.location.replace(".#!/");
}
function goHome(){
	window.location.href=".#/";
}
