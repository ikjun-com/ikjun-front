const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
const profileRevise = document.querySelector('.profile-img');

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
    else if(a.length >= 12 || nick.length <= 1 ){
        document.getElementById("Message").innerHTML = alert(" 이하입니다.");
        return false;
    }
}