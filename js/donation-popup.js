const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", closeDialog);
openBtn.addEventListener("click", openDialog);

function openDialog() {
  document.querySelector("#dialog").showModal();
}

function closeDialog(){
    document.querySelector("#dialog").close();
}

const modal = document.querySelector(".modal-backdrop");

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        document.querySelector("#dialog").close();
    }
})

        function selectAmount(element) {
            // Remove active class from all options
            document.querySelectorAll('.donation-option-modal').forEach(opt => {
                opt.classList.remove('active');
            });
            // Add active class to clicked option
            element.classList.add('active');
            // Clear custom input
            document.querySelector('.custom-donation-modal input').value = '';
        }

        function selectCustom() {
            // Remove active class from preset options
            document.querySelectorAll('.donation-option-modal').forEach(opt => {
                opt.classList.remove('active');
            });
        }

        // Close modal on backdrop click
        document.querySelector('.modal-backdrop').addEventListener('click', function(e) {
            if (e.target === this) {
                // Close modal logic here
                // console.log('Modal backdrop clicked');
            }
        });