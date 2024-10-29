document.querySelector(".btn").addEventListener("click", function() {
    document.getElementById("sidebarMenu").classList.toggle("open");
});


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    
    addToCartButton.addEventListener('click', function () {
        $('#gemmaBagModal').modal('hide');

        $('#gemmaBagModal').on('hidden.bs.modal', function () {
            $('#signInModal').modal('show');
        });
    });
});
