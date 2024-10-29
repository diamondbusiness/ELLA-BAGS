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




document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    
    function performSearch() {
        const query = searchInput.value.trim();
        let newPage = '';

        if (query === "Túi mini") {
            newPage = 'tuimini.html';
        } else if (query === "Túi xách tay") {
            newPage = 'tuixachtay.html';
        }

        if (newPage) {
            // Construct the full URL to redirect to
            const newPath = `https://diamondbusiness.github.io/ELLA-BAGS/${newPage}`;
            
            // Redirect to the new page
            window.location.replace(newPath);
        }
    }

    // Event listener for button click
    searchButton.addEventListener('click', performSearch);

    // Event listener for Enter key press
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
