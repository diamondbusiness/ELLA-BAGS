document.querySelector(".btn").addEventListener("click", function() {
    document.getElementById("sidebarMenu").classList.toggle("open");
});


document.addEventListener('DOMContentLoaded', function () {
    // Select the "Thêm vào giỏ hàng" button inside gemmaBagModal
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    
    // Add a click event listener to the button
    addToCartButton.addEventListener('click', function () {
        // Hide the gemmaBagModal
        $('#gemmaBagModal').modal('hide');

        // Show the signInModal after gemmaBagModal is closed
        $('#gemmaBagModal').on('hidden.bs.modal', function () {
            $('#signInModal').modal('show');
        });
    });
});
