// Scroll nav links
$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-about").offset().top + (32)
    }, 2000);
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-work").offset().top
    }, 2000);
});

$("#reviews").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-reviews").offset().top
    }, 2000);
});

$("#hire").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-hire").offset().top
    }, 2000);
});

// Facebook and Homestars logo fade

$("#facebook").hover(
      function() {
          $("#facebook").attr("src","https://i.imgsafe.org/5fe93e4ddb.jpg");
      },
      function() {
          $("#facebook").attr("src","https://i.imgsafe.org/4f65637db3.jpg");
      });

$("#homestars").hover(
      function() {
          $("#homestars").attr("src","https://i.imgsafe.org/5fe933ae89.png");
      },
      function() {
          $("#homestars").attr("src","https://i.imgsafe.org/4f6592265f.png");
      });
