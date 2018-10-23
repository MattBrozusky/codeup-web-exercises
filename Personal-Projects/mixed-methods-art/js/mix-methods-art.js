"use strict";

$(document).ready(function () {

//-----------------
// Carousel JS//
//-----------------

    $('#carouselExample').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction === "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });

    $('#carouselExample').carousel({
        interval: 5000
    });

    $(document).ready(function() {
        /* show lightbox when clicking a thumbnail */
        $('a.thumb').click(function(event){
            event.preventDefault();
            var content = $('.modal-body');
            content.empty();
            var title = $(this).attr("title");
            $('.modal-title').html(title);
            content.html($(this).html());
            $(".modal-profile").modal({show:true});
        });

    });


//-----------------
// Paintings Card Creations JS//
//-----------------

    var paintings = [{
            imgFile: '../img/mma-placeholder.jpg',
            price: 1,
            name: 'Light City',
            description: 'light'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 2,
            name: 'Half City',
            description: 'light'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 3,
            name: 'Cinnamon',
            description: 'light'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 4,
            name: 'City',
            description: 'medium'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 5,
            name: 'American',
            description: 'medium'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 6,
            name: 'Breakfast',
            description: 'medium'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 7,
            name: 'High',
            description: 'dark'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 8,
            name: 'Continental',
            description: 'dark'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 9,
            name: 'New Orleans',
            description: 'dark'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 10,
            name: 'European',
            description: 'dark'
        },
        {
            price: 11,
            name: 'Espresso',
            description: 'dark'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 12,
            name: 'Viennese',
            description: 'dark'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 13,
            name: 'Italian',
            description: 'dark'
        },
        {
            imgFile: '../img/mma-placeholder.jpg',
            price: 14,
            name: 'French',
            description: 'dark'
        }
    ];

    function renderPainting(painting) {
        var html = '<article class="col-12 col-md-6 col-xl-4 mt-5">';
        html += '<div class="card">';
        html += '<h4 class="card-title text-center mt-2">' + painting.name + '</h4>';
        html += '<img class="card-img-top" src="' + painting.imgFile + '" alt="Card image cap">';
        html += '<div class="card-body">';
        html += '<p class="card-text">' + painting.description + '</p>';
        html += '</div>';
        html += '<h6 class="card-subtitle mb-2 mr-4 text-muted text-right">' + painting.price  + '</h6>';
        html += '</div>';
        html += '</article>';
        return html;
    }



    function renderPaintings(paintings) {
        var html = '';
        for(var i = 0; i < paintings.length; i++) {
            html += renderPainting(paintings[i]);
        }
        return html;
    }


    $("#img-cards").append(renderPaintings(paintings));



});



























