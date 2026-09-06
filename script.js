const openModalButton = document.getElementById("open-modal");
const confirmationModal = document.getElementById("confirmation-modal");

openModalButton.addEventListener("click", () => {
    confirmationModal.showModal();
});