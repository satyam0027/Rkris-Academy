/**
 * Mandatory Public Disclosure — editable values
 * ---------------------------------------------
 * Change any text, number or PDF path here. Do not edit mandatory-disclosure.html
 * for content updates.
 *
 * PDF paths are relative to the site root, e.g. 'assets/disclosure/affiliation-letter.pdf'
 * Leave a path as '' (empty string) to show "To be uploaded" instead of a link.
 */
const DISCLOSURE_DATA = {
  /* Shown under the page banner */
  lastUpdated: '15 October 2026',

  /* A. General Information */
  general: {
    schoolName: 'RKris Academy',
    affiliationNo: 'XXXXXXX',
    schoolCode: 'XXXXXX',
    address: 'Plot 21, Knowledge Park, Sector 12, Your City, State 201301',
    principalName: 'Dr. Meera Sharma',
    principalQualification: 'M.A., B.Ed., Ph.D.',
    email: 'info@rkrisacademy.edu.in',
    phone: '+91 98765 43210 / +91 98765 43211'
  },

  /* B. Documents and Information — 10 rows, CBSE Appendix-IX list */
  documents: [
    { sr: 1, title: 'Copies of Affiliation/Upgradation letter and recent extension of affiliation', pdf: 'assets/disclosure/affiliation-letter.pdf' },
    { sr: 2, title: 'Copies of Society/Trust/Company registration and renewal certificate', pdf: 'assets/disclosure/society-registration.pdf' },
    { sr: 3, title: 'Copy of No Objection Certificate (NOC) issued by the State Government/UT', pdf: 'assets/disclosure/noc.pdf' },
    { sr: 4, title: 'Copies of Recognition Certificate under RTE Act 2009 and its renewal', pdf: 'assets/disclosure/rte-recognition.pdf' },
    { sr: 5, title: 'Copy of valid Building Safety Certificate as per the National Building Code', pdf: 'assets/disclosure/building-safety.pdf' },
    { sr: 6, title: 'Copy of valid Fire Safety Certificate issued by the competent authority', pdf: 'assets/disclosure/fire-safety.pdf' },
    { sr: 7, title: 'Copy of the DEO certificate submitted by the school for affiliation/upgradation/extension, or self-certification', pdf: 'assets/disclosure/deo-certificate.pdf' },
    { sr: 8, title: 'Copies of valid Water, Health and Sanitation certificates', pdf: 'assets/disclosure/water-health-sanitation.pdf' },
    { sr: 9, title: 'Self-certification', pdf: 'assets/disclosure/self-certification.pdf' },
    { sr: 10, title: 'Self-declaration by school', pdf: 'assets/disclosure/self-declaration.pdf' }
  ],

  /* C. Results and Academics */
  results: {
    documents: [
      { title: 'Fee Structure 2026-27', pdf: 'assets/disclosure/fee-structure-2026-27.pdf' },
      { title: 'Annual Academic Calendar 2026-27', pdf: 'assets/disclosure/academic-calendar-2026-27.pdf' },
      { title: 'School Management Committee (SMC) list', pdf: 'assets/disclosure/smc-list.pdf' },
      { title: 'PTA Members list', pdf: 'assets/disclosure/pta-members.pdf' },
      { title: 'Prescribed class-wise book list', pdf: 'assets/disclosure/book-list.pdf' }
    ],
    /* Year | Registered | Passed | Pass % | PDF — last 3 years */
    class10: [
      { year: '2024-25', registered: 'XX', passed: 'XX', passPercent: 'XX%', pdf: 'assets/disclosure/class10-result-2025.pdf' },
      { year: '2023-24', registered: 'XX', passed: 'XX', passPercent: 'XX%', pdf: 'assets/disclosure/class10-result-2024.pdf' },
      { year: '2022-23', registered: 'XX', passed: 'XX', passPercent: 'XX%', pdf: 'assets/disclosure/class10-result-2023.pdf' }
    ],
    class12: [
      { year: '2024-25', registered: 'XX', passed: 'XX', passPercent: 'XX%', pdf: 'assets/disclosure/class12-result-2025.pdf' },
      { year: '2023-24', registered: 'XX', passed: 'XX', passPercent: 'XX%', pdf: 'assets/disclosure/class12-result-2024.pdf' },
      { year: '2022-23', registered: 'XX', passed: 'XX', passPercent: 'XX%', pdf: 'assets/disclosure/class12-result-2023.pdf' }
    ]
  },

  /* D. Staff (Teaching) */
  staff: {
    principal: '1',
    totalTeachers: '140',
    pgt: '28',
    tgt: '52',
    prt: '48',
    teacherStudentRatio: '1 : 30 (placeholder)',
    specialEducator: 'Available (placeholder name)',
    counsellor: 'Available (placeholder name)',
    detailsPdf: 'assets/disclosure/staff-details.pdf',
    /* Full staff table shown on the page; keep in sync with the PDF */
    directory: [
      { name: 'Dr. Meera Sharma', designation: 'Principal', qualification: 'M.A., B.Ed., Ph.D.', experience: '22 years' },
      { name: 'Mr. Arvind Patel', designation: 'Vice Principal', qualification: 'M.Sc., B.Ed.', experience: '18 years' },
      { name: 'Dr. Amit Khanna', designation: 'PGT Physics', qualification: 'M.Sc., B.Ed., Ph.D.', experience: '16 years' },
      { name: 'Ms. Farah Khan', designation: 'PGT English', qualification: 'M.A., B.Ed.', experience: '12 years' },
      { name: 'Mr. Suresh Menon', designation: 'TGT Science', qualification: 'M.Sc., B.Ed.', experience: '13 years' },
      { name: 'Ms. Priya Iyer', designation: 'PRT English', qualification: 'M.A., B.Ed.', experience: '9 years' }
    ]
  },

  /* E. School Infrastructure */
  infrastructure: {
    campusArea: 'XXXXX sq. m',
    classrooms: 'XX',
    labs: 'X (Science, Computer, Composite)',
    library: '1 (with junior and senior sections)',
    sportsFacilities: 'Playfield, courts, indoor activity area (placeholder)',
    /* YouTube watch URL. Leave '' to show "To be uploaded". */
    youtubeUrl: ''
  }
};
