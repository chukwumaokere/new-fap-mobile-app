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
 function openNotifications(){
	 window.location.href=".#!/notifications";
 }

 var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
	//console.log(mutations, observer);
	try {
		var carousels = document.getElementsByClassName("tile-carousel");
		var Tiles = document.getElementsByClassName('tile');
		var Order_List = document.getElementsByClassName('order-list');
	}catch{
		var carousels = false;
		var Tiles = false;
		var Order_List = false;
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
	//Tile triggering Loading Anim
	if (Tiles && Tiles.length > 0){
		for (var i = 0; i < Tiles.length ; i++){
			Tiles[i].addEventListener('click', function(e){
				if($('loading-spinner').hasClass('hide')){
					$('loading-spinner').removeClass('hide');
					$('loading-spinner').addClass('show');
				}
			})
		}
	}
	if (Order_List && Order_List.length > 0){
		for (var i = 0; i < Order_List.length ; i++){
			Order_List[i].addEventListener('click', function(e){
				if($('loading-spinner').hasClass('hide')){
					$('loading-spinner').removeClass('hide');
					$('loading-spinner').addClass('show');
				}
			})
		}
	}

	if($("div.navbar-brand").html().trim().includes('Orders')){
		$('.search-input').on('keyup', function(){
			var value= $(this).val().toLowerCase();
			$('div > a.order-list').filter(function(){
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			})
		})
		//div > a.order-list
	}

	//Styling for header bar on Profile screen
	if ($("div.navbar-brand").html().trim() == "Profile" ){
		$("nav.navbar.fixed-top").css("box-shadow", "none");
		//$("div#main").css("background-color", "var(--background-color)");
	}else{
		$("nav.navbar.fixed-top").css("box-shadow", " 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)");
		//$("div#main").css("background-color", "var(--background-headers)");
	}

	//Removing Loading Anim
	setTimeout(function(){
		if($('loading-spinner').hasClass('show')){
			$('loading-spinner').removeClass('show');
			$('loading-spinner').addClass('hide');
		}
	}, 1500);
});
observer.observe(document, {
	subtree: true,
	attributes: true
});

//Anchor link triggering Loading Anim
var Anchors = document.getElementsByTagName('a');
for (var i = 0; i < Anchors.length ; i++){
	Anchors[i].addEventListener('click', function(){
		if($('loading-spinner').hasClass('hide')){
			$('loading-spinner').removeClass('hide');
			$('loading-spinner').addClass('show');
		}
	})
}