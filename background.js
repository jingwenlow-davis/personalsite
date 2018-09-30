    var one = "#1ABC9C",
		two = "#9B59B6",
		three = "#2980B9",
		four = "#f88f18",
		five = "#bb6774";

    $(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#one").position().top) {
				$('body').css('background', $("#one").attr("data-color"));
		};
		if ($(document).scrollTop() > $("#two").position().top) {
				$('body').css('background', $("#two").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#three").position().top) {

				$('body').css('background', $("#three").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#four").position().top) {

				$('body').css('background', $("#four").attr("data-color"))
		};
});
// jackHarnerSig("light")
