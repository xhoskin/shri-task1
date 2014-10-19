//считаем отступ сверху 
var calculateOffsetTop = function(){
  var windowHeight = $(window).height(),
      popupHeight  = $('#popup-dialog').outerHeight(),
      minOffset    = 30;
  if ( windowHeight >= popupHeight + minOffset * 2 ) {
    return ( windowHeight  - popupHeight ) / 2;
  } else {
    return minOffset;
  }
}

//считаем отступ слева
var calculateOffsetLeft = function(){
  var windowWidth = $(window).width(),
      popupWidth  = $('#popup-dialog').outerWidth(),
      minOffset    = 30;
  if ( windowWidth >= popupWidth + minOffset * 2 ) {
    return ( windowWidth  - popupWidth ) / 2;
  } else {
    return minOffset;
  }
}

var showMarginPopup = function() {
  $('body').addClass('popup-open');
    $('#popup-dialog').css({
      'margin': calculateOffsetTop() + 'px auto 0', 
    });
}

var showTopLeftPopup = function() {
    $('body').addClass('popup-open');
    $('#popup-dialog').css({
      'top': calculateOffsetTop(), 
      'left': calculateOffsetLeft() 
    });
}

var showTablePopup = function() {
    $('body').addClass('table-popup-open');
}

var showTranslatePopup = function() {
    $('body').addClass('popup-open');
    $('#popup-dialog').css({
      'position': 'absolute',
      'top': '50%', 
      'left': '50%',
      'transform': 'translate(-50%, -50%)'
    });
}

var showFixedPopup = function() {
    $('body').addClass('popup-open');
    $('#popup-dialog').css({
      'width': '40%',
      'height': '70%',
      'overflow': 'auto',

      'position': 'fixed',
      'margin': 'auto', 
      'top': '0',
      'left': '0',
      'right': '0',
      'bottom': '0'
    });
}

$('#show-margin-popup').on('click',showMarginPopup);
$('#show-top-left-popup').on('click',showTopLeftPopup);
$('#show-table-popup').on('click',showTablePopup);
$('#show-translate-popup').on('click',showTranslatePopup);
$('#show-fixed-popup').on('click',showFixedPopup);

// закрываем попап
$('.close-popup').on('click',function(e){
  e.preventDefault();
  $('body').removeAttr('class');
  $('#popup-dialog').removeAttr('style');
});
