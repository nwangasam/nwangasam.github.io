//Check off specific todos by clicking
$("body").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("body").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(sam){
	if (sam.which === 13){
		//grabbing text from input
		var todoText = $(this).val();
		//clear the input
		$(this).val("");
		//append into the lis.
		$("ul").append("<li><span>X</span> " + todoText + " </li>");
	}
});

$(".plus").click(function(){
	$("input[type='text']").fadeToggle();
});