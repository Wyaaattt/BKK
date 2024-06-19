// document.addEventListener('DOMContentLoaded', (event) => {
//     const toastTrigger = document.getElementById('liveToastBtn');
//     const toastLiveExample = document.getElementById('liveToast');

//     if (toastTrigger) {
//         toastTrigger.addEventListener('click', () => {
//             const toast = new bootstrap.Toast(toastLiveExample);
//             toast.show();
//         });
//     }
// });
document.getElementById('saveChanges').addEventListener('click', function() {
    // Show the toast
    var toastElement = new bootstrap.Toast(document.getElementById('toastExample'));
    toastElement.show();
});