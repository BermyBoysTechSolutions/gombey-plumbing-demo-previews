document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.demo-form-status');
    status.textContent = 'Demo complete: no message was sent or saved. A real site would deliver this request to the business.';
    form.reset();
    status.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
});
