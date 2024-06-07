
document.addEventListener("DOMContentLoaded", function() {
  const rowsPerPage = 5; // Jumlah baris per halaman
  const table = document.getElementById('myTable');
  const pagination = document.getElementById('pagination');
  const rows = table.querySelectorAll('tbody tr');
  const pageCount = Math.ceil(rows.length / rowsPerPage);
  const maxVisiblePages = 5; // Maksimum jumlah halaman yang terlihat dalam pagination

  function createPageLink(pageNumber) {
    const li = document.createElement('li');
    li.classList.add('page-item');
    if (pageNumber === 1) li.classList.add('active');

    const a = document.createElement('a');
    a.classList.add('page-link');
    a.href = 'javascript:void(0);';
    a.textContent = pageNumber;

    li.appendChild(a);
    return li;
  }

  function displayPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    rows.forEach((row, index) => {
      row.style.display = (index >= start && index < end) ? '' : 'none';
    });

    const pageItems = pagination.querySelectorAll('.page-item');
    pageItems.forEach(item => item.classList.remove('active'));
    pageItems[page].classList.add('active');

    updatePagination(page);
  }

  function updatePagination(currentPage) {
    const pageItems = pagination.querySelectorAll('.page-item:not(.prev):not(.next)');
    pageItems.forEach(item => item.remove());

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const li = createPageLink(i);
      pagination.insertBefore(li, pagination.querySelector('.next'));
      li.addEventListener('click', () => {
        displayPage(i);
        updateActivePage(i);
      });
    }
  }

  function updateActivePage(pageNumber) {
    const pageItems = pagination.querySelectorAll('.page-item');
    pageItems.forEach(item => item.classList.remove('active'));
    pageItems.forEach(item => {
      const link = item.querySelector('.page-link');
      if (link && parseInt(link.textContent) === pageNumber) {
        item.classList.add('active');
      }
    });
  }

  pagination.querySelector('.prev').addEventListener('click', function() {
    const activePage = parseInt(pagination.querySelector('.page-item.active a').textContent);
    if (activePage > 1) {
      displayPage(activePage - 1);
      updateActivePage(activePage - 1);
    }
  });

  pagination.querySelector('.next').addEventListener('click', function() {
    const activePage = parseInt(pagination.querySelector('.page-item.active a').textContent);
    if (activePage < pageCount) {
      displayPage(activePage + 1);
      updateActivePage(activePage + 1);
    }
  });

  displayPage(1);
});

