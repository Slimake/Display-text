(function() {
	const displayText = document.querySelector(".display-text");
	const input = document.querySelector(".text");
	const btn = document.querySelector(".btn");

	btn.addEventListener("click", function() {
		if (input.value) {
			displayText.classList.add("display");
			displayText.textContent = input.value;
			input.value = "";
		}
	});
})()

