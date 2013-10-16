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
var closePage;

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
	closePage = $('#closePage');

	musicBtn.click(function(){
		if(musicPage.is(":visible")){

		}else{
			page.slideUp("fast");
			musicPage.slideDown("fast");
			closePage.show();
		}
	});

	videoBtn.click(function(){
		if(videoPage.is(":visible")){

		}else{
			page.slideUp("fast");
			videoPage.slideDown("fast");
			closePage.show();
		}
	});

	bioBtn.click(function(){
		if(bioPage.is(":visible")){

		}else{
			page.slideUp("fast");
			bioPage.slideDown("fast");
			closePage.show();
		}
	});

	concertsBtn.click(function(){
		if(concertsPage.is(":visible")){

		}else{
			page.slideUp("fast");
			concertsPage.slideDown("fast");
			closePage.show();
		}
	});

	contactBtn.click(function(){
		if(contactPage.is(":visible")){

		}else{
			page.slideUp("fast");
			contactPage.slideDown("fast");
			closePage.show();
		}
	});

	closePage.click(function(){
		page.slideUp("fast");
		closePage.hide();
	});

	$(".panel").hover(function(){
		/* Enter panel */
		$(this).animate({
			'opacity': '1',
		}, 500);
		$(this).css({
			'background-color': 'rgba(0,0,0,0.4)'
		});

	}, function(){
		/* Exit panel */
		$(this).animate({
			'opacity': '0.4',
			'background-color': 'rgba(0,0,0,0)'
		}, 200);
	});

});