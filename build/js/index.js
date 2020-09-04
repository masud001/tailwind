$(document).ready(function () {
	// search ber
	$("#searchBtn").click(function () {
		$("#serachBar").toggleClass("flex");
		$("#serachBar").toggleClass("hidden");
	});

	// add to cart model
	$("#addToCardBtn").click(function () {
		$("#addToCartModal").toggleClass("flex");
		$("#addToCartModal").toggleClass("hidden");
	});
	$("#addToCartModelCloseBtn").click(function () {
		$("#addToCartModal").toggleClass("flex");
		$("#addToCartModal").toggleClass("hidden");
	});

	// quick view model
	$(".quickViewBtn").click(function () {
		$("#quickViewModal").toggleClass("flex");
		$("#quickViewModal").toggleClass("hidden");
	});
	$("#quickViewModalCloseBtn").click(function () {
		$("#quickViewModal").toggleClass("flex");
		$("#quickViewModal").toggleClass("hidden");
	});

	// dropdown menu for medium
	$(".menu-dropdown").click(function () {
		$("#dropdown-list").toggleClass("flex");
		$("#dropdown-list").toggleClass("hidden");
	});

	// mobile dropdown
	$(".mobileDropdownMenu").click(function () {
		$(".mobileMenuList").toggleClass("flex");
		$(".mobileMenuList").toggleClass("hidden");
		$("#mobileSerachBar").toggleClass("hidden");
		$("#mobileSerachBar").toggleClass("flex");
	});
});
