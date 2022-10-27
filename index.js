/*function toggleCursor() {
  const cursor = document.getElementById("cursor");
  if (cursor.innerHTML == "█") {
    cursor.innerHTML = "▯";
  } else if (cursor.innerHTML == "▯") {
    cursor.innerHTML = "█";
  }
}*/

addEventListener('resize', (event) => {});

onresize = (event) => {
  const width = window.innerWidth;
  const navbar = document.getElementById("navbar");

  if (width <= 1200)
  {
    navbar.style.visibility = "hidden";
  }
  else
  {
    navbar.style.visibility = "visible"; 
  }
};

function changeTheme() {
  return;
}

//setInterval(toggleCursor, 500);
