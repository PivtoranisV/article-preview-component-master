const shareOpen = document.querySelector(".user__share-open");
const shareClose = document.querySelector(".share__icon-close");
const shareWindow = document.querySelector(".absolute");
const avatarWindow = document.querySelector(".user");

shareOpen.addEventListener("click", () => {
  shareWindow.classList.remove("hidden");
});

shareClose.addEventListener("click", () => {
  shareWindow.classList.add("hidden");
});
