    function showPage(pageId) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active'));

      const selected = document.getElementById(pageId);
      if (selected) {
        selected.classList.add('active');
      }
    }
