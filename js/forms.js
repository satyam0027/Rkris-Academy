/**
 * RKris Academy — form validation and submission
 *
 * TODO: set FORM_ENDPOINT to your Formspree, Google Apps Script or PHP URL.
 * Example Formspree: 'https://formspree.io/f/xxxxxxxx'
 * If left empty, a successful client-side validation opens a prefilled WhatsApp message.
 */
(function () {
  const FORM_ENDPOINT = ''; // TODO: replace with your form endpoint

  const PHONE = /^(\+91[\s-]?)?[6-9]\d{9}$/;
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function digitsPhone(value) {
    return value.replace(/[\s-]/g, '');
  }

  function setStatus(form, type, message) {
    const box = form.querySelector('.form-status');
    if (!box) return;
    box.className = 'form-status is-' + type;
    box.textContent = message;
  }

  function clearErrors(form) {
    form.querySelectorAll('.form__group.is-invalid').forEach(function (g) { g.classList.remove('is-invalid'); });
  }

  function fail(input, message) {
    const group = input.closest('.form__group');
    if (!group) return false;
    group.classList.add('is-invalid');
    const err = group.querySelector('.form__error');
    if (err) err.textContent = message;
    return false;
  }

  function validate(form) {
    clearErrors(form);
    let ok = true;
    let firstInvalid = null;
    form.querySelectorAll('[required]').forEach(function (input) {
      if (!String(input.value || '').trim()) {
        ok = fail(input, 'This field is required.');
        if (!firstInvalid) firstInvalid = input;
      }
    });
    const phone = form.querySelector('[name="phone"]');
    if (phone && phone.value.trim() && !PHONE.test(digitsPhone(phone.value.trim()))) {
      ok = fail(phone, 'Enter a valid 10-digit Indian mobile number.');
      if (!firstInvalid) firstInvalid = phone;
    }
    const email = form.querySelector('[name="email"]');
    if (email && email.value.trim() && !EMAIL.test(email.value.trim())) {
      ok = fail(email, 'Enter a valid email address.');
      if (!firstInvalid) firstInvalid = email;
    }
    if (firstInvalid) firstInvalid.focus();
    return ok;
  }

  function serialize(form) {
    const data = {};
    new FormData(form).forEach(function (value, key) { data[key] = value; });
    return data;
  }

  function whatsappFallback(data) {
    const number = (typeof SITE_INFO !== 'undefined' && SITE_INFO.whatsapp) || '919876543210';
    const lines = Object.keys(data).filter(function (k) { return k !== 'website'; }).map(function (k) {
      return k.replace(/_/g, ' ') + ': ' + data[k];
    });
    const text = encodeURIComponent('RKris Academy enquiry\n' + lines.join('\n'));
    window.open('https://wa.me/' + number + '?text=' + text, '_blank', 'noopener');
  }

  async function submitForm(form) {
    const honey = form.querySelector('[name="website"]');
    if (honey && honey.value) return;

    if (!validate(form)) return;

    const data = serialize(form);
    const btn = form.querySelector('[type="submit"]');
    const original = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    setStatus(form, 'loading', 'Sending your enquiry…');

    if (!FORM_ENDPOINT) {
      whatsappFallback(data);
      setStatus(form, 'success', 'Opening WhatsApp with your message. You can also call the school office.');
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = original; }
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus(form, 'success', 'Thank you. We have received your enquiry and will respond shortly.');
      form.reset();
    } catch (err) {
      setStatus(form, 'error', 'We could not send the form. Opening WhatsApp as a fallback.');
      whatsappFallback(data);
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = original; }
    }
  }

  function bind(form) {
    if (form.dataset.bound === '1') return;
    form.dataset.bound = '1';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitForm(form);
    });
  }

  function init() {
    document.querySelectorAll('[data-enquiry-form]').forEach(bind);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  document.addEventListener('partials:ready', init);
  document.addEventListener('app:ready', init);
})();
