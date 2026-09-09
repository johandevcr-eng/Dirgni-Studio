var GA_MEASUREMENT_ID = "G-TU-ID-AQUI"; // <-- Pon tu ID real aquí

function loadGoogleAnalytics() {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

document.addEventListener("DOMContentLoaded", function () {
  var pref = localStorage.getItem("dirgnistudio_cookie_consent");

  if (pref === "accepted") {
    loadGoogleAnalytics();
  } else if (!pref) {
    var banner = document.getElementById("cookie-banner");
    if (banner) {
      banner.classList.remove("hidden");
      banner.classList.add("flex");
    }
  }

  var acceptBtn = document.getElementById("cookie-accept");
  if (acceptBtn) {
    acceptBtn.onclick = function () {
      localStorage.setItem("dirgnistudio_cookie_consent", "accepted");
      var banner = document.getElementById("cookie-banner");
      if (banner) {
        banner.classList.add("hidden");
        banner.classList.remove("flex");
      }
      loadGoogleAnalytics();
    };
  }

  var essentialBtn = document.getElementById("cookie-essential");
  if (essentialBtn) {
    essentialBtn.onclick = function () {
      localStorage.setItem("dirgnistudio_cookie_consent", "essential");
      var banner = document.getElementById("cookie-banner");
      if (banner) {
        banner.classList.add("hidden");
        banner.classList.remove("flex");
      }
    };
  }

  var rejectBtn = document.getElementById("cookie-reject");
  if (rejectBtn) {
    rejectBtn.onclick = function () {
      localStorage.setItem("dirgnistudio_cookie_consent", "rejected");
      var banner = document.getElementById("cookie-banner");
      if (banner) {
        banner.classList.add("hidden");
        banner.classList.remove("flex");
      }
    };
  }
});