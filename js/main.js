const profile_pic = document.getElementById("profile-pic");
const section_img = document.getElementById("section-img");
const info_box = document.getElementById("info-box");

profile_pic.onclick = function() {
    let mySrc = this.getAttribute('src');
    if (mySrc == '../assets/profile_pic.png'){
        this.setAttribute('src', '../assets/profile_pic2.jpeg');
    }
    else {
        this.setAttribute('src', '../assets/profile_pic.png');
    }
};

section_img.onmouseover = function() {
    this.classList.add("hvr-grow");
};

info_box.onmouseenter = function() {
    this.classList.add("hvr-grow");
}

info_box.onmouseleave = function() {
    this.classList.remove("hvr-grow");
}
