/**
 * Shared header, footer and floating actions.
 * Tries fetch('partials/*.html'); falls back to the templates below (file:// / offline).
 */
(function () {
  const HEADER_HTML = `
<header class="site-chrome">
  <div class="topbar">
    <div class="container topbar__inner">
      <div class="topbar__contact">
        <a class="topbar__link" data-bind="phone" data-bind-href="phoneHref" href="tel:+919876543210"><i class="fa-solid fa-phone" aria-hidden="true"></i> <span>+91 98765 43210</span></a>
        <a class="topbar__link" data-bind="email" data-bind-href="mailto" href="mailto:info@rkrisacademy.edu.in"><i class="fa-solid fa-envelope" aria-hidden="true"></i> <span>info@rkrisacademy.edu.in</span></a>
      </div>
      <span class="badge badge--open">Admissions Open</span>
      <div class="topbar__right">
        <div class="topbar__social" data-social-links></div>
        <div class="quick-links">
          <button class="quick-links__btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="quick-links-menu">
            Quick Links <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
          </button>
          <ul class="quick-links__menu" id="quick-links-menu">
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="circulars.html">Circulars</a></li>
            <li><a href="notice-board.html">Events</a></li>
            <li><a href="notice-board.html">Notice Board</a></li>
            <li><a href="gallery.html#videos">Virtual Tour</a></li>
            <li><a href="contact.html#career">Career</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="header" id="siteHeader">
    <div class="container header__inner">
      <a class="logo" href="index.html" aria-label="RKris Academy home">
        <img src="assets/icons/logo.jpg" width="280" height="120" alt="RKris Academy">
        <span class="logo__text">
          <span class="logo__name">RKris Academy</span>
          <span class="logo__tag">Excellence with Character</span>
        </span>
      </a>
      <nav class="nav" aria-label="Primary">
        <ul class="nav__list">
          <li><a class="nav__link" data-nav="home" href="index.html">Home</a></li>
          <li class="nav__item">
            <a class="nav__link" data-nav="about" href="about.html" aria-haspopup="true">About <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>
            <ul class="nav__dropdown">
              <li><a href="about.html#history">About School</a></li>
              <li><a href="about.html#vision">Vision &amp; Mission</a></li>
              <li><a href="about.html#principal">Principal's Message</a></li>
              <li><a href="about.html#management">Management</a></li>
              <li><a href="about.html#affiliation">Affiliation &amp; Board Details</a></li>
              <li><a href="about.html#certificates">Recognition Certificates</a></li>
            </ul>
          </li>
          <li class="nav__item">
            <a class="nav__link" data-nav="academics" href="academics.html" aria-haspopup="true">Academics <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>
            <ul class="nav__dropdown">
              <li><a href="academics.html#curriculum">Curriculum</a></li>
              <li><a href="academics.html#classes">Classes Offered</a></li>
              <li><a href="academics.html#subjects">Subjects</a></li>
              <li><a href="academics.html#methodology">Teaching Methodology</a></li>
              <li><a href="academics.html#calendar">Academic Calendar</a></li>
            </ul>
          </li>
          <li><a class="nav__link" data-nav="faculty" href="faculty.html">Faculty</a></li>
          <li class="nav__item">
            <a class="nav__link" data-nav="facilities" href="facilities.html" aria-haspopup="true">Facilities <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>
            <div class="nav__mega" id="nav-facilities"></div>
          </li>
          <li class="nav__item">
            <a class="nav__link" data-nav="admissions" href="admissions.html" aria-haspopup="true">Admissions <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>
            <ul class="nav__dropdown">
              <li><a href="admissions.html#process">Admission Process</a></li>
              <li><a href="admissions.html#eligibility">Eligibility</a></li>
              <li><a href="admissions.html#dates">Important Dates</a></li>
              <li><a href="admissions.html#fees">Fee Structure</a></li>
              <li><a href="admissions.html#enquiry">Enquiry Form</a></li>
              <li><a href="admissions.html#downloads">Downloads</a></li>
            </ul>
          </li>
          <li class="nav__item">
            <a class="nav__link" data-nav="gallery" href="gallery.html" aria-haspopup="true">Gallery <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>
            <ul class="nav__dropdown">
              <li><a href="gallery.html#photos">Photos</a></li>
              <li><a href="gallery.html#videos">Videos</a></li>
            </ul>
          </li>
          <li><a class="nav__link" data-nav="notice" href="notice-board.html">Notice Board &amp; Events</a></li>
          <li><a class="nav__link" data-nav="circulars" href="circulars.html">Circulars &amp; Downloads</a></li>
          <li><a class="nav__link" data-nav="contact" href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <a class="btn btn--cta header__cta" href="admissions.html#enquiry">Admission Enquiry</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-drawer" aria-label="Open menu">
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="nav-overlay" id="nav-overlay" hidden></div>
  <aside class="drawer" id="mobile-drawer" aria-label="Mobile menu">
    <div class="drawer__head">
      <strong>Menu</strong>
      <button type="button" class="modal__close drawer__close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <ul class="drawer__list">
      <li><a href="index.html">Home</a></li>
      <li class="drawer__item">
        <button type="button" class="drawer__toggle">About <i class="fa-solid fa-plus"></i></button>
        <ul class="drawer__sub">
          <li><a href="about.html#history">About School</a></li>
          <li><a href="about.html#vision">Vision &amp; Mission</a></li>
          <li><a href="about.html#principal">Principal's Message</a></li>
          <li><a href="about.html#management">Management</a></li>
          <li><a href="about.html#affiliation">Affiliation &amp; Board Details</a></li>
          <li><a href="about.html#certificates">Recognition Certificates</a></li>
        </ul>
      </li>
      <li class="drawer__item">
        <button type="button" class="drawer__toggle">Academics <i class="fa-solid fa-plus"></i></button>
        <ul class="drawer__sub">
          <li><a href="academics.html#curriculum">Curriculum</a></li>
          <li><a href="academics.html#classes">Classes Offered</a></li>
          <li><a href="academics.html#subjects">Subjects</a></li>
          <li><a href="academics.html#methodology">Teaching Methodology</a></li>
          <li><a href="academics.html#calendar">Academic Calendar</a></li>
        </ul>
      </li>
      <li><a href="faculty.html">Faculty</a></li>
      <li class="drawer__item">
        <button type="button" class="drawer__toggle">Facilities <i class="fa-solid fa-plus"></i></button>
        <ul class="drawer__sub" id="drawer-facilities"></ul>
      </li>
      <li class="drawer__item">
        <button type="button" class="drawer__toggle">Admissions <i class="fa-solid fa-plus"></i></button>
        <ul class="drawer__sub">
          <li><a href="admissions.html#process">Admission Process</a></li>
          <li><a href="admissions.html#eligibility">Eligibility</a></li>
          <li><a href="admissions.html#dates">Important Dates</a></li>
          <li><a href="admissions.html#fees">Fee Structure</a></li>
          <li><a href="admissions.html#enquiry">Enquiry Form</a></li>
          <li><a href="admissions.html#downloads">Downloads</a></li>
        </ul>
      </li>
      <li class="drawer__item">
        <button type="button" class="drawer__toggle">Gallery <i class="fa-solid fa-plus"></i></button>
        <ul class="drawer__sub">
          <li><a href="gallery.html#photos">Photos</a></li>
          <li><a href="gallery.html#videos">Videos</a></li>
        </ul>
      </li>
      <li><a href="notice-board.html">Notice Board &amp; Events</a></li>
      <li><a href="circulars.html">Circulars &amp; Downloads</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a class="btn btn--cta btn--block" href="admissions.html#enquiry">Admission Enquiry</a></li>
    </ul>
  </aside>
</header>`;

  const FOOTER_HTML = `
<div class="site-end">
<footer class="footer">
  <div class="container footer__grid">
    <div class="footer__brand">
      <a class="logo" href="index.html">
        <img src="assets/icons/logo.jpg" width="280" height="120" alt="RKris Academy">
        <span class="logo__text">
          <span class="logo__name">RKris Academy</span>
          <span class="logo__tag">CBSE Affiliated</span>
        </span>
      </a>
      <p>An original neighbourhood school community offering CBSE education with sport, arts, coding and a strong pastoral culture.</p>
      <p><i class="fa-solid fa-location-dot" aria-hidden="true"></i> <span data-bind="address">Plot 21, Knowledge Park, Sector 12, Your City, State 201301, India</span></p>
      <p><i class="fa-solid fa-phone" aria-hidden="true"></i> <a data-bind="phone" data-bind-href="phoneHref" href="tel:+919876543210">+91 98765 43210</a></p>
      <p><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a data-bind="email" data-bind-href="mailto" href="mailto:info@rkrisacademy.edu.in">info@rkrisacademy.edu.in</a></p>
      <div class="topbar__social" data-social-links></div>
    </div>
    <div>
      <h3>Quick Links</h3>
      <ul class="footer__list">
        <li><a href="about.html">About</a></li>
        <li><a href="academics.html">Academics</a></li>
        <li><a href="faculty.html">Faculty</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="notice-board.html">Notice Board</a></li>
        <li><a href="circulars.html">Circulars</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="mandatory-disclosure.html">Mandatory Public Disclosure</a></li>
      </ul>
    </div>
    <div>
      <h3>Admissions</h3>
      <ul class="footer__list">
        <li><a href="admissions.html#process">Admission Process</a></li>
        <li><a href="admissions.html#fees">Fee Structure</a></li>
        <li><a href="admissions.html#enquiry">Enquiry Form</a></li>
        <li><a href="assets/docs/prospectus.pdf" download>Prospectus</a></li>
        <li><a href="mandatory-disclosure.html">Mandatory Public Disclosure</a></li>
      </ul>
    </div>
    <div>
      <h3>Facilities</h3>
      <ul class="footer__list" id="footer-facilities"></ul>
      <p class="footer__map"><a class="btn btn--outline" href="https://www.google.com/maps/search/?api=1&query=Knowledge+Park+India" data-bind-href="mapDirections" target="_blank" rel="noopener">View Map</a></p>
    </div>
  </div>
  <nav class="container footer__statements" aria-label="Important statements">
    <h3>Important Statements</h3>
    <ul>
      <li><a href="important-statements.html#copyright"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i> Copyright Statement</a></li>
      <li><a href="important-statements.html#hyperlinking"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i> Hyperlinking Policy</a></li>
      <li><a href="important-statements.html#terms"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i> Terms &amp; Condition</a></li>
      <li><a href="important-statements.html#privacy"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i> Privacy Policy</a></li>
      <li><a href="important-statements.html#disclaimer"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i> Disclaimer</a></li>
    </ul>
  </nav>
  <div class="container footer__meta">
    <p>Affiliated to <span data-bind="affiliationBoard">CBSE</span> / Affiliation No. <span data-bind="affiliationNo">XXXXXXX</span></p>
    <p>&copy; <span id="year"></span> RKris Academy. All rights reserved. <a href="mandatory-disclosure.html">Mandatory Public Disclosure</a></p>
  </div>
</footer>
<div class="float-stack">
  <a class="float-btn float-btn--wa" data-whatsapp-link href="https://wa.me/919876543210" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  <a class="float-btn float-btn--call" data-bind-href="phoneHref" href="tel:+919876543210" aria-label="Call the school"><i class="fa-solid fa-phone"></i></a>
  <button class="float-btn float-btn--top" type="button" id="backToTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
</div>
<nav class="mobile-bar" aria-label="Quick actions">
  <a data-bind-href="phoneHref" href="tel:+919876543210"><i class="fa-solid fa-phone"></i> Call</a>
  <a data-whatsapp-link href="https://wa.me/919876543210" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
  <a href="admissions.html#enquiry"><i class="fa-solid fa-pen-to-square"></i> Enquire</a>
</nav>
</div>`;

  async function loadPartial(url, fallback) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (res.ok) return await res.text();
    } catch (err) { /* file:// or offline */ }
    return fallback;
  }

  async function inject() {
    const headerMount = document.getElementById('site-header');
    const footerMount = document.getElementById('site-footer');
    const [header, footer] = await Promise.all([
      loadPartial('partials/header.html', HEADER_HTML),
      loadPartial('partials/footer.html', FOOTER_HTML)
    ]);
    if (headerMount) headerMount.outerHTML = header;
    if (footerMount) footerMount.outerHTML = footer;
    document.dispatchEvent(new Event('partials:ready'));
  }

  inject();
})();
