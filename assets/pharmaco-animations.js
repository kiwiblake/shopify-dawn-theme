/**
 * Pharmaco Women's Health - Custom Animations & Interactions
 * Handles scroll animations, header transitions, and interactive elements
 */

// Intersection Observer for scroll animations
const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('[class*="animate-"]');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
};

// Header scroll behavior
const initHeaderScroll = () => {
  const header = document.querySelector('[data-pharmaco-header]');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 20;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
};

// Mobile menu toggle
const initMobileMenu = () => {
  const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuClose = document.querySelector('[data-mobile-menu-close]');

  if (!menuToggle || !mobileMenu) return;

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  };

  menuToggle.addEventListener('click', toggleMenu);

  if (menuClose) {
    menuClose.addEventListener('click', toggleMenu);
  }

  // Close menu on link click
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggleMenu();
    }
  });
};

// Smooth scroll for anchor links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// FAQ Accordion functionality
const initAccordions = () => {
  const accordionButtons = document.querySelectorAll('[data-accordion-trigger]');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('[data-accordion-item]');
      const content = item.querySelector('[data-accordion-content]');
      const isOpen = item.classList.contains('is-open');

      // Close all other accordions in the same group
      const group = item.closest('[data-accordion-group]');
      if (group) {
        group.querySelectorAll('[data-accordion-item].is-open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('is-open');
            const openContent = openItem.querySelector('[data-accordion-content]');
            openContent.style.maxHeight = null;
          }
        });
      }

      // Toggle current accordion
      item.classList.toggle('is-open');

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });
};

// Lazy load images
const initLazyLoad = () => {
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
};

// Initialize all on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initAccordions();
    initLazyLoad();
  });
} else {
  initScrollAnimations();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initAccordions();
  initLazyLoad();
}

// Reinitialize on section load (for Shopify theme editor)
if (Shopify && Shopify.designMode) {
  document.addEventListener('shopify:section:load', () => {
    initScrollAnimations();
    initAccordions();
  });
}
