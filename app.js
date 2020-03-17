(function() {
  const cursor = document.querySelector(".cursor");
  const navlinks = document.querySelectorAll("nav ul li");
  const btn = document.querySelector(".btn");

  window.addEventListener("mousemove", event => {
    cursor.style.top = `${event.pageY}px`;
    cursor.style.left = `${event.pageX}px`;
  });

  navlinks.forEach(navlink => {
    navlink.addEventListener("mouseover", () => {
      cursor.classList.add("cursorOnNav");
    });

    navlink.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursorOnNav");
    });
  });

  btn.addEventListener("mouseover", () => {
    cursor.classList.add("cursorOnNav");
  });

  btn.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursorOnNav");
  });
})();
