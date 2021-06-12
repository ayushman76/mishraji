import Gallery from '../export/gallery.js';

var img01 = new Gallery('images/intraoral-camera.jpg','luthra hospital cataract treatment phaco surgery by dr saurabh luthra');

var img02 = new Gallery('images/intraoral-camera.jpg','dr kalpana skin solution hair fall treatmnet acne removal botox treatmnet in luthra hospital');

var img03 = new Gallery('images/intraoral-camera.jpg','intralesionals treatment in bilaspur by dr kalpana luthra cosmetologost');

var img04 = new Gallery('images/intraoral-camera.jpg','hair redution in luthra hospital bilaspur nehru nagar by dr kalpana luthra cosmetologist');

var img05 = new Gallery('images/intraoral-camera.jpg','green laser treatment in bilaspur luthra hospital in nehru nagar road by dr shourabh luthra');

var img06 = new Gallery('images/intraoral-camera.jpg','multi focal lens in luthra hospital bilaspur');

var img07 = new Gallery('images/intraoral-camera.jpg','glaucoma  treatment in bilaspur by dr SK luthra in luthra hospital nehru nagar road');

var img08 = new Gallery('images/intraoral-camera.jpg','vison care and reasearch centre in bilapsur');

var img09 = new Gallery('images/intraoral-camera.jpg','phaco surgery in bilaspur luthra hospital nehru nagar road dr sk luthra');

var img10 = new Gallery('images/intraoral-camera.jpg','retina treatment in bilaspur luthra hospital by dr saurabh');
var img11 = new Gallery('images/intraoral-camera.jpg','toric lens in bilaspur luthra hospital');
var img12 = new Gallery('images/intraoral-camera.jpg','fluorescein angiography treatment in bilaspur by dr Sk luthra from luthra hospital nehru nagar road');


var img_arr = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,img11,img12];

document.querySelector('.gallery').innerHTML+=`
    <div class="container my-4">
	     <div class="row galleryanimate">
		    <h1 class="text-center">Photo Gallery</h1>
			<div class="gallery"></div>
		 </div>
	</div>
`;


for(var i in img_arr){
	document.querySelector('.gallery>.container>.row').innerHTML+=`
	   <div class="col-md-3">
	        <div class="galery_images"><a href="${img_arr[i].img}"><img src="${img_arr[i].img}" alt="${img_arr[i].alt}" class="img-thumbnail img-fluid"></a></li></div>
	   </div>
	`;
}