/**
 * Mandatory Public Disclosure — table renderer
 * Reads DISCLOSURE_DATA from /data/disclosure.js and fills the page.
 * Empty PDF paths render a muted "To be uploaded" label (no broken link).
 */
(function () {
  'use strict';

  /* ----- helpers ------------------------------------------------------- */

  /** Escape text before inserting into HTML. */
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * View / Download control. Opens in a new tab.
   * If path is empty, show a muted placeholder instead of a link.
   */
  function pdfLink(path, label) {
    var text = label || 'View / Download';
    if (!path) {
      return '<span class="disclosure-pending">To be uploaded</span>';
    }
    return '<a class="btn btn--outline btn--sm" href="' + esc(path) + '" target="_blank" rel="noopener noreferrer">' + esc(text) + '</a>';
  }

  function el(id) {
    return document.getElementById(id);
  }

  function nameRows(list) {
    return (list || []).map(function (s) {
      return '<tr><td>' + esc(s.name) + '</td><td>' + esc(s.designation) + '</td></tr>';
    }).join('');
  }

  /* ----- A. General Information ---------------------------------------- */

  function renderGeneral(data) {
    var body = el('mpd-general-body');
    if (!body) return;
    var rows = [
      ['School name', data.schoolName],
      ['Affiliation No.', data.affiliationNo],
      ['School Code', data.schoolCode],
      ['Complete address with PIN', data.address],
      ['Principal name', data.principalName],
      ['Principal qualification', data.principalQualification],
      ['School email', data.email],
      ['Phone', data.phone]
    ];
    body.innerHTML = rows.map(function (r) {
      return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>';
    }).join('');
  }

  /* ----- B. Documents and Information ---------------------------------- */

  function renderDocuments(list) {
    var body = el('mpd-documents-body');
    if (!body) return;
    body.innerHTML = list.map(function (item) {
      return '<tr><td>' + esc(item.sr) + '</td><td>' + esc(item.title) + '</td><td>' + pdfLink(item.pdf, 'View') + '</td></tr>';
    }).join('');
  }

  /* ----- C. Results and Academics -------------------------------------- */

  function renderResultDocs(list) {
    var body = el('mpd-result-docs-body');
    if (!body) return;
    body.innerHTML = list.map(function (item, i) {
      return '<tr><td>' + (i + 1) + '</td><td>' + esc(item.title) + '</td><td>' + pdfLink(item.pdf, 'View / Download') + '</td></tr>';
    }).join('');
  }

  function renderBoardTable(tbodyId, rows) {
    var body = el(tbodyId);
    if (!body) return;
    body.innerHTML = rows.map(function (r) {
      return '<tr><td>' + esc(r.year) + '</td><td>' + esc(r.registered) + '</td><td>' + esc(r.passed) + '</td><td>' + esc(r.passPercent) + '</td><td>' + pdfLink(r.pdf, 'View') + '</td></tr>';
    }).join('');
  }

  function renderNamedTable(tbodyId, list) {
    var body = el(tbodyId);
    if (!body) return;
    body.innerHTML = nameRows(list);
  }

  /* ----- D. Staff (Teaching) ------------------------------------------- */

  function renderStaff(data) {
    var summary = el('mpd-staff-summary-body');
    if (summary) {
      var rows = [
        ['Principal', data.principal],
        ['Total no. of teachers', data.totalTeachers],
        ['PGT', data.pgt],
        ['TGT', data.tgt],
        ['PRT', data.prt],
        ['Teacher-student ratio', data.teacherStudentRatio],
        ['Special educator', data.specialEducator],
        ['Counsellor and wellness teacher', data.counsellor]
      ];
      summary.innerHTML = rows.map(function (r) {
        return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>';
      }).join('');
    }

    var pdfSlot = el('mpd-staff-pdf');
    if (pdfSlot) {
      pdfSlot.innerHTML = pdfLink(data.detailsPdf, 'View / Download full staff details PDF');
    }

    var dir = el('mpd-staff-directory-body');
    if (dir) {
      dir.innerHTML = (data.directory || []).map(function (s) {
        return '<tr><td>' + esc(s.name) + '</td><td>' + esc(s.designation) + '</td><td>' + esc(s.qualification) + '</td><td>' + esc(s.experience) + '</td></tr>';
      }).join('');
    }
  }

  /* ----- E. School Infrastructure -------------------------------------- */

  function renderInfrastructure(data) {
    var body = el('mpd-infra-body');
    if (!body) return;

    var videoCell;
    if (!data.youtubeUrl) {
      videoCell = '<span class="disclosure-pending">To be uploaded</span>';
    } else {
      videoCell = '<a href="' + esc(data.youtubeUrl) + '" target="_blank" rel="noopener noreferrer">Watch infrastructure video <span class="sr-only">(opens in a new tab)</span></a>';
    }

    var rows = [
      ['Campus area (sq. m)', data.campusArea],
      ['Number of classrooms', data.classrooms],
      ['Labs', data.labs],
      ['Library', data.library],
      ['Sports facilities', data.sportsFacilities],
      ['Infrastructure video (YouTube)', videoCell]
    ];

    body.innerHTML = rows.map(function (r, i) {
      var value = i === rows.length - 1 ? r[1] : esc(r[1]);
      return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + value + '</td></tr>';
    }).join('');
  }

  /* ----- boot ---------------------------------------------------------- */

  function init() {
    if (typeof DISCLOSURE_DATA === 'undefined') return;

    var updated = el('mpd-last-updated');
    if (updated) updated.textContent = DISCLOSURE_DATA.lastUpdated;

    renderGeneral(DISCLOSURE_DATA.general);
    renderDocuments(DISCLOSURE_DATA.documents);
    renderResultDocs(DISCLOSURE_DATA.results.documents);
    renderBoardTable('mpd-class10-body', DISCLOSURE_DATA.results.class10);
    renderBoardTable('mpd-class12-body', DISCLOSURE_DATA.results.class12);
    renderNamedTable('mpd-smc-body', DISCLOSURE_DATA.results.smc);
    renderNamedTable('mpd-pta-officers-body', DISCLOSURE_DATA.results.ptaOfficers);
    renderNamedTable('mpd-pta-parents-body', DISCLOSURE_DATA.results.ptaParentReps);
    renderNamedTable('mpd-pta-teachers-body', DISCLOSURE_DATA.results.ptaTeacherReps);
    renderStaff(DISCLOSURE_DATA.staff);
    renderInfrastructure(DISCLOSURE_DATA.infrastructure);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
