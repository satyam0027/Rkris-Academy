/**
 * Interactive events calendar — month grid, dots, side panel, list toggle
 */
(function () {
  const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  function pad(n) { return String(n).padStart(2, '0'); }
  function iso(y, m, d) { return y + '-' + pad(m + 1) + '-' + pad(d); }

  function eventsOn(dateStr) {
    if (typeof EVENTS === 'undefined') return [];
    return EVENTS.filter(function (e) { return e.date === dateStr; });
  }

  function init() {
    const root = document.querySelector('[data-calendar]');
    if (!root) return;

    const title = root.querySelector('[data-cal-title]');
    const grid = root.querySelector('[data-cal-grid]');
    const panel = root.querySelector('[data-cal-panel]');
    const listView = root.querySelector('[data-cal-list]');
    let cursor = new Date();
    cursor.setDate(1);
    let selected = null;

    function paintPanel(dateStr) {
      const items = dateStr ? eventsOn(dateStr) : [];
      if (!panel) return;
      if (!dateStr) {
        panel.innerHTML = '<h3>Select a date</h3><p>Days with a gold dot have an event.</p>';
        return;
      }
      if (!items.length) {
        panel.innerHTML = '<h3>' + window.RKris.formatDate(dateStr) + '</h3><p>No events on this day.</p>';
        return;
      }
      panel.innerHTML = '<h3>' + window.RKris.formatDate(dateStr) + '</h3><ul class="list-block">' + items.map(function (e) {
        return '<li><span>' + e.title + '</span><span>' + (e.location || '') + '</span></li>';
      }).join('') + '</ul>';
    }

    function paint() {
      const y = cursor.getFullYear();
      const m = cursor.getMonth();
      title.textContent = cursor.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
      const firstDay = new Date(y, m, 1).getDay();
      const daysInMonth = new Date(y, m + 1, 0).getDate();
      const prevDays = new Date(y, m, 0).getDate();
      const today = new Date();
      const todayIso = iso(today.getFullYear(), today.getMonth(), today.getDate());

      let html = WEEKDAYS.map(function (d) { return '<div class="calendar__dow">' + d + '</div>'; }).join('');
      for (let i = 0; i < 42; i += 1) {
        let dayNum;
        let cellIso;
        let muted = false;
        if (i < firstDay) {
          dayNum = prevDays - firstDay + i + 1;
          const pm = m === 0 ? 11 : m - 1;
          const py = m === 0 ? y - 1 : y;
          cellIso = iso(py, pm, dayNum);
          muted = true;
        } else if (i >= firstDay + daysInMonth) {
          dayNum = i - (firstDay + daysInMonth) + 1;
          const nm = m === 11 ? 0 : m + 1;
          const ny = m === 11 ? y + 1 : y;
          cellIso = iso(ny, nm, dayNum);
          muted = true;
        } else {
          dayNum = i - firstDay + 1;
          cellIso = iso(y, m, dayNum);
        }
        const has = eventsOn(cellIso).length > 0;
        const cls = ['calendar__day'];
        if (muted) cls.push('is-muted');
        if (cellIso === todayIso) cls.push('is-today');
        if (cellIso === selected) cls.push('is-selected');
        html += '<button type="button" class="' + cls.join(' ') + '" data-date="' + cellIso + '" aria-label="' + cellIso + (has ? ', has events' : '') + '">' + dayNum + (has ? '<span class="calendar__dot"></span>' : '') + '</button>';
      }
      grid.innerHTML = html;

      if (listView) {
        const monthEvents = (typeof EVENTS !== 'undefined' ? EVENTS : []).filter(function (e) {
          return e.date.slice(0, 7) === y + '-' + pad(m + 1);
        }).sort(function (a, b) { return a.date.localeCompare(b.date); });
        listView.innerHTML = monthEvents.length ? monthEvents.map(function (e) {
          return '<li><time datetime="' + e.date + '">' + window.RKris.formatDate(e.date) + '</time><span>' + e.title + ' — ' + (e.location || '') + '</span></li>';
        }).join('') : '<li>No events listed this month.</li>';
      }
    }

    grid.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-date]');
      if (!btn) return;
      selected = btn.getAttribute('data-date');
      paint();
      paintPanel(selected);
    });

    root.querySelector('[data-cal-prev]').addEventListener('click', function () {
      cursor.setMonth(cursor.getMonth() - 1);
      paint();
    });
    root.querySelector('[data-cal-next]').addEventListener('click', function () {
      cursor.setMonth(cursor.getMonth() + 1);
      paint();
    });

    const toggle = root.querySelector('[data-cal-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function () {
        const list = root.querySelector('.calendar__list-wrap');
        const month = root.querySelector('.calendar__month-wrap');
        const showList = list.hasAttribute('hidden');
        list.toggleAttribute('hidden', !showList);
        month.toggleAttribute('hidden', showList);
        toggle.textContent = showList ? 'Month view' : 'List view';
      });
    }

    paint();
    paintPanel(null);
  }

  document.addEventListener('app:ready', init);
})();
