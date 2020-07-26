const profile_pic = document.getElementById("profile-pic");

profile_pic.onclick = function() {
    let mySrc = this.getAttribute('src');
    if (mySrc == '../assets/profile_pic.png'){
        this.setAttribute('src', '../assets/profile_pic2.jpeg');
    }
    else {
        this.setAttribute('src', '../assets/profile_pic.png');
    }
};

const section_img = document.getElementById("section-img");

section_img.onmouseover = function() {
    this.classList.add("hvr-grow");
};


const info_box = document.getElementById("info-box");

info_box.onmouseover = function() {
    this.classList.add("hvr-grow");
}

info_box.onmouseout = function() {
    this.classList.remove("hvr-grow");
}
