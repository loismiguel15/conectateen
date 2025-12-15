// ===============================
// CONECTATEEN - SCRIPT PRINCIPAL
// ===============================

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimation();
  initSmoothScroll();
  initNavbarEffect();
  initContactForm();
});

// ===============================
// Animação suave ao rolar a página
// ===============================
function initScrollAnimation() {
  const elements = document.querySelectorAll(".card, .section, .stats div");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
}

// ===============================
// Scroll suave para âncoras
// ===============================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ===============================
// Efeito na navbar ao rolar
// ===============================
function initNavbarEffect() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ===============================
// Simulação de envio do formulário
// ===============================
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = form.querySelector("button");
    button.innerText = "Enviando...";
    button.disabled = true;

    setTimeout(() => {
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
      button.innerText = "Enviar";
      button.disabled = false;
    }, 1500);
  });
}

// ===============================
// MENU MOBILE
// ===============================
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// ===============================
// LOGIN
// ===============================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("logged", "true");
    window.location.href = "dashboard.html";
  });
}

// ===============================
// CADASTRO
// ===============================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
  });
}

// ===============================
// PROTEÇÃO DO DASHBOARD
// ===============================
if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("logged") !== "true") {
    window.location.href = "login.html";
  }
}

// ===============================
// LOGOUT
// ===============================
const logout = document.getElementById("logout");

if (logout) {
  logout.addEventListener("click", () => {
    localStorage.removeItem("logged");
    window.location.href = "login.html";
  });
}
