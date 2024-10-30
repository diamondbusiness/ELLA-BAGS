document.querySelector(".btn").addEventListener("click", function() {
    document.getElementById("sidebarMenu").classList.toggle("open");
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const currentModal = this.closest('.modal'); // Finds the parent modal of the clicked button

        // Hide the current modal
        $(currentModal).modal('hide');

        // When the current modal is fully hidden, show the Sign-In modal
        $(currentModal).on('hidden.bs.modal', function () {
            $('#signInModal').modal('show');
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    
    addToCartButton.addEventListener('click', function () {
        $('#gallery1').modal('hide');

        $('#gallery1').on('hidden.bs.modal', function () {
            $('#signInModal').modal('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    
    addToCartButton.addEventListener('click', function () {
        $('#gallery2').modal('hide');

        $('#gallery2').on('hidden.bs.modal', function () {
            $('#signInModal').modal('show');
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    
    addToCartButton.addEventListener('click', function () {
        $('#gallery3').modal('hide');

        $('#gallery3').on('hidden.bs.modal', function () {
            $('#signInModal').modal('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    
    addToCartButton.addEventListener('click', function () {
        $('#gallery4').modal('hide');

        $('#gallery4').on('hidden.bs.modal', function () {
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
