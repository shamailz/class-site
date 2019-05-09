$(document).ready(function(){
console.log("working or NAH?")

var colorArray = ["lightsalmon", "salmon", "darksalmon", "lightcoral", "indianred", "crimson", "firebrick", "red", "darkred", "coral", "tomato", "orangered", "gold", "orange", "darkorange", "	lightyellow", "	lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "yellow", "lawngreen", "chartreuse", "limegreen", " lime", "forestgreen", "green", "darkgreen", "greenyellow", "yellowgreen", "springgreen", "mediumspringgreen","lightgreen", "palegreen", "darkseagreen", "	mediumseagreen", "seagreen", "olive","darkolivegreen", "olivedrab", "lightcyan", "cyan", "aqua", "	aquamarine", "mediumaquamarine", "paleturquoise", "turquoise", "mediumturquoise", "darkturquoise", "	lightseagreen", "cadetblue", "darkcyan", "teal"];
var counter = 0; 
// var pictureTop = $(".picture").offset().top;
// var boxTop = $(".color").scrollTop();
// var colorTop = $(".color").offset().top;


    // $("#pic1").click(function () {
    //     $("#pic1").css("background-color" : colorArray[counter]);
    //     $(["#pic2" , "#pic3" , "#pic4" , "#pic5" , "#pic6" , "#pic7" , "#pic8" , "#pic9" , "#pic10" , "#pic11" , "#pic12" , "#pic13" , "#pic14"]).css("opacity" : "0")
    //     counter++;
    //     console.log("ok pls work")
    // });
    var pic1 = ["#pic2" , "#pic3" , "#pic4" , "#pic5" , "#pic6" , "#pic7" , "#pic8" , "#pic9" , "#pic10" , "#pic11" , "#pic12" , "#pic13" , "#pic14"]
 	
    // var "#pic1" = false;


 	$(".color1").click(function () {
 		$(".color1").css("background-color" , "hsl(258, 93%, 89%)")
 		$(".color1").css("opacity" , "1")
 		$(".description1").css("visibility" , "visible")
	 	$("#pic2").css("opacity" , "0")
	 	$("#pic3").css("opacity" , "0")
	 	$("#pic4").css("opacity" , "0")
	 	$("#pic5").css("opacity" , "0")
	 	$("#pic6").css("opacity" , "0")
	 	$("#pic7").css("opacity" , "0")
	 	$("#pic8").css("opacity" , "0")
	 	$("#pic9").css("opacity" , "0")
	 	$("#pic10").css("opacity" , "0")
	 	$("#pic11").css("opacity" , "0")
	 	$("#pic12").css("opacity" , "0")
	 	$("#pic13").css("opacity" , "0")
	 	$("#pic14").css("opacity" , "0")
	 	$("#pic1").css("position" , "absolute")
	 	$("#pic1").css("left" , "48vw")

    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        // "#pic1" = true;
        console.log("ok pls work")
    });

	$(".color2").click(function () {
		$(".color2").css("background-color" , "hsl(258, 93%, 89%)")
 		$(".color2").css("opacity" , "1")
 		$(".description2").css("visibility" , "visible")
	 	$("#pic1").css("opacity" , "0")
	 	$("#pic3").css("opacity" , "0")
	 	$("#pic4").css("opacity" , "0")
	 	$("#pic5").css("opacity" , "0")
	 	$("#pic6").css("opacity" , "0")
	 	$("#pic7").css("opacity" , "0")
	 	$("#pic8").css("opacity" , "0")
	 	$("#pic9").css("opacity" , "0")
	 	$("#pic10").css("opacity" , "0")
	 	$("#pic11").css("opacity" , "0")
	 	$("#pic12").css("opacity" , "0")
	 	$("#pic13").css("opacity" , "0")
	 	$("#pic14").css("opacity" , "0")
	 	$("#pic2").css("position" , "absolute")
	 	$("#pic2").css("left" , "2vw")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color3").click(function () {
	$(".color3").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color3").css("opacity" , "1")
 	$(".description3").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic3").css("position" , "absolute")
	$("#pic3").css("left" , "48vw")
	$("#pic3").css("top" , "199vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color4").click(function () {
	$(".color4").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color4").css("opacity" , "1")
 	$(".description4").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic13").css("position" , "absolute")
	$("#pic13").css("left" , "2vw")
	$("#pic13").css("top" , "199vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color5").click(function () {
	$(".color5").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color5").css("opacity" , "1")
 	$(".description5").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic10").css("position" , "absolute")
	$("#pic10").css("left" , "1vw")
	$("#pic10").css("top" , "287vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color6").click(function () {
	$(".color6").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color6").css("opacity" , "1")
 	$(".description6").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic11").css("position" , "absolute")
	$("#pic11").css("left" , "50vw")
	$("#pic11").css("top" , "287vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color7").click(function () {
	$(".color7").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color7").css("opacity" , "1")
 	$(".description7").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic4").css("position" , "absolute")
	$("#pic4").css("left" , "48vw")
	$("#pic4").css("top" , "374vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color8").click(function () {
	$(".color8").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color8").css("opacity" , "1")
 	$(".description8").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic5").css("position" , "absolute")
	$("#pic5").css("left" , "2vw")
	$("#pic5").css("top" , "374vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color9").click(function () {
	$(".color9").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color9").css("opacity" , "1")
 	$(".description9").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic7").css("position" , "absolute")
	$("#pic7").css("left" , "2vw")
	$("#pic7").css("top" , "462vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color10").click(function () {
	$(".color10").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color10").css("opacity" , "1")
 	$(".description10").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic6").css("position" , "absolute")
	$("#pic6").css("left" , "48vw")
	$("#pic6").css("top" , "462vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color11").click(function () {
	$(".color11").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color11").css("opacity" , "1")
 	$(".description11").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic8").css("position" , "absolute")
	$("#pic8").css("left" , "48vw")
	$("#pic8").css("top" , "550vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color12").click(function () {
	$(".color12").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color12").css("opacity" , "1")
 	$(".description12").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic9").css("position" , "absolute")
	$("#pic9").css("left" , "2vw")
	$("#pic9").css("top" , "550vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color13").click(function () {
	$(".color13").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color13").css("opacity" , "1")
 	$(".description13").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic12").css("opacity" , "0")
 	$("#pic14").css("position" , "absolute")
	$("#pic14").css("left" , "2vw")
	$("#pic14").css("top" , "638vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });
$(".color14").click(function () {
	$(".color14").css("background-color" , "hsl(258, 93%, 89%)")
 	$(".color14").css("opacity" , "1")
 	$(".description14").css("visibility" , "visible")
 	$("#pic2").css("opacity" , "0")
 	$("#pic3").css("opacity" , "0")
 	$("#pic4").css("opacity" , "0")
 	$("#pic5").css("opacity" , "0")
 	$("#pic6").css("opacity" , "0")
 	$("#pic7").css("opacity" , "0")
 	$("#pic8").css("opacity" , "0")
 	$("#pic9").css("opacity" , "0")
 	$("#pic10").css("opacity" , "0")
 	$("#pic11").css("opacity" , "0")
 	$("#pic14").css("opacity" , "0")
 	$("#pic13").css("opacity" , "0")
 	$("#pic1").css("opacity" , "0")
 	$("#pic12").css("position" , "absolute")
	$("#pic12").css("left" , "49vw")
	$("#pic12").css("top" , "638vh")
    //     counter++;
        // $(".pic1").css("opacity", "colorArray[counter]");
        // counter++;
        console.log("ok pls work")
    });

});