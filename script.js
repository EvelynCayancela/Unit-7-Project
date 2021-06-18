// This is an example for product 1, copy and paste everything below for each product
$(".tv_button").click(function() {

    $(".product_image").attr("src", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331762_sd.jpg"); // Sets the product image

    $(".product_text").text("Samsung Tv 65 inch- $749.99"); // Sets the product text
});
$(".laptop_button").click(function() {

    $(".product_image").attr("src", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-202005?wid=892&hei=820&&qlt=80&.v=1587459986844");

    $(".product_text").text("Macbook Pro 2020: 13 inch - Space Grey $1,499"); 
});

$(".ipad_button").click(function() {

    $(".product_image").attr("src", "https://s3.envato.com/files/311562874/Preview%20Sets/1.jpg"); 

    $(".product_text").text("Ipad Air - Green'64 GB $599"); 
});
$(".phone_button").click(function() {

    $(".product_image").attr("src", "https://www.gizmochina.com/wp-content/uploads/2020/01/galaxy-z-flip_h-500x500.jpg");

    $(".product_text").text("Galaxy Z Flip - $1,199"); 
});
$(".address_button").click(function() {
   let saveAddress = $(".address").val();
    alert(saveAddress);
});


