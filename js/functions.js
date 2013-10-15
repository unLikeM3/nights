var musicPage;
var videoPage;
var bioPage;
var concertsPage;
var contactPage;
var musicBtn;
var videoBtn;
var bioBtn;
var concertsBtn;
var contactBtn;
var page;

$(document).ready(function(){
	musicPage = $('#musicPage');
	videoPage = $('#videoPage');
	bioPage = $('#bioPage');
	concertsPage = $('#concertsPage');
	contactPage = $('#contactPage');
	musicBtn = $('#music');
	videoBtn = $('#video');
	bioBtn = $('#bio');
	concertsBtn = $('#concerts');
	contactBtn = $('#contact');
	page = $('.page');

	musicBtn.click(function(){
		page.slideUp("fast");

		if(musicPage.is(":visible")){
			page.slideUp("fast");
		}else{
			musicPage.slideDown("fast");
		}
	});

	videoBtn.click(function(){
		page.slideUp("fast");

		if(videoPage.is(":visible")){
			page.slideUp("fast");
		}else{
			videoPage.slideDown("fast");
		}
	});

	bioBtn.click(function(){
		page.slideUp("fast");

		if(bioPage.is(":visible")){
			page.slideUp("fast");
		}else{
			bioPage.slideDown("fast");
		}
	});

	concertsBtn.click(function(){
		page.slideUp("fast");

		if(concertsPage.is(":visible")){
			page.slideUp("fast");
		}else{
			concertsPage.slideDown("fast");
		}
	});

	contactBtn.click(function(){
		page.slideUp("fast");

		if(contactPage.is(":visible")){
			page.slideUp("fast");
		}else{
			contactPage.slideDown("fast");
		}
	});
});