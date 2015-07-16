$(document).ready(function(){
	createGrid(16);
	generate();
	standard();
	random();
	gradient();
	clear();
});

function createGrid(x){
	var squareSize = (500/x);

	for(var i = 0; i < (x*x); i++) {
		$('#grid').prepend('<div class="square"></div>');
	}

	$(".square").width(squareSize);
	$(".square").height(squareSize);

	sketch();
}

function sketch(){
	$(".square").mouseover(function(){
		$(this).css("background-color", "white");
	});
}

function clear() {
	$("#clear").click(function(){
		$(".square").unbind();
		$(".square").css("background-color", "#A0B8CA");
		$(".square").css("opacity", 1);
		sketch();
	});
}

function generate() {
	$("#generate").click(function(){
		$(".square").remove();
		var newSize = $("input[name=size]").val();
		createGrid(newSize);
	});
}

function standard() {
	$("#standard").click(function(){
		$(".square").unbind();
		$(".square").css("background-color", "#A0B8CA");
		$(".square").css("opacity", 1);
		sketch();
	})
}

function random() {
	$("#random").click(function(){
		$(".square").unbind();
		$(".square").css("background-color", "#A0B8CA");
		$(".square").css("opacity", 1);
		$(".square").mouseover(function(){
			$(this).css("background-color", getRandomColor());
		});
	});
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gradient(){
	$("#gradient").click(function(){
		$(".square").unbind();
		$(".square").css("background-color", "#A0B8CA");
		$(".square").css("opacity", 1);
		$(".square").mouseover(function(){
			var opacity = $(this).css("opacity");
			if (opacity > 0.1) {
				$(this).css("opacity", opacity - 0.1);
			}else {
				$(this).css("opacity", 0);
			}
		})
	})
}