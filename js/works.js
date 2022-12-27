// Summary: Picture galleries and carousels
// Description: Writing JavaScript to help streamline the process for creating picture galleries and carousels for my artwork.
// Author: Ashley Lu
// Created: 09.09.2022

// code references: https://www.tutorialspoint.com/how-to-import-local-json-file-data-to-my-javascript-variable
// https://css-tricks.com/creating-a-modal-image-gallery-with-bootstrap-components/#top-of-site
fetch("../js/works.json")
.then(response => {
    return response.json();
})
.then(data => {
    createGalleryImgs(data)
    createCarouselImgs(data) 
});

/* FUNCTIONS */
function createGalleryImgs(imgJSON) {
    // finds if #foldername-gallery exists in html and creates a gallery in that div 
    for (let gallery in imgJSON) {
        var index = 0; // to help keep track of gallery image indexes
        var divEl = $("#"+gallery+"-gallery");
        for (let image of imgJSON[gallery]) {
            divEl.append("<div class='col-12 col-sm-6 col-md-3'><img class='w-100' src='../img/artwork/"+gallery+"/"+image+"' data-bs-target='#"+gallery+"-carousel' data-bs-slide-to='"+index+"'></div>");
            index += 1;
        }
    }
}

function createCarouselImgs(imgJSON) {
    // finds if target modal exists and creates/appends carousel for associated gallery in #modals
    var modalsEl = $("#modals");
    for (let gallery in imgJSON) {
        var index = 0;
        // asssigning all the html code into lines for organization purposes
        var l1 = "<div class='modal fade' id='"+gallery+"-modal' tabindex='-1'>";
        var l2 = "<div class='modal-dialog modal-xl'><div class='modal-content'><div class='modal-header'>";
        var l3 = "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div>";
        var l4 = "<div class='modal-body'><div id='"+gallery+"-carousel' class='carousel slide' data-bs-ride='carousel'>";
        var l5 = "<div class='carousel-inner'>";
        var html = l1+l2+l3+l4+l5;
        for (let image of imgJSON[gallery]) {
            if (index == 0) {
                var l6 = "<div class='carousel-item active'>";
            } else {
                var l6 = "<div class='carousel-item'>";
            }
            var l7 = "<img class='d-block w-100' src='../img/artwork/"+gallery+"/"+image+"' data-bs-target='#"+gallery+"-carousel'></div>"
            html += l6;
            html += l7;
            index += 1;
        }
        var l8 = "<button class='carousel-control-prev' type='button' data-bs-target='#"+gallery+"-carousel' data-bs-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='visually-hidden'>Previous</span></button>";
        var l9 = "<button class='carousel-control-next' type='button' data-bs-target='#"+gallery+"-carousel' data-bs-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='visually-hidden'>Next</span></button>";
        var l10 = "</div></div></div></div></div>"
        html += l8 + l9 + l10;
        modalsEl.append(html);
    }
}

