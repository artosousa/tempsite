$(document).ready(function(){
	$('a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top 
        }, 750);
       
        return false;
    });
});