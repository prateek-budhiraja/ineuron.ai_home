const next = document.getElementById("next");
const prev = document.getElementById("prev");
const cards = document.getElementsByClassName("cards");
const mentorNext = document.getElementById("mentor-next");
const mentorPrev = document.getElementById("mentor-prev");
const mentorCards = document.getElementsByClassName("mentor-cards");

next.addEventListener("click", (e) => {
	cards[0].scrollBy(400, 0);
});
prev.addEventListener("click", (e) => {
	cards[0].scrollBy(-400, 0);
});
mentorNext.addEventListener("click", (e) => {
	mentorCards[0].scrollBy(400, 0);
});
mentorPrev.addEventListener("click", (e) => {
	mentorCards[0].scrollBy(-400, 0);
});
