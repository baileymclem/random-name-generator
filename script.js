let adjDisplay = document.getElementById("adjective-div");
let nounDisplay = document.getElementById("noun-div");

function generator() {
	fetch("https://random-word-form.herokuapp.com/random/adjective")
		.then((response) => response.json())
		.then((data) => {
			let adjective = data[0];
			adjDisplay.innerHTML = adjective + "-";
		});

	fetch("https://random-word-form.herokuapp.com/random/noun")
		.then((response) => response.json())
		.then((data) => {
			let noun = data[0];
			nounDisplay.innerHTML = noun;
		});
}
