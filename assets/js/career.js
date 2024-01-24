// Drime Image Animation
const singalItem = document.querySelectorAll(".singalItem");

singalItem.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiverClass();
    item.classList.add("active");
  });
});

function removeActiverClass() {
  singalItem.forEach((item) => {
    item.classList.remove("active");
  });
}
