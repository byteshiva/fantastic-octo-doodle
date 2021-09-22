var flipbookEL = document.getElementById('flipbook');

window.addEventListener('resize', function (e) {
	flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});

$(flipbookEL).turn({
    autoCenter: true
});


$("#pageFld").val($("#flipbook").turn("page"));

$("#flipbook").bind("turned", function(event, page, view) {
		$("#pageFld").val(page);
});

$("#pageFld").change(function() {
		$("#flipbook").turn("page", $(this).val());
});

$("#prevBtn").click(function() {
		$("#flipbook").turn("previous");
});

$("#nextBtn").click(function() {
		$("#flipbook").turn("next");
});
