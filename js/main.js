// ============================================
// THEME MANAGEMENT (Dark Mode)
// ============================================

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.themeToggle = document.querySelector('.theme-toggle');
    this.init();
  }

  init() {
    // Set initial theme
    this.setTheme(this.theme);
    
    // Listen for theme toggle clicks
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateThemeIcon() {
    if (this.themeToggle) {
      this.themeToggle.textContent = this.theme === 'light' ? '🌙' : '☀️';
      this.themeToggle.setAttribute('aria-label', 
        this.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      );
    }
  }
}

// ============================================
// MOBILE NAVIGATION
// ============================================

class MobileNav {
  constructor() {
    this.navToggle = document.querySelector('.nav__toggle');
    this.navMenu = document.querySelector('.nav__menu');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.init();
  }

  init() {
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMenu());
    }

    // Close menu when clicking nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.navMenu && 
          !this.navMenu.contains(e.target) && 
          !this.navToggle.contains(e.target)) {
        this.closeMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.navMenu.classList.toggle('active');
    const isOpen = this.navMenu.classList.contains('active');
    this.navToggle.setAttribute('aria-expanded', isOpen);
    this.navToggle.textContent = isOpen ? '✕' : '☰';
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.navMenu.classList.remove('active');
    this.navToggle.setAttribute('aria-expanded', 'false');
    this.navToggle.textContent = '☰';
    document.body.style.overflow = '';
  }
}

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

class NavHighlighter {
  constructor() {
    this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
    this.navLinks = document.querySelectorAll('.nav__link');
    this.init();
  }

  init() {
    this.navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === this.currentPage || 
         (this.currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================

class ScrollAnimations {
  constructor() {
    this.elements = document.querySelectorAll('.fade-in');
    this.init();
  }

  init() {
    if (this.elements.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    this.elements.forEach(element => observer.observe(element));
  }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// ============================================
// INITIALIZE ALL MODULES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  new ThemeManager();
  new MobileNav();
  new NavHighlighter();
  new ScrollAnimations();
  new SmoothScroll();

  // Console message for developers
  console.log('%c👨‍💻 Portfolio Website', 'font-size: 20px; font-weight: bold; color: #2563eb;');
  console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'font-size: 12px; color: #64748b;');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ThemeManager, MobileNav, NavHighlighter, ScrollAnimations, SmoothScroll };
}
