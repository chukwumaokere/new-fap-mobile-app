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
 document.getElementsByTagName('body')[0].addEventListener('readystatechange', () => console.log('readyState:' + document.readyState));
 $('body').on("domChanged", function(){
	 console.log('something changed');
 })
 //Arrow on tiles function
 document.addEventListener("DOMContentLoaded", () => {
	const carousels = document.getElementsByClassName("tile-carousel");
	window.onload = function(){
		console.log('page ready');
		console.log(carousels);
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
});