/**
 * Circulars table: tabs, search, newest-first, load more
 */
(function () {
  const PAGE_SIZE = 6;
  const LABELS = {
    circulars: 'Circulars',
    timetable: 'Time Table',
    syllabus: 'Syllabus',
    holiday: 'Holiday List',
    datesheet: 'Date Sheets',
    forms: 'Other Forms'
  };

  function init() {
    const root = document.querySelector('[data-circulars]');
    if (!root || typeof CIRCULARS === 'undefined') return;

    let category = 'circulars';
    let query = '';
    let shown = PAGE_SIZE;

    const tbody = root.querySelector('[data-circ-body]');
    const search = root.querySelector('#circular-search');
    const more = root.querySelector('[data-load-more]');

    function filtered() {
      return CIRCULARS.filter(function (c) {
        const okCat = c.category === category;
        const hay = (c.title + ' ' + c.classGroup).toLowerCase();
        return okCat && hay.indexOf(query) !== -1;
      }).sort(function (a, b) { return b.date.localeCompare(a.date); });
    }

    function paint() {
      const all = filtered();
      const slice = all.slice(0, shown);
      tbody.innerHTML = slice.length ? slice.map(function (c) {
        return '<tr><td>' + c.title + '</td><td><time datetime="' + c.date + '">' + window.RKris.formatDate(c.date) + '</time></td><td>' + c.classGroup + '</td><td><a class="btn btn--outline btn--sm" href="' + c.file + '" target="_blank" rel="noopener">View</a> <a class="btn btn--primary btn--sm" href="' + c.file + '" download>Download</a></td></tr>';
      }).join('') : '<tr><td colspan="4">No documents in this category.</td></tr>';
      if (more) more.hidden = slice.length >= all.length;
    }

    root.querySelectorAll('[data-circ-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        category = btn.dataset.circTab;
        shown = PAGE_SIZE;
        root.querySelectorAll('[data-circ-tab]').forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        paint();
      });
    });

    search && search.addEventListener('input', function () {
      query = search.value.trim().toLowerCase();
      shown = PAGE_SIZE;
      paint();
    });

    more && more.addEventListener('click', function () {
      shown += PAGE_SIZE;
      paint();
    });

    paint();
  }

  document.addEventListener('app:ready', init);
  window.CIRCULAR_LABELS = LABELS;
})();
