let mouseCursorfollow = document.querySelector(".cursor-follow");
let navLinksfollow = document.querySelector(".link");


window.addEventListener("mousemove", cursor);

function cursor (e) {
  mouseCursorfollow.style.top = e.pageY + "px";
  mouseCursorfollow.style.left = e.pageX + "px";
}

navLinksfollow.forEach(link => {
link.addEventListener("mouseover", () => {
    mouseCursorfollow.classList.add("link-grow-follow")
});
});
    