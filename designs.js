$(function () {
	// Select color input
	// Select size input

	// When size is submitted by the user, call makeGrid()
	$("input[type='submit']").click(function (evt) {
		makeGrid();
		evt.preventDefault();
	});

	$("#pixel_canvas").on("click", "td", function (evt) {
		$(this).css("background-color", $("#colorPicker").val());
	});

	function makeGrid() {
		let container = $("#pixel_canvas");
		container.empty();
		let rowCount = $("#input_height").val();
		let columnCount = $("#input_width").val();

		for (let row = 0; row < rowCount; row++) {
			let row = $("<tr>");
			for (let col = 0; col < columnCount; col++) {
				let column = $("<td>");
				row.append(column);
			}
			container.append(row);
		}
	}
});