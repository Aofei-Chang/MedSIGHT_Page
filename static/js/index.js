// Small enhancements for the MEDSIGHT project page.
// Smooth-scroll for in-page anchors and basic image-not-found fallback.

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // If the tutorial video file is missing, hide the broken <video> element
  // and show a small placeholder message so the page still looks clean.
  var v = document.querySelector(".video-wrapper video");
  if (v) {
    v.addEventListener("error", function () {
      var wrap = v.parentElement;
      wrap.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;' +
        "height:100%;background:#111;color:#bbb;font-size:15px;text-align:center;" +
        'padding:24px;">Video coming soon &mdash; place your file at ' +
        "<code style='margin:0 6px;background:#222;color:#ddd;'>static/videos/tutorial.mp4</code>" +
        "</div>";
    });
  }
});
