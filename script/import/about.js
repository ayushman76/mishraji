import {
    About,
    Crousel,
} from "../export/about.js"


var head = new About("Welcome To <strong>Mishra Dant Chikitsalaya</strong>");
var subhead = new About("Dental & implant Care Center");
var para = new About("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");



about.innerHTML += `
   <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="aboutContent">
                   <h3><strong>${head.content}</strong></h3>
                   <h3>${subhead.content}</h3>
                   <hr>
                   <p>${para.content}</p>
                   
                   <div class="tagItem"></div>
                   <a href="about.php" class="btn btn-blue">Know More About Us</a>
                </div>
            </div>
            <!--//COL-MD-6-->
            <div class="col-md-6">
                <div class="imagesslider">
                     <img src="images/hospital-3.jpg" class="img-thumbnail">
                </div>
            </div>
            <!--//COL-MD-6-->
        </div>
   </div>
`;




//SLIDER CODE START HERE
