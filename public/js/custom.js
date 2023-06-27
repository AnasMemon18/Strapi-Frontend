// tab js start



$(document).ready(function () {
  $('input[type="file"]').change(function (e) {
    var file_name = e.target.files[0].name;
    $(".btn-2").text(file_name);
  });
});



$(document).ready(function () {
  $('#material-tabs').each(function () {

    var $active, $content, $links = $(this).find('a');

    $active = $($links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    $(this).on('click', 'a', function (e) {

      $active.removeClass('active');
      $content.hide();

      $active = $(this);
      $content = $(this.hash);

      $active.addClass('active');
      $content.show();

      e.preventDefault();
    });
  });
});

// tab js end


$(".bxslider").bxSlider({
  mode: "vertical",
  pager: false,
  controls: false,
  infiniteLoop: true,
  auto: true,
  speed: 700,
  pause: 2000,
});

$('.slider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 385,
  slideMargin: 30,
  pager: false,
  mode: 'horizontal'
});

$('.slider-testi').bxSlider({
  minSlides: 1,
  maxSlides: 1,
  moveSlides: 1,
  pager: false,
  responsive: true,
  autoControls: true,
  mode: 'horizontal'
});


// counter js start

$(function () {
  var fx = function fx() {
    $(".count").each(function (i, el) {
      var data = parseInt(this.dataset.n, 10);
      var props = {
        "from": {
          "count": 0
        },
        "to": {
          "count": data
        }
      };
      $(props.from).animate(props.to, {
        duration: 1000 * 1,
        step: function (now, fx) {
          $(el).text(Math.ceil(now));
        },
        complete: function () {
          if (el.dataset.sym !== undefined) {
            el.textContent = el.textContent.concat(el.dataset.sym)
          }
        }
      });
    });
  };

  var reset = function reset() {
    //console.log($(this).scrollTop())
    if ($(this).scrollTop() > 90) {
      $(this).off("scroll");
      fx()
    }
  };

  $(window).on("scroll", reset);
});

// counter js end

// accordian js start
$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});


// accordian js end


// select js start

const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
  a.addEventListener('click', b => {
    const next = b.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
  })
})
option.forEach(a => {
  a.addEventListener('click', b => {
    b.target.parentElement.classList.remove('toggle');

    const parent = b.target.closest('.select').children[0];
    parent.setAttribute('data-type', b.target.getAttribute('data-type'));
    parent.innerText = b.target.innerText;
  })
})

// select js end


// Service slider js start

var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  //console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<button> prev</button>',
  nextArrow: '<button> next</button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function (slider, i) {
    return '';
  },
  /*infinite: false,*/
});


$('.slider').bxSlider({
  auto: true
});



function fun() {
  gotopreviousslide();
}