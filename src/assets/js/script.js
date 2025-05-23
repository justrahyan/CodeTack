// Dropdown Desktop
const toggle = document.getElementById("materiToggle");
const menu = document.getElementById("materiMenu");
const icon = document.getElementById("materiIcon");
const tantanganToggle = document.getElementById("tantanganToggle");
const tantanganMenu = document.getElementById("tantanganMenu");
const tantanganIcon = document.getElementById("tantanganIcon");
function closeAllDropdowns() {
  menu.classList.add("hidden");
  icon.classList.remove("rotate-180");
  tantanganMenu.classList.add("hidden");
  tantanganIcon.classList.remove("rotate-180");
}
// Materi
toggle.addEventListener("click", function (e) {
  e.stopPropagation();
  const isHidden = menu.classList.contains("hidden");
  closeAllDropdowns();
  if (isHidden) {
    menu.classList.remove("hidden");
    icon.classList.add("rotate-180");
  }
});
// Tantangan
tantanganToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  const isHidden = tantanganMenu.classList.contains("hidden");
  closeAllDropdowns();
  if (isHidden) {
    tantanganMenu.classList.remove("hidden");
    tantanganIcon.classList.add("rotate-180");
  }
});
document.addEventListener("click", function (e) {
  if (
    !toggle.contains(e.target) &&
    !menu.contains(e.target) &&
    !tantanganToggle.contains(e.target) &&
    !tantanganMenu.contains(e.target)
  ) {
    closeAllDropdowns();
  }
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("hamburgerButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerIcon = mobileMenuButton.querySelector(".hamburger-icon");
  const closeIcon = mobileMenuButton.querySelector(".close-icon");

  // Toggle Mobile Menu
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("opacity-0");
    closeIcon.classList.toggle("opacity-0");
    mobileMenuButton.querySelector("svg").classList.toggle("rotate-90");
  });
});

// Salin Kode Materi
function salinKode(button) {
  const codeBlock = button.closest(".relative").querySelector("code");
  const text = codeBlock.innerText;
  navigator.clipboard.writeText(text).then(() => {
    button.innerText = "Disalin!";
    setTimeout(() => (button.innerText = "Salin Kode"), 2000);
  });
}

// Tab Demo Interaktif
const editorPanel = document.getElementById("editor-panel");
const previewPanel = document.getElementById("preview");
const textarea = document.getElementById("htmlCode");

// Set srcdoc awal preview
previewPanel.srcdoc = textarea.value;

// Update preview saat input
textarea.addEventListener("input", () => {
  previewPanel.srcdoc = textarea.value;
});

// Optional: Reset height saat resize supaya tetap responsive
const container = document.querySelector(".editor-container");
const adjustHeight = () => {
  // Kita set container fixed height 500px (bisa diubah)
  container.style.height = "500px";
};
window.addEventListener("resize", adjustHeight);
adjustHeight();
