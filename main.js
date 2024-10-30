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
        } else if(query === "Túi đeo vai"){
            newPage = "tuideovai.html"
        } else if(query === "Cardhoder"){
            newPage = "Cardhoder"
        } else if(query === "Ví"){
            newPage = "Vi.html"
        } else if(query === "Phụ kiện"){
            newPage = "phukien.html"
        } 

        if (newPage) {
            const newPath = window.location.origin + '/' + newPage;
            window.location.replace(newPath);
        }
    }

    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
