function Nav(){
	var action = document.getElementById("Nav").getAttribute("action");
	if (action == 'openSideNav'){
		$("#overlay").toggle();
		document.getElementById("sidenav").style.paddingLeft = "5.5%";
		document.getElementById("sidenav").style.width = "80%";
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
$('div.overlay').on('click', function(e){
	closeSideNav();
});

 $('#exampleModal').on('show.bs.modal', function (event) {
	var modal = $(this)
	modal.find('.modal-title').text('New Ticket')
	document.getElementById('message-text').value="";
 })

 function submitTicket(){
	//TODO: create ticket in vtiger via ajax	
	$("#exampleModalSuccessFail").modal({
		show: true,
		focus: true,
		backdrop: 'static'
	})
 }

 function payOrder(){
	 console.log('show pay now modal');
 }
 function editProfile(){
	 console.log('show edit profile modal or transition to edit boxes');
 }

 var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
	//console.log(mutations, observer);
	try {
		var carousels = document.getElementsByClassName("tile-carousel");
	}catch{
		var carousels = false;
	}
	//Arrow on tiles function
	if (carousels){
		//console.log(carousels);
		setTimeout(function(){
			Array.from(carousels).forEach(function(element, index, array){
				//console.log(element + ' ' + index);
				var maxScrollLeft = element.scrollWidth - element.clientWidth;
				//console.log(maxScrollLeft);
				element.addEventListener('scroll', function(event){
					var el = $(event.target);
					if (el.is('div.tile-carousel')){
						//console.log('scrolling' + ' ' + index);
						el.scroll(function(){
							var arrow_left = element.getElementsByTagName('div')[0];
							var arrow_right = element.getElementsByTagName('div')[1];
							var arrow_left_currently_showing = arrow_left.hasAttribute('hidden')? false : true;
							var arrow_right_currently_showing = arrow_right.hasAttribute('hidden') ? false : true;
							//console.log()
							if(el.scrollLeft() > 40 && !arrow_left_currently_showing ){
								arrow_left.removeAttribute('hidden')
							}
							if(el.scrollLeft() <= 40 && arrow_left_currently_showing){
								arrow_left.setAttribute('hidden',true);
							}
							if(el.scrollLeft() >= maxScrollLeft - 20 && arrow_right_currently_showing){
								arrow_right.setAttribute('hidden', true);
							}
							if(el.scrollLeft() <= maxScrollLeft - 20 && !arrow_right_currently_showing){
								arrow_right.removeAttribute('hidden');
							}
						})
					}
				})
			});
		}, 250) //TODO: Use promises/resolutions or asynchronus functions instead of timeout in the future for reliability
	}
	if ($("div.navbar-brand").html().trim() == "Profile" ){
		$("nav.navbar.fixed-top").css("box-shadow", "none");
		//$("div#main").css("background-color", "var(--background-color)");
	}else{
		$("nav.navbar.fixed-top").css("box-shadow", " 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)");
		//$("div#main").css("background-color", "var(--background-headers)");
	}
});
observer.observe(document, {
	subtree: true,
	attributes: true
});
