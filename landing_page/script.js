document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn--primary').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-link');
        if (url) window.location.href = url;
      });
    });
  });
  