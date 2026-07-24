const galleryData = [
  {
    src: "assets/hero_bg.png",
    category: "Collision Repair",
    title: "Chassis Alignment & Tuning",
    desc: "Premium Porsche body restoration & precision suspension tuning.",
  },
  {
    src: "assets/paint_job.png",
    category: "Custom Paint",
    title: "Satin Black Refinishing",
    desc: "Computerized multi-stage painting & gloss correction.",
  },
  {
    src: "assets/collision_repair.png",
    category: "Collision Repair",
    title: "Body Panel Reconstruction",
    desc: "High-grade carbon fiber repair & structural reinforcement.",
  },
  {
    src: "assets/detailing.png",
    category: "Detailing",
    title: "9H Ceramic Coating Polish",
    desc: "Deep gloss wet-look finish & paint protection film detail.",
  },
];

document.getElementById("year").textContent = new Date().getFullYear();

// Navbar
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => navbar.classList.remove("open"));
});

// Gallery filters + lightbox
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCat = document.getElementById("lightbox-cat");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");
let activeIndex = null;

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    galleryItems.forEach((item) => {
      const show = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hidden", !show);
    });
  });
});

function openLightbox(index) {
  activeIndex = index;
  const item = galleryData[index];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;
  lightboxCat.textContent = item.category;
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = item.desc;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeIndex = null;
}

function navigateLightbox(direction) {
  if (activeIndex === null) return;
  if (direction === "prev") {
    activeIndex = activeIndex === 0 ? galleryData.length - 1 : activeIndex - 1;
  } else {
    activeIndex = activeIndex === galleryData.length - 1 ? 0 : activeIndex + 1;
  }
  openLightbox(activeIndex);
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", () => navigateLightbox("prev"));
document.getElementById("lightbox-next").addEventListener("click", () => navigateLightbox("next"));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navigateLightbox("prev");
  if (e.key === "ArrowRight") navigateLightbox("next");
});

// Service dropdown
const dropdown = document.getElementById("service-dropdown");
const serviceBtn = document.getElementById("service-btn");
const serviceLabel = document.getElementById("service-label");
const serviceInput = document.getElementById("service");
const serviceMenu = document.getElementById("service-menu");

serviceBtn.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

serviceMenu.querySelectorAll("button").forEach((option) => {
  option.addEventListener("click", () => {
    serviceInput.value = option.dataset.value;
    serviceLabel.textContent = option.dataset.value;
    serviceLabel.classList.remove("placeholder");
    dropdown.classList.remove("open");
  });
});

document.addEventListener("mousedown", (e) => {
  if (!dropdown.contains(e.target)) dropdown.classList.remove("open");
});

// Booking form (same simulated success as Next app)
const form = document.getElementById("booking-form");
const formSuccess = document.getElementById("form-success");
const formReset = document.getElementById("form-reset");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!serviceInput.value) {
    dropdown.classList.add("open");
    return;
  }
  setTimeout(() => {
    form.classList.add("hidden");
    formSuccess.classList.add("show");
    form.reset();
    serviceInput.value = "";
    serviceLabel.textContent = "Select a Service";
    serviceLabel.classList.add("placeholder");
  }, 800);
});

formReset.addEventListener("click", () => {
  formSuccess.classList.remove("show");
  form.classList.remove("hidden");
});
