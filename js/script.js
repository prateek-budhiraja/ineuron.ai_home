const next = document.getElementById("next");
const prev = document.getElementById("prev");
const cards = document.getElementsByClassName("cards");

next.addEventListener("click", (e) => {
	cards[0].scrollBy(400, 0);
});
prev.addEventListener("click", (e) => {
	cards[0].scrollBy(-400, 0);
});
