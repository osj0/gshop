$(document).ready(function(){
			$("#header").load("/gshop/glnb.html", function() {
				$(window).scrollTop(0);
			});
			$("#mainsl").load("/gshop/mainsl.html");
		});

