var content;

$(document).ready(function(){
	content = $('#contentBox');
	console.log($(location).attr('hash').toLowerCase());

	$('.panel').click(function(){
		var self = $(this);
		content.html("<center><img src='img/spinner.gif' /></center>");
		$('#content').css({
			'top': '95%'
		});
		$('#content').animate({
			'top': '0px'
		},1000, function(){
			if(self.attr('id') == 'concerts'){
				content.load("data.html #"+self.attr('id')+"load", function(){
					$.getScript('https://www.bandsintown.com/javascripts/bit_widget.js');
				});
			}else{
				content.load("data.html #"+self.attr('id')+"load");
			}
		});
	});

	if($(window).width() > 800 && $(location).attr('hash') != "" && parseInt($('#content').css('top')) > 20){
		console.log('Hash');
		content.html("<center><img src='img/spinner.gif' /></center>");
		$('#content').css({
			'top': '95%'
		});
		$('#content').animate({
			'top': '0px'
		},1000, function(){
			if($(location).attr('hash') == '#concerts'){
				content.load("data.html "+$(location).attr('hash')+"load", function(){
					$.getScript('https://www.bandsintown.com/javascripts/bit_widget.js');
				});
			}else{
				content.load("data.html "+$(location).attr('hash')+"load");
			}
		});
	}else{
		console.log('No hash');
	}

	$(".panel").hover(function(){
		/* Enter panel */
		$(this).animate({
			'opacity': '1'
		}, 500);
		$(this).css({
			'background-color': 'rgba(0,0,0,0.4)'
		});

	}, function(){
		/* Exit panel */
		$(this).animate({
			'opacity': '0.4'
		}, 500);
		$(this).animate({
			'background-color': 'rgba(0,0,0,0)'
		}, 500);
	});

	$('.navItem').click(function(){
		content.html("<center><img src='img/spinner.gif' /></center>");
		content.load('data.html .'+$(this).attr('id'));

		if($(this).attr('id') == 'nav4'){
			content.load('data.html .'+$(this).attr('id'), function(){
				$.getScript('https://www.bandsintown.com/javascripts/bit_widget.js');
			});
		}else if($(this).attr('id') == 'nav1'){
			$('#content').animate({
				'top': '105%'
			}, 1000);
		}else if($(this).attr('id') == 'closeBtn'){

		}else{
			content.load('data.html .'+$(this).attr('id'));
		}
	});

	$('.navItem').hover(function(){
		$(this).animate({
			'font-size': '20px'
		},200);
	}, function(){
		$(this).animate({
			'font-size': '16px'
		},200);
	});

	$('#closeBtn').click(function(){
		$('#content').animate({
			'top': '105%'
		}, 1000);
	});

	/* MOBILE NAV */
	$('#mMenu').click(function(){
		$('#mDropDown').fadeToggle();
	});

	$('.mLi').click(function(){
		$('#mDropDown').fadeOut();
		var el = $('#' + $(this).attr('alt'));

		$('#content').scrollTo(el, {duration: 1000, offset: -40});
		
	});
});