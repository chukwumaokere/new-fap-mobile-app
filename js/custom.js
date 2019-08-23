function Nav(){
	var action = document.getElementById("Nav").getAttribute("action");
	if (action == 'openSideNav'){
		$("#overlay").toggle();
		document.getElementById("sidenav").style.paddingLeft = "5.5%";
		document.getElementById("sidenav").style.width = "60%";
	}else{
		$("#main").addClass("back");
		window.history.back();
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
	window.location.href='tel://17733072549';
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

document.onreadystatechange = function(){
	var state = document.readyState;
	if (state == 'complete'){
		console.log('fully ready');
		const carousels = document.getElementsByClassName("tile-carousel");
		console.log(carousels);
		Array.from(carousels).forEach(function(element, index, array){
			console.log(element + ' ' + index);
		});
		
		[].forEach.call(carousels, function(carousel){ //Doesnt always seem to bind? 
			console.log(carousel); 
			carousel.addEventListener('scroll', function(event){
				var el = $(event.target);
				if(el.is('div.tile-carousel')){
					console.log('scrolling');
				}
			}, true);
		});
		
	}
}
/*
 document.onreadystatechange = function(){
	 var state = document.readyState;
	 if (state == 'complete'){
		 console.log("fully ready");
		 var lastScrollLeft = 0;
		 var carousels = document.getElementsByClassName("tile-carousel");
		 console.log(carousels);
		 [].forEach.call(carousels, function(carousel){	
			console.log(carousel);
			carousel.scroll(function(){
				var documentScrollLeft = carousel.scrollLeft(); 
				if (lastScrollLeft != documentScrollLeft){
					console.log('scrolling carousel ');
				}
			})
		});
	 }
 }
 */
 /*
 document.addEventListener('DOMContentLoaded', function(){
	console.log("ready as i'll ever be");
 });
 $('document').ready(function(){
	 console.log('ready via jquery');
 });
 */
 /*
Array.from(carousels).forEach((carousel)=> {
	carousel.scroll(function(){
		var documentScrollLeft = carousel.scrollLeft(); 
		if (lastScrollLeft != documentScrollLeft){
			console.log('scrolling carousel ');
		}
	})
})
*/
/*
 carouselHolder.forEach(carousel => {
	var lastScrollLeft = 0;
	carousel.scroll(function(){
		var documentScrollLeft = carousel.scrollLeft(); 
		if (lastScrollLeft != documentScrollLeft){
			console.log('scrolling carousel ' + documentScrollLeft);
		}
	})
});	 
*/
 /*
 var lastScrollLeft = 0;
$('#t-c').scroll(function() {
    var documentScrollLeft = $('#t-c').scrollLeft();
    if (lastScrollLeft != documentScrollLeft) {
        console.log('scroll x');
        lastScrollLeft = documentScrollLeft;
    }
});
*/