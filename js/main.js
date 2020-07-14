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
