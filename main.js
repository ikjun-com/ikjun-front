let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["자료 집합소 익준에 오신것을 환영합니다."];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = ""; //이코드로 인하여 일단 텍스트가 사라지고 아래코드로 인하여 채워짐
    dynamic(randomString());
}


//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);

    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);
//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);