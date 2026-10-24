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
  lastUpdated: '21 October 2026',

  /* A. General Information */
  general: {
    schoolName: 'RKris Academy',
    affiliationNo: 'NA',
    schoolCode: 'NA',
    address: 'Motiram Adda, Awadhpur Railway Crossing, Near Pani Tanki, Awadhpur, Gorakhpur, Uttar Pradesh 273202',
    principalName: 'Ms. Pratima Jaiswal',
    principalQualification: 'B.Sc. (Maths & Physics), MCA, B.Ed.',
    email: 'academyrkris@gmail.com',
    phone: '+91 80902 54020'
  },

  /* B. Documents and Information — 10 rows, CBSE Appendix-IX list */
  documents: [
    { sr: 1, title: 'Copies of Affiliation/Upgradation letter and recent extension of affiliation', pdf: '' },
    { sr: 2, title: 'Copies of Society/Trust/Company registration and renewal certificate', pdf: 'assets/disclosure/society-registration.pdf' },
    { sr: 3, title: 'Copy of No Objection Certificate (NOC) issued by the State Government/UT', pdf: '' },
    { sr: 4, title: 'Copies of Recognition Certificate under RTE Act 2009 and its renewal', pdf: '' },
    { sr: 5, title: 'Copy of valid Building Safety Certificate as per the National Building Code', pdf: 'assets/disclosure/building-safety.pdf' },
    { sr: 6, title: 'Copy of valid Fire Safety Certificate issued by the competent authority', pdf: 'assets/disclosure/fire-safety.pdf' },
    { sr: 7, title: 'Copy of the DEO certificate submitted by the school for affiliation/upgradation/extension, or self-certification', pdf: '' },
    { sr: 8, title: 'Copies of valid Water, Health and Sanitation certificates', pdf: '' },
    { sr: 9, title: 'Self-certification', pdf: '' },
    { sr: 10, title: 'Self-declaration by school', pdf: '' }
  ],

  /* C. Results and Academics */
  results: {
    documents: [
      { title: 'Fee Structure 2026-27', pdf: 'assets/disclosure/fee-structure-2026-27.pdf' },
      { title: 'Fees Booklet', pdf: 'assets/disclosure/fees-booklet.pdf' },
      { title: 'Annual Academic Calendar 2026-27', pdf: '' },
      { title: 'School Management Committee (SMC) list', pdf: 'assets/disclosure/smc-list.pdf' },
      { title: 'PTA Members list', pdf: 'assets/disclosure/pta-members.pdf' },
      { title: 'Prescribed class-wise book list 2026-27', pdf: 'assets/disclosure/book-list.pdf' }
    ],
    class10: [
      { year: 'NA', registered: 'NA', passed: 'NA', passPercent: 'NA', pdf: '' }
    ],
    class12: [
      { year: 'NA', registered: 'NA', passed: 'NA', passPercent: 'NA', pdf: '' }
    ],
    smc: [
      { name: 'Mrs. Madhuri', designation: 'President' },
      { name: 'Mr. Rambhavan Maurya', designation: 'Manager' },
      { name: 'Ms. Pratima Jaiswal', designation: 'Secretary (School Principal)' },
      { name: 'Mr. Rambhavan Maurya', designation: 'Treasurer' },
      { name: 'Mr. Sandeep Kumar', designation: 'Member (School Teacher)' },
      { name: 'Mrs. Mamta Vishwakarma', designation: 'Member (School Teacher)' },
      { name: 'Mr. Dinesh Yadav', designation: 'Member (Parents Representative)' },
      { name: 'Mr. Ajeet Kumar', designation: 'Member (Parents Representative)' },
      { name: 'Mr. Sonu Tiwari', designation: 'Member' },
      { name: 'Mr. Devendra Kumar', designation: 'Member' },
      { name: 'Mr. Ranglal', designation: 'Member' },
      { name: 'Mr. Vivek Kumar', designation: 'Member' }
    ],
    ptaOfficers: [
      { name: 'Ms. Pratima Jaiswal', designation: 'Chairperson (Principal)' },
      { name: 'Ms. Rekha Rani', designation: 'Administrator' },
      { name: 'Mr. Sandeep Kumar', designation: 'Secretary (Teacher)' },
      { name: 'Mrs. Mamta Vishwakarma', designation: 'Joint-Secretary (Teacher)' },
      { name: 'Mr. Ajay Kumar', designation: 'Joint-Secretary (Parent)' },
      { name: 'Mr. Dinesh Yadav', designation: 'Joint-Secretary (Parent)' }
    ],
    ptaParentReps: [
      { name: 'Mr. Ajay Kumar', designation: 'Class I representative (parent)' },
      { name: 'Mr. Ranjeet Saxena', designation: 'Class II representative (parent)' },
      { name: 'Mr. Vinod Chauhan', designation: 'Class III representative (parent)' },
      { name: 'Mr. Ajeet Kumar', designation: 'Class IV representative (parent)' },
      { name: 'Mr. Dinesh Yadav', designation: 'Class V representative (parent)' }
    ],
    ptaTeacherReps: [
      { name: 'Ms. Shipra Nishad', designation: 'Class I representative (teacher)' },
      { name: 'Mrs. Ranita Yadav', designation: 'Class II representative (teacher)' },
      { name: 'Mrs. Mamta Vishwakarma', designation: 'Class III representative (teacher)' },
      { name: 'Mr. Adarsh Dubey', designation: 'Class IV representative (teacher)' },
      { name: 'Mr. Sandeep Kumar', designation: 'Class V representative (teacher)' }
    ]
  },

  /* D. Staff (Teaching) */
  staff: {
    principal: '1',
    totalTeachers: '9',
    pgt: 'NA',
    tgt: 'NA',
    prt: 'NA',
    teacherStudentRatio: 'NA',
    specialEducator: 'NA',
    counsellor: 'NA',
    detailsPdf: 'assets/disclosure/staff-details.pdf',
    directory: [
      { name: 'Ms. Pratima Jaiswal', designation: 'Principal', qualification: 'B.Sc. (Maths & Physics), MCA, B.Ed.', experience: '—' },
      { name: 'Mr. Sandeep Kumar', designation: 'Teacher', qualification: 'B.A. (Hindi), B.Ed., PDPET', experience: '—' },
      { name: 'Mr. Adarsh Dubey', designation: 'Teacher', qualification: 'BCA, B.Sc.', experience: '—' },
      { name: 'Mrs. Mamta Vishwakarma', designation: 'Teacher', qualification: 'M.A. (English), B.Ed.', experience: '—' },
      { name: 'Mrs. Ranita Yadav', designation: 'Teacher', qualification: 'M.A. (Political Science), D.L.Ed.', experience: '—' },
      { name: 'Ms. Shipra Nishad', designation: 'Teacher', qualification: 'B.Com.', experience: '—' },
      { name: 'Ms. Sapna Gupta', designation: 'Physical Education Teacher', qualification: 'B.A. (Physical Education & Education)', experience: '—' },
      { name: 'Mrs. Arti Jaiswal', designation: 'NTT', qualification: 'NTT', experience: '—' },
      { name: 'Ms. Rekha Rani', designation: 'Administrator', qualification: 'ANM, B.Sc. (Botany & Zoology)', experience: '—' },
      { name: 'Mr. Manish Kumar', designation: 'Martial Arts Instructor', qualification: 'B.A., Martial Art', experience: '—' },
      { name: 'Mr. Dilip Kumar', designation: 'Teacher', qualification: 'B.Com, D.L.Ed.', experience: '—' }
    ]
  },

  /* E. School Infrastructure */
  infrastructure: {
    campusArea: 'NA',
    classrooms: 'NA',
    labs: 'NA',
    library: 'NA',
    sportsFacilities: 'Karate and horse-riding programmes (as offered)',
    youtubeUrl: ''
  }
};
