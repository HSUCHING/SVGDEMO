/**
 * Created by i068959 on 15/9/9.
 */

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 960,
	height = 500;

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(32," + (height / 2) + ")");

//function update(data) {
//
//	// DATA JOIN
//	// Join new data with old elements, if any.
//	var text = svg.selectAll("text")
//		.data(data);
//
//	// UPDATE
//	// Update old elements as needed.
//	text.attr("class", "update");
//
//	// ENTER
//	// Create new elements as needed.
//	text.enter().append("text")
//		.attr("class", "enter")
//		.attr("x", function(d, i) { return i * 32; })
//		.attr("dy", ".35em");
//
//	// ENTER + UPDATE
//	// Appending to the enter selection expands the update selection to include
//	// entering elements; so, operations on the update selection after appending to
//	// the enter selection will apply to both entering and updating nodes.
//	text.text(function(d) { return d; });
//
//	// EXIT
//	// Remove old elements as needed.
//	text.exit().remove();
//}

function update(data) {

	// DATA JOIN
	// Join new data with old elements, if any.
	//svg.selectAll("text"):原先svg里面的数据数组总数，text是旧数据数组里面包含新数据数组的元素，text里面的数组下标是新数据数组下标。
	var text = svg.selectAll("text")
		.data(data, function (d) {
			return d;
		});

	// UPDATE
	// Update old elements as needed.
	text.attr("class", "update");

	// ENTER
	// Create new elements as needed.
	//text.enter()：新数据数组里面不同于旧数据数组中的新插入的元素。text.enter()：里面的数组下标是新数据数组下标。也就是text与text.enter()构成了新的数据数组：包含原先有的和新插入的。
	text.enter().append("text")
		.attr("class", "enter")
		.attr("dy", ".35em")
		.text(function (d) {
			return d;
		});

	//text.exit()：旧数据数组里面没有出现在新数据数组里面的元素，即:需要删除的元素
	// ENTER + UPDATE
	// Appending to the enter selection expands the update selection to include
	// entering elements; so, operations on the update selection after appending to
	// the enter selection will apply to both entering and updating nodes.
	text.attr("x", function (d, i) {
		return i * 32;
	});

	// EXIT
	// Remove old elements as needed.
	text.exit().remove();
}

// The initial display.
update(alphabet);

// Grab a random sample of letters from the alphabet, in alphabetical order.
setInterval(function () {
	update(d3.shuffle(alphabet)
		.slice(0, Math.floor(Math.random() * 26))
		.sort());
}, 1500);
