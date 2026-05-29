// Small enhancements for the MEDSIGHT project page.
// Smooth-scroll for in-page anchors and basic image-not-found fallback.

// Auto-fit each <figure> to its image's natural visual size so small images
// don't get stretched and don't leave huge empty space around them.
//
// Heuristic: most figures we ship are exported at ~2x density for HiDPI
// screens. Treating naturalWidth as 2x of the intended CSS width gives a
// good visual scale. The result is clamped by an optional `data-max` on the
// <figure> (and by the parent container).
function autoFitFigures() {
  var figures = document.querySelectorAll("figure");
  figures.forEach(function (fig) {
    var img = fig.querySelector("img");
    if (!img) return;

    var apply = function () {
      var nw = img.naturalWidth;
      if (!nw) return;
      // Default density assumption (overridable per <figure data-density="1.5">)
      var density = parseFloat(fig.dataset.density) || 2;
      var intended = Math.round(nw / density);

      // Optional explicit cap (e.g. <figure data-max="500">)
      var cap = parseInt(fig.dataset.max, 10);
      if (!isNaN(cap)) intended = Math.min(intended, cap);

      fig.style.maxWidth = intended + "px";
      fig.style.marginLeft = "auto";
      fig.style.marginRight = "auto";
    };

    if (img.complete && img.naturalWidth) apply();
    else img.addEventListener("load", apply);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  autoFitFigures();

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
