// 모든 쪽 공통: 메일 링크 · 버전 · 내려받기 버튼을 config.js 값으로 채워요.
(function () {
  var c = window.CAV_SITE || {};
  var P = c.PRODUCTS || {};
  function mailto(product) {
    var name = (P[product] && P[product].NAME) || "Cavalier";
    return "mailto:" + c.EMAIL + "?subject=" + encodeURIComponent(name + " 라이선스 문의");
  }
  document.querySelectorAll("[data-mail]").forEach(function (a) {
    a.href = mailto(a.getAttribute("data-mail"));
    if (a.hasAttribute("data-mail-text")) a.textContent = c.EMAIL;
  });
  document.querySelectorAll("[data-seller]").forEach(function (s) { s.textContent = c.SELLER || ""; });
  function meta(p) {
    return ["Windows 10 · 11 (64비트)", p.VERSION, p.SIZE].filter(Boolean).join(" · ");
  }
  document.querySelectorAll("[data-meta]").forEach(function (el) {
    var p = P[el.getAttribute("data-meta")] || {};
    el.textContent = meta(p);
  });
  document.querySelectorAll("[data-ver]").forEach(function (el) {
    var p = P[el.getAttribute("data-ver")] || {};
    el.textContent = p.VERSION || "";
  });
  document.querySelectorAll("[data-dl]").forEach(function (a) {
    var p = P[a.getAttribute("data-dl")] || {};
    if (p.DOWNLOAD_URL) {
      a.href = p.DOWNLOAD_URL;
    } else if (a.hasAttribute("data-dl-main")) {
      a.textContent = "곧 공개돼요";
      a.removeAttribute("href");
      a.style.opacity = ".6";
      a.setAttribute("aria-disabled", "true");
      var note = document.getElementById(a.getAttribute("data-dl-main"));
      if (note) note.textContent = "내려받기는 곧 열려요. 먼저 써 보고 싶으면 이메일로 문의해 주세요.";
    }
  });
})();
