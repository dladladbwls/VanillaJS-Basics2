// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

function handleSize() {
  let width = window.innerWidth;

  if (width < 800) {
    body.className = "blue";
  } else if (1200 < width) {
    body.className = "yellow";
  } else {
    body.className = "purple";
  }
}

window.addEventListener("resize", handleSize);
