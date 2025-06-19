// Navigation hover animation
const navLinks = document.querySelectorAll('.nav-link');
const navBackground = document.getElementById('nav-background');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const linkRect = link.getBoundingClientRect();
    const containerRect = link.parentElement.getBoundingClientRect();

    navBackground.style.opacity = '1';
    navBackground.style.left = `${linkRect.left - containerRect.left}px`;
    navBackground.style.width = `${linkRect.width}px`;
    navBackground.style.height = `${linkRect.height}px`;
    navBackground.style.top = `${linkRect.top - containerRect.top}px`;
  });
});

document.querySelector('.nav-container').addEventListener('mouseleave', () => {
  navBackground.style.opacity = '0';
});

// Theme toggle functionality
function setupThemeToggle(lightBtn, darkBtn) {
  lightBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
    // Sync both toggles
    document.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.textContent === '☀️') btn.classList.add('active');
      else btn.classList.remove('active');
    });
  });

  darkBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
    // Sync both toggles
    document.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.textContent === '🌙') btn.classList.add('active');
      else btn.classList.remove('active');
    });
  });
}

// Setup theme toggles for both desktop and mobile
setupThemeToggle(document.getElementById('light-btn'), document.getElementById('dark-btn'));
setupThemeToggle(document.getElementById('mobile-light-btn'), document.getElementById('mobile-dark-btn'));

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// Header blur effect on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Section visibility animation
const sections = document.querySelectorAll('.section');
const projectCards = document.querySelectorAll('.project-card');
const skillItems = document.querySelectorAll('.skill-item');
const timelineItems = document.querySelectorAll('.timeline-item');
const scrollBtn = document.getElementById('scrollTopBtn');

function checkVisibility() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 1.2 && rect.bottom >= 0) {
      section.classList.add('visible');
    }
  });

  // Animate project cards with stagger effect
  projectCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 1.2 && rect.bottom >= 0) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150);
    }
  });

  // Animate skill items with stagger effect
  skillItems.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 1.2 && rect.bottom >= 0) {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 100);
    }
  });

  // Animate timeline items with stagger effect
  timelineItems.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 1.2 && rect.bottom >= 0) {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200);
    }
  });

  // Show/hide scroll to top button
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Scroll to top functionality
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
