const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
const profileRevise = document.querySelector('.profile-img');
/*다크모드 라이트모드 버튼*/ 
let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="light-btn.png";
    }else{
        icon.src="dark-btn.png";
    }
}

/*프로필 사진 바꾸는  */
imgDiv.addEventListener('mouseenter',function(){
    uploadBtn.style.display = "block";
});


imgDiv.addEventListener('mouseleave',function(){
    uploadBtn.style.display = "none";
});


file.addEventListener('change',function(){

    const chooseFile = this.files[0];

    if(chooseFile){
        const reader = new FileReader();

        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(chooseFile);
    }
});

profileRevise.addEventListener('change', function(){
    const chooseFile = this.files[0];

    if(chooseFile){
        const reader = new FileReader();

        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(chooseFile);
    }
});
/*닉네임 변경버튼js */
function myFun(){
    let a = document.getElementById("user-name").value;

    if(a==""){
        document.getElementById("Message").innerHTML = alert("공백은 허용되지 않습니다.");
        return false;
    }
    else if(!a.match(/^[A-Za-z0-9]*$/)){
        document.getElementById("Message").innerHTML = alert("영문자와숫자를 조합하여2자 이상 8자 이하입니다.");
        return false;
    }
    else if(a.length <= 1 ){
        document.getElementById("Message").innerHTML = alert("글자수가 1자리 이하입니다.");
        return false;
    }
    else if (a.length >= 12  ){
        document.getElementById("Message").innerHTML = alert("글자수가 12자리 이상입니다.");
        return false;
    }
    else {
        document.getElementById("Message").innerHTML = alert("변경되었습니다!");
        return true;
    }
}