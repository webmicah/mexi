/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
$( document ).ready(function() {

   $('.Brand_List').flickity({
  // options
    prevNextButtons: 'false',
    autoPlay: 2000,
    pageDots: 'false',
    wrapAround: 'true',
    contain: 'true',
    cellAlign: 'center',
    watchCSS: 'true',
    dragThreshold: '4',
    groupCells: 'false'
  });


  $('.MerchList').flickity({
    // options
    prevNextButtons: 'false',
    pageDots: 'false',
    wrapAround: 'true',
    contain: 'true',
    cellAlign: 'left',
    watchCSS: 'true',
    dragThreshold: '4',
    groupCells: 'false'
  });

$( ".main--menu li.with--child" ).hover(
  function() {
    $( this ).addClass( "actives" );
  }, function() {
    $( this ).removeClass( "actives" );
  }
);

$( ".main--menu li.with--child .list-menu-dropdown" ).hover(
  function() {
    $( this ).parents(".main--menu li.with--child").addClass( "actives" );
  }, function() {
    $( this ).parents(".main--menu li.with--child").removeClass( "actives" );
  }
);



//    $('.AnnouncementBar__Wrapper').flickity({
//   // options
//     prevNextButtons: 'false',
//     autoPlay: 2000,
//     pageDots: 'false',
//     wrapAround: 'true',
//     contain: 'true',
//     cellAlign: 'center',
//     watchCSS: 'true',
//     dragThreshold: '4',
//     groupCells: 'false'
//   });




});
