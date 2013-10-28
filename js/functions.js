var content;

$(document).ready(function(){
	content = $('#contentBox');

	$('.panel').click(function(){
		$('#content').css({
			'top': '95%'
		});
		$('#content').animate({
			'top': '0px'
		},1000);

		content.load("data.html #"+$(this).attr('id')+"load");
	});

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
		}, 200);
		$(this).css({
			'background-color': 'rgba(0,0,0,0)'
		});
	});

	$('.navItem').click(function(){
		content.load('data.html .'+$(this).attr('id'));
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
});