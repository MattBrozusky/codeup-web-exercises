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
            index: 1,
            imgFile: '//via.placeholder.com/600x400?text=2',
            price: 1,
            name: 'Light City',
            description: 'light'
        },
        {
            index: 2,
            imgFile: '../img/mma-placeholder.jpg',
            price: 2,
            name: 'Half City',
            description: 'light'
        },
        {
            index: 3,
            imgFile: '../img/mma-placeholder.jpg',
            price: 3,
            name: 'Cinnamon',
            description: 'light'
        },
        {
            index: 4,
            imgFile: '//via.placeholder.com/600x400?text=3',
            price: 4,
            name: 'City',
            description: 'medium'
        },
        {
            index: 5,
            imgFile: '../img/mma-placeholder.jpg',
            price: 5,
            name: 'American',
            description: 'medium'
        },
        {
            index: 6,
            imgFile: '//via.placeholder.com/600x400?text=4',
            price: 6,
            name: 'Breakfast',
            description: 'medium'
        },
        {
            index: 7,
            imgFile: '//via.placeholder.com/600x400?text=5',
            price: 7,
            name: 'High',
            description: 'dark'
        },
        {
            index: 8,
            imgFile: '//via.placeholder.com/600x400?text=6',
            price: 8,
            name: 'Continental',
            description: 'dark'
        },
        {
            index: 9,
            imgFile: '//via.placeholder.com/600x400?text=8',
            price: 9,
            name: 'New Orleans',
            description: 'dark'
        },
        {
            index: 10,
            imgFile: '../img/mma-placeholder.jpg',
            price: 10,
            name: 'European',
            description: 'dark'
        },
        {
            index: 11,
            imgFile: '../img/mma-placeholder.jpg',
            price: 11,
            name: 'Espresso',
            description: 'dark'
        },
        {
            index: 12,
            imgFile: '//via.placeholder.com/600x400?text=1',
            price: 12,
            name: 'Viennese',
            description: 'dark'
        },
        {
            index: 13,
            imgFile: '../img/mma-placeholder.jpg',
            price: 13,
            name: 'Italian',
            description: 'dark'
        },
        {
            index: 14,
            imgFile: '../img/mma-placeholder.jpg',
            price: 14,
            name: 'French',
            description: 'dark'
        }
    ];


    var renderFunctions = {

        renderPainting: function (painting) {
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
        },

        renderPaintingCarousel: function (painting) {
            var html = '<div class="carousel-item col-md-3">';
            html += '<div class="panel panel-default">';
            html += '<div class="panel-thumbnail">';
            html += '<a href="#" title="image ' + painting.index + '" class="thumb">';
            html += '<img class="img-fluid mx-auto d-block" src="'+ painting.imgFile +'" alt="slide 1">';
            html += '</a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            return html;
        }

    };

    function renderPaintingsCarousel(paintings) {
        var html = '';
        for(var i = 0; i < paintings.length; i++) {
            html += renderFunctions.renderPaintingCarousel(paintings[i]);
        }
        return html;
    }


    function renderPaintings(paintings) {
        var html = '';
        for(var i = 0; i < paintings.length; i++) {
            html += renderFunctions.renderPainting(paintings[i]);
        }
        return html;
    }


    $("#img-cards").append(renderPaintings(paintings));
    $("#paintings-carousel").append(renderPaintingsCarousel(paintings));

});



























