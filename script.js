'use strict';
/*test
$(function(){
	setInterval{()
		console.log(newDate());
	} ,1000});
*/
$(function(){
	setInterval(function(){
		$('#slider .slide').animate({'margin-left':'-=600px'} ,1000)
	} ,3000);
});


		
	

