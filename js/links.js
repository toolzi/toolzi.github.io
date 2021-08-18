function handleClick(e) {
  const classes = Array.from(e.target.classList);

  location.href = classes.includes("img01") && "sub_bx.html";

  location.href = classes.includes("img02") && "sub_ui.html";

  location.href = classes.includes("img03") && "sub_mobile.html";

  location.href = classes.includes("img04") && "sub_casamia.html";

  location.href = classes.includes("img05") && "sub_hera.html";
}

function init() {
  window.addEventListener("click", handleClick);
}

init();
