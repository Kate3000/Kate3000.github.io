$(function(){

	'use strict';

 // плавный переход при нажатии на ссылку
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
				{
					scrollTop:$(target).offset().top
				},
				800
			);
	});

// что происходит при скроле : верхнее меню стало узкое 
// позиция фиксед
var offset = $('#bottom_header').offset();

$(window).scroll( function(){

	if( $(window).scrollTop() > offset.top ) {
		$('#bottom_header').addClass('fixedNav');
	}else{
		$('#bottom_header').removeClass('fixedNav');
	}
} );


// добавить слайдер  плагин/slick/с сайта прокрутка отзывов
// +дов файлы 3шт

if( window.innerWidth > 1024 ) {
	$('#slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
	});
}else {
	$('#slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
	});
}


 // в галереи при нажатии на кнопку добавнен 1 ряд фото вконце

$('#view_all_gallery').click( function(){
	let content = '<div class="gallery_line main_flex__nowrap flex__jcontent_between"><div class="box_img_gallery"><img src="img/1.jpg" alt=""></div><div class="box_img_gallery"><img src="img/2.jpg" alt=""></div></div><div class="name_gallery">Marina Palms /<span class="blue">North Miami Beach, FL 33162</span></div>';

	$('#gallery_box').append(content);
	$(this).remove();
})

// при нажатии на 1 окно всплывает форма типа консультации

// при загрузке спрятано
$('#modal_box, #black_fill').hide();

 // вызов по клике в хедере кнопка /call to order/ всплывает окно
$('#call').click(function(){
	$('#modal_box, #black_fill').show();
});

// прятать по крестику или темной заливке
$('#close_modal, #black_fill').click(function(){
	$('#modal_box, #black_fill').hide();
});


});