$( document ).ready(function() {
$('.menu-item-icons').hover(function () {
    $('#active-icons', this).toggleClass('active-icons');
    $('#active-icons', this).css({'display':'block'}); //adds context
});
});