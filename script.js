// ================= ELEMENTS =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const footerYear = document.getElementById("year");

// ================= MOBILE NAVIGATION =================
// Close the mobile navigation menu.
function closeNavigationMenu() {
  if (!menuToggle || !navLinks) {
    return;
  }
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  const menuIcon = menuToggle.querySelector("i");
  if (menuIcon) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
}

// Open and close the mobile navigation menu.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    const menuIcon = menuToggle.querySelector("i");
    if (menuIcon) {
      menuIcon.classList.toggle("fa-bars", !isOpen);
      menuIcon.classList.toggle("fa-xmark", isOpen);
    }
  });

  // Close the menu after selecting a section.
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigationMenu();
    });
  });

  // Close the menu when clicking outside the navigation.
  document.addEventListener("click", (event) => {
    const clickedInsideNavigation =
      navLinks.contains(event.target) ||
      menuToggle.contains(event.target);
    if (!clickedInsideNavigation) {
      closeNavigationMenu();
    }
  });

  // Close the menu when pressing Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigationMenu();
      menuToggle.focus();
    }
  });

  // Close the mobile menu when switching to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      closeNavigationMenu();
    }
  });
}

// ================= FOOTER YEAR =================
// Automatically display the current year.
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

