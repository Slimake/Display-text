(function() {
	const displayText = document.querySelector(".display-text");
	const input = document.querySelector(".text");
	const btn = document.querySelector(".btn");

	function show() {
		if (input.value) {
			displayText.classList.add("display");
			displayText.textContent = input.value;
			input.value = "";
		}
	}

	btn.addEventListener("click", function() {
		show();
	});

	input.addEventListener("keydown", function(e) {
		if (e.keyCode === 13) {
			show();
		}
	});
})()

