/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "smoothmenu1", /
	orientation: 'h', 
	classname: 'ddsmoothmenu',
	shadow: {enable:false}, 
	
	contentsource: "markup" /
})

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/
$(function() {

$('ul.grid img, .post a img, #about a img, .content a img').css("opacity","1.0");	

$('ul.grid img, .post a img, #about a img, .content a img').hover(function () {										  

$(this).stop().animate({ opacity: 0.75 }, "fast"); },	

function () {			

$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/
$(function() {
// OPACITY OF BUTTON SET TO 50%
$('a.button, .comment-form input#submit-button, #contact-form input#submit-button').css("opacity","1.0");	
// ON MOUSE OVER
$('a.button, .comment-form input#submit-button, #contact-form input#submit-button').hover(function () {										  
// SET OPACITY TO 100%
$(this).stop().animate({ opacity: 0.8 }, "fast"); },	
// ON MOUSE OUT
function () {			
// SET OPACITY BACK TO 50%
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

/*-----------------------------------------------------------------------------------*/
/*	TOGGLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox").hide();
//slide up and down when click over heading 2
$("h2").click(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
return true;
});
});

/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});