// Seleccionamos todos los bloques de tiempo clicables
const clickableBlocks = document.querySelectorAll('.clickable');

// Selección de la fecha
const dateInput = document.getElementById('reserva');

// Ventana modal y botones
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");
const closeBtn = document.getElementsByClassName("close")[0];

// Almacena la hora seleccionada
let selectedHour = "";

// Función que se ejecuta cuando se hace clic en un bloque de tiempo
clickableBlocks.forEach(block => {
    block.addEventListener('click', function() {
        const selectedDate = dateInput.value;
        const selectedTime = this.parentElement.cells[0].textContent;

        if (selectedDate) {
            selectedHour = selectedTime;
            modalText.textContent = `¿Estás seguro que deseas hacer una reserva el ${selectedDate} a las ${selectedTime}?`;
            modal.style.display = "block";
        } else {
            alert("Por favor, selecciona una fecha antes de hacer una reserva.");
        }
    });
});

// Función para cerrar la ventana modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Cancelar reserva
cancelBtn.onclick = function() {
    modal.style.display = "none";
};

// Confirmar reserva
confirmBtn.onclick = function() {
    alert(`Reserva confirmada para el ${dateInput.value} a las ${selectedHour}.`);
    modal.style.display = "none";
};

// Cerrar modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
