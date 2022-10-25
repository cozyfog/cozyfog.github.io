function toggleCursor() {
  const cursor = document.getElementById("cursor");
  if (cursor.innerHTML == "█") {
    cursor.innerHTML = "▯";
  } else if (cursor.innerHTML == "▯") {
    cursor.innerHTML = "█";
  }
}

setInterval(toggleCursor, 500);
