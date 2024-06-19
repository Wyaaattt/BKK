document.getElementById('#showToastPlacement').addEventListener('click', function () {
  // Close the modal
  var modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
  modal.hide();

  // Show the toast
  var toastEl = document.getElementById('myToast');
  var toast = new bootstrap.Toast(toastEl);
  toast.show();
});