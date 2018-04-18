
$(document).ready(function() {
	var cont = 1;
	$('#cont*').each(function(){
		$(this).text(cont);
		cont = cont + 1;
	});
});
