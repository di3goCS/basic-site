const profile_pic = document.getElementById("profile-pic");
const section_img = document.getElementById("section-img");
const info_box = document.getElementById("info-box");

profile_pic.onclick = function() {
    let pics = ['assets/profile_pic.png', 'assets/profile_pic2.jpeg']
    this.setAttribute('src', pics[Math.random() * pics.length | 0]);
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
