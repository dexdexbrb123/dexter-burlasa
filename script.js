function toggleReadMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read less";
  } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read more";
  }
}

