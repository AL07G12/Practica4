//JavaScript
var audio;
	
$(document).ready(function(e){
	
	if(window.plugins && window.pluyins.lowlatencyAudio)
	{ audio=wondow.pluyins.lowlatencyAudio;
	audio.preloadFX ('mario','audio/mario.mp3',function(msg){},function(msg){alert('error: '+msg);});
    } //if
	
	$('#Beep').click(function(e){
	navigator.notification.beep(1);
	});
	
	$('#Vibrar').click(function(e){
	navigator.notification.vibrate(1000);
	
	$('#Play').click(function(e){
	});
	
	audio.play('mario');
	
	
	});
});//ready