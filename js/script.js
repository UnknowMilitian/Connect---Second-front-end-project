document.querySelector(".scrollTop").style.display = "none";

window.onscroll = () => {
  if (document.documentElement.scrollTop < 10 || document.body.scrollTop > 10) {
    document.querySelector(".scrollTop").style.display = "none";
  } else {
    document.querySelector(".scrollTop").style.display = "block";
  }
};

function scrollToTop() {
  window.scrollTo(0, 0);
}
