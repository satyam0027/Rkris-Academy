/**
 * RKris Academy — global behaviour
 * Nav, sticky header, slider, counters, reveal, page renderers
 */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function isRecent(iso, days) {
    const d = new Date(iso + 'T00:00:00');
    return (Date.now() - d.getTime()) / 86400000 <= (days || 21);
  }

  function getPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
  }

  function hydrateSiteInfo(root) {
    if (typeof SITE_INFO === 'undefined') return;
    qsa('[data-bind]', root).forEach(function (el) {
      const val = getPath(SITE_INFO, el.dataset.bind);
      if (val == null) return;
      const span = el.querySelector('span:last-child');
      if (span && el.children.length) span.textContent = val;
      else el.textContent = val;
    });
    qsa('[data-bind-href]', root).forEach(function (el) {
      const key = el.dataset.bindHref;
      if (key === 'mailto') el.setAttribute('href', 'mailto:' + SITE_INFO.email);
      else {
        const val = getPath(SITE_INFO, key);
        if (val) el.setAttribute('href', val);
      }
    });
    const wa = 'https://wa.me/' + SITE_INFO.whatsapp;
    qsa('[data-whatsapp-link]', root).forEach(function (el) { el.setAttribute('href', wa); });
    qsa('[data-social-links]', root).forEach(function (el) {
      const s = SITE_INFO.social;
      el.innerHTML = [
        ['facebook', 'fa-brands fa-facebook-f', s.facebook],
        ['instagram', 'fa-brands fa-instagram', s.instagram],
        ['youtube', 'fa-brands fa-youtube', s.youtube],
        ['twitter', 'fa-brands fa-x-twitter', s.twitter],
        ['linkedin', 'fa-brands fa-linkedin-in', s.linkedin]
      ].map(function (item) {
        return '<a href="' + item[2] + '" target="_blank" rel="noopener" aria-label="' + item[0] + '"><i class="' + item[1] + '"></i></a>';
      }).join('');
    });
    const year = qs('#year', root);
    if (year) year.textContent = new Date().getFullYear();
    qsa('[data-map-embed]', root).forEach(function (el) {
      if (SITE_INFO.mapEmbed) el.setAttribute('src', SITE_INFO.mapEmbed);
    });
  }

  function buildFacilitiesNav() {
    if (typeof FACILITIES === 'undefined') return;
    const mega = qs('#nav-facilities');
    const drawer = qs('#drawer-facilities');
    const footer = qs('#footer-facilities');
    const links = FACILITIES.map(function (f) {
      return '<a href="facility.html?id=' + encodeURIComponent(f.slug) + '">' + f.title + '</a>';
    }).join('');
    if (mega) mega.innerHTML = links;
    if (drawer) {
      drawer.innerHTML = FACILITIES.map(function (f) {
        return '<li><a href="facility.html?id=' + encodeURIComponent(f.slug) + '">' + f.title + '</a></li>';
      }).join('');
    }
    if (footer) {
      footer.innerHTML = FACILITIES.slice(0, 8).map(function (f) {
        return '<li><a href="facility.html?id=' + encodeURIComponent(f.slug) + '">' + f.title + '</a></li>';
      }).join('') + '<li><a href="facilities.html">View all facilities</a></li>';
    }
  }

  function markActiveNav() {
    const page = document.body.dataset.page;
    qsa('[data-nav="' + page + '"]').forEach(function (el) {
      el.classList.add('is-active');
      el.setAttribute('aria-current', 'page');
    });
  }

  function initNav() {
    const header = qs('#siteHeader') || qs('.header');
    const toggle = qs('.nav-toggle');
    const drawer = qs('#mobile-drawer');
    const overlay = qs('#nav-overlay');
    const closeBtn = qs('.drawer__close');

    function openDrawer() {
      if (!drawer) return;
      drawer.classList.add('is-open');
      if (overlay) {
        overlay.hidden = false;
        overlay.classList.add('is-visible');
      }
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      closeBtn && closeBtn.focus();
    }
    function closeDrawer() {
      if (!drawer) return;
      drawer.classList.remove('is-open');
      if (overlay) {
        overlay.classList.remove('is-visible');
        overlay.hidden = true;
      }
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle && toggle.focus();
    }

    toggle && toggle.addEventListener('click', openDrawer);
    closeBtn && closeBtn.addEventListener('click', closeDrawer);
    overlay && overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) closeDrawer();
    });

    qsa('.drawer__toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = btn.closest('.drawer__item');
        const open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
        const icon = btn.querySelector('i');
        if (icon) icon.className = open ? 'fa-solid fa-minus' : 'fa-solid fa-plus';
      });
    });

    qsa('.nav__item > .nav__link').forEach(function (link) {
      link.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          const item = link.parentElement;
          if (item.querySelector('.nav__dropdown, .nav__mega')) {
            e.preventDefault();
            item.classList.toggle('is-open');
          }
        }
        if (e.key === 'Escape') link.parentElement.classList.remove('is-open');
      });
    });

    const quick = qs('.quick-links');
    const quickBtn = qs('.quick-links__btn');
    if (quickBtn) {
      quickBtn.addEventListener('click', function () {
        const open = quick.classList.toggle('is-open');
        quickBtn.setAttribute('aria-expanded', String(open));
      });
    }

    window.addEventListener('scroll', function () {
      if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
    }, { passive: true });
  }

  function initSlider() {
    const root = qs('[data-slider]');
    if (!root) return;
    const slides = qsa('.slider__slide', root);
    const dotsWrap = qs('.slider__dots', root);
    let index = 0;
    let timer = null;
    const delay = 6500;

    slides.forEach(function (_, i) {
      const b = document.createElement('button');
      b.className = 'slider__dot' + (i === 0 ? ' is-active' : '');
      b.type = 'button';
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      b.addEventListener('click', function () { go(i); restart(); });
      dotsWrap && dotsWrap.appendChild(b);
    });

    function go(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === index); });
      qsa('.slider__dot', root).forEach(function (d, n) { d.classList.toggle('is-active', n === index); });
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }
    function restart() {
      if (reduceMotion) return;
      clearInterval(timer);
      timer = setInterval(next, delay);
    }

    qs('.slider__nav--next', root) && qs('.slider__nav--next', root).addEventListener('click', function () { next(); restart(); });
    qs('.slider__nav--prev', root) && qs('.slider__nav--prev', root).addEventListener('click', function () { prev(); restart(); });

    let startX = 0;
    root.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].screenX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      const dx = e.changedTouches[0].screenX - startX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); restart(); }
    }, { passive: true });

    root.addEventListener('mouseenter', function () { clearInterval(timer); });
    root.addEventListener('mouseleave', restart);
    go(0);
    restart();
  }

  function initCounters() {
    const els = qsa('[data-counter]');
    if (!els.length) return;
    function animate(el) {
      const target = Number(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      if (reduceMotion) { el.textContent = target + suffix; return; }
      const start = performance.now();
      const dur = 1400;
      function frame(now) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  function initReveal() {
    const els = qsa('.reveal');
    if (!els.length) return;
    if (reduceMotion) { els.forEach(function (el) { el.classList.add('is-visible'); }); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  function initBackToTop() {
    const btn = qs('#backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-visible', window.scrollY > 480);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  function initAccordion() {
    qsa('.accordion__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const group = btn.closest('.accordion');
        qsa('.accordion__btn', group).forEach(function (other) {
          other.setAttribute('aria-expanded', 'false');
        });
        btn.setAttribute('aria-expanded', String(!expanded));
      });
    });
  }

  function initTabs() {
    qsa('[data-tabs]').forEach(function (root) {
      const buttons = qsa('[role="tab"]', root);
      const panels = qsa('[role="tabpanel"]', root);
      function activate(id, setHash) {
        buttons.forEach(function (b) {
          const on = b.getAttribute('aria-controls') === id;
          b.setAttribute('aria-selected', String(on));
          b.classList.toggle('is-active', on);
          b.tabIndex = on ? 0 : -1;
        });
        panels.forEach(function (p) { p.classList.toggle('is-active', p.id === id); });
        if (setHash) history.replaceState(null, '', '#' + id);
      }
      buttons.forEach(function (btn, i) {
        btn.addEventListener('click', function () { activate(btn.getAttribute('aria-controls'), true); });
        btn.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const next = e.key === 'ArrowRight' ? (i + 1) % buttons.length : (i - 1 + buttons.length) % buttons.length;
            buttons[next].focus();
            activate(buttons[next].getAttribute('aria-controls'), true);
          }
        });
      });
      const hash = location.hash.replace('#', '');
      if (hash && qs('#' + hash, root)) activate(hash, false);
    });
  }

  function initFilterButtons(container, onChange) {
    if (!container) return;
    qsa('[data-filter]', container).forEach(function (btn) {
      btn.addEventListener('click', function () {
        qsa('[data-filter]', container).forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        onChange(btn.dataset.filter);
      });
    });
  }

  /* ---- page renderers ---- */

  function renderHome() {
    const ticker = qs('[data-ticker]');
    if (ticker && typeof ANNOUNCEMENTS !== 'undefined') {
      const text = ANNOUNCEMENTS.map(function (a) { return a.text; }).join('   •   ');
      ticker.innerHTML = '<span>' + text + '</span><span>' + text + '</span>';
    }
    const panel = qs('[data-announcements]');
    if (panel) {
      panel.innerHTML = ANNOUNCEMENTS.slice(0, 5).map(function (a) {
        return '<li><time datetime="' + a.date + '">' + formatDate(a.date) + '</time><span>' + a.text + '</span></li>';
      }).join('');
    }
    const facts = qs('[data-facts]');
    if (facts && typeof KEY_FACTS !== 'undefined') {
      facts.innerHTML = KEY_FACTS.map(function (f) {
        return '<div class="fact"><div class="fact__value" data-counter="' + f.value + '" data-suffix="' + f.suffix + '">0' + f.suffix + '</div><div class="fact__label">' + f.label + '</div></div>';
      }).join('');
    }
    const facGrid = qs('[data-home-facilities]');
    if (facGrid) {
      facGrid.innerHTML = FACILITIES.map(function (f) {
        return '<article class="card reveal"><a href="facility.html?id=' + f.slug + '"><img class="card__image" src="' + f.image + '" width="600" height="375" alt="' + f.title + '" loading="lazy"></a><div class="card__body"><h3 class="card__title">' + f.title + '</h3><p class="card__text">' + f.short + '</p><a class="card__link" href="facility.html?id=' + f.slug + '">Learn more <i class="fa-solid fa-arrow-right"></i></a></div></article>';
      }).join('');
    }
    const circ = qs('[data-latest-circulars]');
    if (circ) {
      const latest = CIRCULARS.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).slice(0, 5);
      circ.innerHTML = latest.map(function (c) {
        return '<li><time datetime="' + c.date + '">' + formatDate(c.date) + '</time><span>' + c.title + '</span><a href="' + c.file + '" target="_blank" rel="noopener">View</a></li>';
      }).join('');
    }
    const notes = qs('[data-latest-notices]');
    if (notes) {
      const latest = NOTICES.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).slice(0, 5);
      notes.innerHTML = latest.map(function (n) {
        return '<li><time datetime="' + n.date + '">' + formatDate(n.date) + '</time><span>' + n.title + '</span><a href="notice-board.html">View</a></li>';
      }).join('');
    }
    const events = qs('[data-recent-events]');
    if (events) {
      events.innerHTML = EVENTS.filter(function (e) { return e.category === 'recent'; }).slice(0, 3).map(function (e) {
        return '<article class="card reveal"><img class="card__image" src="' + (e.image || 'https://placehold.co/800x520/0b3d6e/ffffff?text=Event') + '" width="800" height="520" alt="' + e.title + '" loading="lazy"><div class="card__body"><p class="section__eyebrow">' + formatDate(e.date) + '</p><h3 class="card__title">' + e.title + '</h3><p class="card__text">' + e.excerpt + '</p></div></article>';
      }).join('');
    }
    const upcoming = qs('[data-upcoming-events]');
    if (upcoming) {
      upcoming.innerHTML = EVENTS.filter(function (e) { return e.category === 'upcoming'; }).slice(0, 4).map(function (e) {
        return '<li><time datetime="' + e.date + '">' + formatDate(e.date) + '</time><span>' + e.title + '</span><a href="notice-board.html#calendar">Calendar</a></li>';
      }).join('');
    }
    const awards = qs('[data-awards]');
    if (awards) {
      awards.innerHTML = AWARDS.map(function (a) {
        return '<article class="card award-card"><img class="card__image" src="' + a.image + '" width="400" height="280" alt="' + a.title + '" loading="lazy"><div class="card__body"><h3 class="card__title">' + a.title + '</h3><p class="card__text">' + a.year + '</p></div></article>';
      }).join('');
    }
    const testi = qs('[data-testimonials]');
    if (testi) {
      testi.innerHTML = TESTIMONIALS.map(function (t) {
        return '<article class="card testimonial-card"><img src="' + t.photo + '" width="56" height="56" alt="" loading="lazy"><blockquote>“' + t.quote + '”</blockquote><strong>' + t.name + '</strong><p class="card__text">' + t.role + '</p></article>';
      }).join('');
    }
    const excerpt = qs('[data-principal-excerpt]');
    if (excerpt) excerpt.textContent = PRINCIPAL_MESSAGE.excerpt;

    qsa('[data-scroll]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const scroller = qs(btn.dataset.scroll);
        if (scroller) scroller.scrollBy({ left: Number(btn.dataset.dir || 280), behavior: 'smooth' });
      });
    });
  }

  function renderAbout() {
    const tl = qs('[data-timeline]');
    if (tl) {
      tl.innerHTML = HISTORY_TIMELINE.map(function (h) {
        return '<div class="timeline__item"><div class="timeline__year">' + h.year + '</div><p>' + h.text + '</p></div>';
      }).join('');
    }
    const msg = qs('[data-principal-full]');
    if (msg) msg.innerHTML = PRINCIPAL_MESSAGE.full.split('\n\n').map(function (p) { return '<p>' + p.replace(/\n/g, '<br>') + '</p>'; }).join('');
    const mg = qs('[data-management]');
    if (mg) {
      mg.innerHTML = MANAGEMENT.map(function (m) {
        return '<article class="card"><img class="card__image" src="' + m.photo + '" width="400" height="480" alt="' + m.name + '" loading="lazy"><div class="card__body"><h3 class="card__title">' + m.name + '</h3><p class="section__eyebrow">' + m.designation + '</p><p class="card__text">' + m.bio + '</p></div></article>';
      }).join('');
    }
    const certs = qs('[data-certificates]');
    if (certs) {
      certs.innerHTML = CERTIFICATES.map(function (c, i) {
        return '<article class="card"><a href="' + c.image + '" class="js-lightbox" data-index="' + i + '"><img class="card__image" src="' + c.image + '" width="600" height="800" alt="' + c.title + '" loading="lazy"></a><div class="card__body"><h3 class="card__title">' + c.title + '</h3><a class="btn btn--outline btn--sm" href="' + c.file + '" download>Download</a></div></article>';
      }).join('');
    }
    qsa('[data-site-field]').forEach(function (el) {
      el.textContent = getPath(SITE_INFO, el.dataset.siteField) || el.textContent;
    });
  }

  function renderAcademics() {
    const table = qs('[data-classes-table]');
    if (table) {
      table.innerHTML = CLASSES_OFFERED.map(function (r) {
        return '<tr><td>' + r.stage + '</td><td>' + r.classes + '</td><td>' + r.age + '</td></tr>';
      }).join('');
    }
    const acc = qs('[data-subjects]');
    if (acc) {
      acc.innerHTML = SUBJECTS_BY_STAGE.map(function (s, i) {
        const id = 'subj-' + i;
        return '<div class="accordion__item"><button class="accordion__btn" type="button" aria-expanded="' + (i === 0 ? 'true' : 'false') + '" aria-controls="' + id + '">' + s.stage + ' <i class="fa-solid fa-chevron-down"></i></button><div class="accordion__panel" id="' + id + '"><ul class="check-list">' + s.subjects.map(function (sub) { return '<li>' + sub + '</li>'; }).join('') + '</ul></div></div>';
      }).join('');
    }
    const cal = qs('[data-academic-calendar]');
    if (cal) {
      cal.innerHTML = ACADEMIC_CALENDAR.map(function (m) {
        return '<tr><td>' + m.month + '</td><td>' + m.events + '</td></tr>';
      }).join('');
    }
  }

  function renderFaculty() {
    const grid = qs('[data-faculty-grid]');
    const search = qs('#faculty-search');
    const filters = qs('[data-faculty-filters]');
    if (!grid) return;
    let dept = 'all';
    let q = '';
    function paint() {
      const list = FACULTY.filter(function (f) {
        const okDept = dept === 'all' || f.department === dept;
        const hay = (f.name + ' ' + f.designation + ' ' + f.subject + ' ' + f.qualifications).toLowerCase();
        return okDept && hay.indexOf(q) !== -1;
      });
      grid.innerHTML = list.length ? list.map(function (f) {
        return '<article class="card"><img class="card__image" src="' + f.photo + '" width="400" height="400" alt="' + f.name + '" loading="lazy"><div class="card__body"><h3 class="card__title">' + f.name + '</h3><p class="section__eyebrow">' + f.designation + '</p><p class="card__text">' + f.qualifications + '<br>' + f.subject + ' · ' + f.experience + '</p></div></article>';
      }).join('') : '<p class="empty-state">No staff match your search.</p>';
    }
    initFilterButtons(filters, function (value) { dept = value; paint(); });
    search && search.addEventListener('input', function () { q = search.value.trim().toLowerCase(); paint(); });
    paint();
  }

  function renderFacilitiesHub() {
    const grid = qs('[data-facilities-grid]');
    if (!grid) return;
    grid.innerHTML = FACILITIES.map(function (f) {
      return '<article class="card reveal"><img class="card__image" src="' + f.image + '" width="600" height="375" alt="' + f.title + '" loading="lazy"><div class="card__body"><h3 class="card__title">' + f.title + '</h3><p class="card__text">' + f.short + '</p><a class="card__link" href="facility.html?id=' + f.slug + '">Learn more <i class="fa-solid fa-arrow-right"></i></a></div></article>';
    }).join('');
  }

  function renderFacilityDetail() {
    const mount = qs('[data-facility-detail]');
    if (!mount) return;
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const item = FACILITIES.find(function (f) { return f.slug === id; });
    if (!item) {
      mount.innerHTML = '<div class="empty-state"><h1>Facility not found</h1><p>The link you followed does not match a facility. Please return to the facilities list.</p><a class="btn btn--primary" href="facilities.html">View all facilities</a></div>';
      document.title = 'Facility not found | RKris Academy';
      return;
    }
    document.title = item.title + ' | RKris Academy';
    const desc = qs('meta[name="description"]');
    if (desc) desc.setAttribute('content', item.short);
    const others = FACILITIES.filter(function (f) { return f.slug !== item.slug; }).slice(0, 4);
    mount.innerHTML = '<section class="page-banner"><div class="container"><nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="index.html">Home</a></li><li><a href="facilities.html">Facilities</a></li><li>' + item.title + '</li></ol></nav><h1>' + item.title + '</h1><p>' + item.short + '</p></div></section><section class="section"><div class="container split"><div><img src="' + item.image + '" width="1200" height="640" alt="' + item.title + '"></div><div><p>' + item.description + '</p><ul class="check-list">' + item.features.map(function (ft) { return '<li>' + ft + '</li>'; }).join('') + '</ul></div></div></section><section class="section section--alt"><div class="container"><h2>Gallery</h2><div class="grid grid--3">' + item.gallery.map(function (src, i) { return '<a href="' + src + '" class="js-lightbox"><img src="' + src + '" width="800" height="560" alt="' + item.title + ' photo ' + (i + 1) + '" loading="lazy"></a>'; }).join('') + '</div></div></section><section class="section"><div class="container"><h2>Other Facilities</h2><div class="grid grid--4">' + others.map(function (f) { return '<article class="card"><div class="card__body"><h3 class="card__title">' + f.title + '</h3><a class="card__link" href="facility.html?id=' + f.slug + '">Learn more</a></div></article>'; }).join('') + '</div></div></section>';
  }

  function renderAdmissions() {
    const fees = qs('[data-fee-table]');
    if (fees) {
      fees.innerHTML = FEE_STRUCTURE.map(function (r) {
        return '<tr><td>' + r.classGroup + '</td><td>' + r.admission + '</td><td>' + r.tuition + '</td><td>' + r.annual + '</td><td>' + r.transport + '</td></tr>';
      }).join('');
    }
    const dates = qs('[data-dates]');
    if (dates) {
      dates.innerHTML = IMPORTANT_DATES.map(function (d) {
        return '<tr><td>' + d.label + '</td><td>' + d.date + '</td></tr>';
      }).join('');
    }
    const elig = qs('[data-eligibility]');
    if (elig) {
      elig.innerHTML = ELIGIBILITY.map(function (r) {
        return '<tr><td>' + r.className + '</td><td>' + r.age + '</td></tr>';
      }).join('');
    }
    const dl = qs('[data-downloads]');
    if (dl) {
      dl.innerHTML = DOWNLOADS.map(function (d) {
        return '<a class="card contact-card" href="' + d.file + '" download><i class="fa-solid ' + d.icon + '"></i><h3>' + d.title + '</h3><span class="card__link">Download PDF</span></a>';
      }).join('');
    }
  }

  function renderNotices() {
    const list = qs('[data-notice-list]');
    const search = qs('#notice-search');
    const filters = qs('[data-notice-filters]');
    if (!list) return;
    let cat = 'all';
    let q = '';
    function paint() {
      const items = NOTICES.filter(function (n) {
        const ok = cat === 'all' || n.category === cat;
        return ok && (n.title + ' ' + n.excerpt).toLowerCase().indexOf(q) !== -1;
      }).sort(function (a, b) { return b.date.localeCompare(a.date); });
      list.innerHTML = items.map(function (n) {
        const neu = isRecent(n.date, 21) ? '<span class="badge badge--new">New</span> ' : '';
        return '<article class="card"><div class="card__body"><p><time datetime="' + n.date + '">' + formatDate(n.date) + '</time> <span class="badge badge--' + n.category + '">' + n.category + '</span> ' + neu + '</p><h3 class="card__title">' + n.title + '</h3><p class="card__text">' + n.excerpt + '</p></div></article>';
      }).join('') || '<p class="empty-state">No notices found.</p>';
    }
    initFilterButtons(filters, function (value) { cat = value; paint(); });
    search && search.addEventListener('input', function () { q = search.value.trim().toLowerCase(); paint(); });
    paint();

    const recent = qs('[data-recent-events-page]');
    if (recent) {
      recent.innerHTML = EVENTS.filter(function (e) { return e.category === 'recent'; }).map(function (e) {
        return '<article class="card"><img class="card__image" src="' + (e.image || '') + '" width="800" height="520" alt="' + e.title + '" loading="lazy"><div class="card__body"><p class="section__eyebrow">' + formatDate(e.date) + '</p><h3 class="card__title">' + e.title + '</h3><p class="card__text">' + e.excerpt + '</p></div></article>';
      }).join('');
    }
    const up = qs('[data-upcoming-list]');
    if (up) {
      up.innerHTML = EVENTS.filter(function (e) { return e.category === 'upcoming'; }).map(function (e) {
        return '<li><time datetime="' + e.date + '">' + formatDate(e.date) + '</time><span>' + e.title + ' — ' + e.location + '</span></li>';
      }).join('');
    }
  }

  function renderDisclosure() {
    function rows(items, isFile) {
      return items.map(function (r) {
        if (isFile) return '<tr><td>' + r.label + '</td><td><a class="btn btn--outline btn--sm" href="' + r.file + '" target="_blank" rel="noopener">View / Download</a></td></tr>';
        return '<tr><td>' + r.label + '</td><td>' + r.value + '</td></tr>';
      }).join('');
    }
    const map = {
      general: [DISCLOSURE.general, false],
      documents: [DISCLOSURE.documents, true],
      results: [DISCLOSURE.results, true],
      staff: [DISCLOSURE.staff, false],
      infrastructure: [DISCLOSURE.infrastructure, false]
    };
    Object.keys(map).forEach(function (key) {
      const el = qs('[data-disclosure="' + key + '"]');
      if (el) el.innerHTML = rows(map[key][0], map[key][1]);
    });
  }

  function initSimpleLightbox() {
    const links = qsa('.js-lightbox');
    if (!links.length) return;
    const items = links.map(function (a) { return { src: a.getAttribute('href'), alt: ((a.querySelector('img') || {}).alt || '') }; });
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.RKrisLightbox) window.RKrisLightbox.open(items, i);
        else window.open(a.href, '_blank');
      });
    });
  }

  function initSubnavSpy() {
    const links = qsa('.subnav a[href^="#"]');
    if (!links.length) return;
    const sections = links.map(function (a) { return qs(a.getAttribute('href')); }).filter(Boolean);
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id); });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  function boot() {
    hydrateSiteInfo(document);
    buildFacilitiesNav();
    markActiveNav();
    initNav();
    initSlider();
    initBackToTop();
    initAccordion();
    initTabs();
    initSubnavSpy();

    const page = document.body.dataset.page;
    if (page === 'home') renderHome();
    if (page === 'about') renderAbout();
    if (page === 'academics') renderAcademics();
    if (page === 'faculty') renderFaculty();
    if (page === 'facilities') renderFacilitiesHub();
    if (page === 'facility') renderFacilityDetail();
    if (page === 'admissions') renderAdmissions();
    if (page === 'notice') renderNotices();
    if (page === 'disclosure') renderDisclosure();

    initCounters();
    initReveal();
    initSimpleLightbox();
    document.dispatchEvent(new Event('app:ready'));
  }

  if (document.querySelector('header.site-chrome, .header')) boot();
  else document.addEventListener('partials:ready', boot);

  window.RKris = { formatDate: formatDate, qs: qs, qsa: qsa };
})();
