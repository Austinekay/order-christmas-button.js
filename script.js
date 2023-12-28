document.getElementById("button").addEventListener("click", (e) => {
  document.getElementById("tree").classList.add("animation");
  e.target.classList.add("hide_text");

  setTimeout(function () {
    e.target.classList.remove("hide_text");
    e.target.classList.add("tree-ready");
    document.getElementById("tree").classList.remove("animation");
    document.getElementById("button_title").innerText =
      "Your Christmas tree is ready";
    document.getElementById("tree").classList.add("decorated");
  }, 7000);
});
