function searchTable() {
    // Mendapatkan nilai input pencarian
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector(".table");
    tr = table.getElementsByTagName("tr");

    // Loop melalui semua baris tabel, sembunyikan yang tidak cocok
    for (i = 0; i < tr.length; i++) {
        // Loop melalui semua kolom dalam baris
        for (j = 0; j < tr[i].cells.length; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break; // Jika ada satu kolom yang cocok, tampilkan baris
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
   
}

function searchTable1() {
  
}

document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("myTable");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const tbody = table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");
    const rowsToShowInitially = 2;
    const rowsIncrement = 2;
    let visibleRowCount = rowsToShowInitially;
  
    // Fungsi untuk menampilkan baris
    function showRows() {
      for (let i = 0; i < rows.length; i++) {
        if (i < visibleRowCount) {
          rows[i].style.display = "table-row";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  
    // Tampilkan baris pertama kali
    showRows();
  
    // Ketika tombol "Lihat Lebih Banyak" diklik
    loadMoreBtn.addEventListener("click", function() {
      visibleRowCount += rowsIncrement;
      showRows();
  
      // Sembunyikan tombol jika semua baris telah ditampilkan
      if (visibleRowCount >= rows.length) {
        loadMoreBtn.style.display = "none";
      }
    });
  });

  // Toggle Fucntion
  
  

  