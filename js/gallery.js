/**
 * Gallery: category filters, custom lightbox, video modal (iframe on click)
 */
(function () {
  function trapFocus(container, onClose) {
    const sel = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    function handler(e) {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      const list = Array.from(container.querySelectorAll(sel)).filter(function (el) { return el.offsetParent !== null || el === document.activeElement; });
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener('keydown', handler);
    return function () { document.removeEventListener('keydown', handler); };
  }

  const Lightbox = {
    items: [],
    index: 0,
    lastFocus: null,
    release: null,
    root: null,
    ensure: function () {
      if (this.root) return;
      this.root = document.createElement('div');
      this.root.className = 'modal lightbox';
      this.root.setAttribute('role', 'dialog');
      this.root.setAttribute('aria-modal', 'true');
      this.root.setAttribute('aria-label', 'Image viewer');
      this.root.innerHTML = '<div class="modal__backdrop" data-close></div><button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button><button type="button" class="lightbox__nav lightbox__nav--next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button><div class="modal__dialog"><button type="button" class="modal__close" data-close aria-label="Close"><i class="fa-solid fa-xmark"></i></button><figure class="lightbox__figure"><img class="lightbox__img" alt=""><figcaption class="lightbox__caption"></figcaption></figure></div>';
      document.body.appendChild(this.root);
      const self = this;
      this.root.addEventListener('click', function (e) {
        if (e.target.closest('[data-close]')) self.close();
      });
      this.root.querySelector('.lightbox__nav--prev').addEventListener('click', function () { self.go(-1); });
      this.root.querySelector('.lightbox__nav--next').addEventListener('click', function () { self.go(1); });
    },
    open: function (items, index) {
      this.ensure();
      this.items = items;
      this.index = index || 0;
      this.lastFocus = document.activeElement;
      this.render();
      this.root.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      this.root.querySelector('.modal__close').focus();
      const self = this;
      this.release = trapFocus(this.root, function () { self.close(); });
      this.onKey = function (e) {
        if (e.key === 'ArrowRight') self.go(1);
        if (e.key === 'ArrowLeft') self.go(-1);
      };
      document.addEventListener('keydown', this.onKey);
      this.bindSwipe();
    },
    render: function () {
      const item = this.items[this.index];
      if (!item) return;
      const img = this.root.querySelector('.lightbox__img');
      img.src = item.src;
      img.alt = item.alt || '';
      this.root.querySelector('.lightbox__caption').textContent = item.alt || (this.index + 1) + ' / ' + this.items.length;
    },
    go: function (dir) {
      this.index = (this.index + dir + this.items.length) % this.items.length;
      this.render();
    },
    bindSwipe: function () {
      const self = this;
      let x = 0;
      this.root.addEventListener('touchstart', function (e) { x = e.changedTouches[0].screenX; }, { passive: true });
      this.root.addEventListener('touchend', function (e) {
        const dx = e.changedTouches[0].screenX - x;
        if (Math.abs(dx) > 40) self.go(dx < 0 ? 1 : -1);
      }, { passive: true });
    },
    close: function () {
      if (!this.root) return;
      this.root.classList.remove('is-open');
      document.body.style.overflow = '';
      if (this.release) this.release();
      document.removeEventListener('keydown', this.onKey);
      if (this.lastFocus) this.lastFocus.focus();
    }
  };

  window.RKrisLightbox = Lightbox;

  function renderPhotos(filter) {
    const grid = document.querySelector('[data-photo-grid]');
    if (!grid || typeof GALLERY_PHOTOS === 'undefined') return;
    const photos = GALLERY_PHOTOS.filter(function (p) { return filter === 'all' || p.category === filter; });
    if (!photos.length) {
      grid.innerHTML = '<p class="empty-state">No photographs in this category yet.</p>';
      return;
    }
    grid.innerHTML = photos.map(function (p) {
      return '<a href="' + p.src + '" data-full="' + p.src + '" data-alt="' + p.alt + '"><img src="' + p.thumb + '" width="600" height="460" alt="' + p.alt + '" loading="lazy"></a>';
    }).join('');
    const items = photos.map(function (p) { return { src: p.src, alt: p.alt }; });
    Array.from(grid.querySelectorAll('a')).forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        Lightbox.open(items, i);
      });
    });
  }

  function renderVideos() {
    const grid = document.querySelector('[data-video-grid]');
    if (!grid || typeof GALLERY_VIDEOS === 'undefined') return;
    if (!GALLERY_VIDEOS.length) {
      grid.innerHTML = '<p class="empty-state">Videos will be added when the school shares YouTube links.</p>';
      return;
    }
    grid.innerHTML = GALLERY_VIDEOS.map(function (v) {
      return '<button type="button" class="video-card" data-video="' + v.youtubeId + '" data-title="' + v.title + '"><span class="video-card__wrap"><img src="' + v.thumbnail + '" width="640" height="360" alt="' + v.title + '" loading="lazy"><span class="video-card__play" aria-hidden="true"><i class="fa-solid fa-play"></i></span></span><h3>' + v.title + '</h3></button>';
    }).join('');
  }

  function ensureVideoModal() {
    let modal = document.getElementById('video-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Video player');
    modal.innerHTML = '<div class="modal__backdrop" data-close-video></div><div class="modal__dialog"><button type="button" class="modal__close" data-close-video aria-label="Close"><i class="fa-solid fa-xmark"></i></button><div id="video-frame-slot"><p class="empty-state">Add a YouTube video ID in js/data.js (galleryVideos.youtubeId) to embed this clip.</p></div></div>';
    document.body.appendChild(modal);
    return modal;
  }

  function openVideo(id, title) {
    const modal = ensureVideoModal();
    const slot = modal.querySelector('#video-frame-slot');
    if (id) {
      slot.innerHTML = '<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1" title="' + title + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    } else {
      slot.innerHTML = '<p class="empty-state">“' + title + '” is a placeholder. Replace <code>youtubeId</code> in <code>js/data.js</code> to load the iframe.</p>';
    }
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close').focus();
  }

  function closeVideo() {
    const modal = document.getElementById('video-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    const slot = modal.querySelector('#video-frame-slot');
    if (slot) slot.innerHTML = '';
    document.body.style.overflow = '';
  }

  function init() {
    if (document.body.dataset.page !== 'gallery') return;
    renderPhotos('all');
    renderVideos();
    const filters = document.querySelector('[data-photo-filters]');
    if (filters) {
      filters.querySelectorAll('[data-filter]').forEach(function (btn) {
        const cat = btn.dataset.filter;
        if (cat !== 'all' && typeof GALLERY_PHOTOS !== 'undefined' && !GALLERY_PHOTOS.some(function (p) { return p.category === cat; })) {
          btn.hidden = true;
        }
      });
      filters.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-filter]');
        if (!btn) return;
        filters.querySelectorAll('[data-filter]').forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        renderPhotos(btn.dataset.filter);
      });
    }
    document.addEventListener('click', function (e) {
      const card = e.target.closest('[data-video]');
      if (card) openVideo(card.getAttribute('data-video'), card.getAttribute('data-title'));
      if (e.target.closest('[data-close-video]')) closeVideo();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeVideo();
    });
  }

  document.addEventListener('app:ready', init);
  if (document.body && document.body.dataset.page === 'gallery' && document.querySelector('header.site-chrome')) init();
})();
