function clickCounter() {
	if (typeof (Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;

			if (localStorage.clickcount < 10) {
				document.getElementById("score").innerHTML = (((localStorage.clickcount / 13) * 100).toFixed(0)) + "%";
				document.getElementById("result").innerHTML = ("Sorry but you have scored less than the required amount to unlock the online quiz please click &#34;Reset&#34; and try agian");
			} else if (localStorage.clickcount <= 13) {
				document.getElementById("score").innerHTML = (((localStorage.clickcount / 13) * 100).toFixed(0)) + "%";
				document.getElementById("result").innerHTML = ("Congradulations you have scored more than 80% on the quiz, you can now continue to the next online quiz<br><br>https://www.google.ca");
			}
		} else {
			localStorage.clickcount = 1;
		}
	} else {
		localStorage.clickcount = 1;
	}
}

function result() {
	(localStorage.clickcount)
	localStorage.clickcount = Number(localStorage.clickcount) + 1;

	if (localStorage.clickcount < 10) {
		document.getElementById("score").innerHTML = (((localStorage.clickcount / 13) * 100).toFixed(0)) + "%";
		document.getElementById("result").innerHTML = ("Sorry but you have scored less than the required amount to unlock the online quiz please click &#34;Reset&#34; and try agian");
	} else if (localStorage.clickcount <= 13) {
		document.getElementById("score").innerHTML = (((localStorage.clickcount / 13) * 100).toFixed(0)) + "%";
		document.getElementById("result").innerHTML = ("Congradulations you have scored more than 80% on the quiz, you can now continue to the next online quiz<br><br>https://www.google.ca");
	}
}

function deleteItems() {
	localStorage.clear();
}
