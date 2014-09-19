/*
$('header .contact h3').on('click',function(){
	if($( window ).width() < 750){
		$('html, body').animate({
        	scrollTop: $("footer .contact").offset().top,
    	},
 		{
        	duration: 500,
        	complete: function () {
        		alert('aaaa');
        	}
    	}
    })
})

*/


$('header .contact h3').on('click',function(){


	if($( window ).width() < 750){


		$('html, body').animate(


		{
        	scrollTop: $("footer .contact").offset().top,
    	},
    	{
    		duration: 1000,
    		complete: function(){
    			$('footer .contact h3').addClass('alertMe')
    			$('footer .contact a').addClass('alertMe')
    		}
    	}




			)





	}

})