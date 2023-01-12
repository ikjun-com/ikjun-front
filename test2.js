let dropdown_parent = [
    {v:"0",t:"학과"},
    {v:"1",t:"컴퓨터"},
    {v:"2",t:"소프트웨어"},
    {v:"3",t:"글로벌미디어"}
    ];

    let dropdown_child_0 = [
    {v:"01",t:"과목명"},
    {v:"02",t:"기타명"}
    ];

    let dropdown_child_1 = [
    {v:"11",t:"프로그래밍 및 실습1"},
    {v:"12",t:"프로그래밍 및 실습2"},
    {v:"13",t:"컴퓨터수학1"},
    {v:"14",t:"컴퓨터수학2"},
    {v:"15",t:"컴퓨터미적분학"},
    {v:"16",t:"확률과통계"}
    ];

    let dropdown_child_2 = [
    {v:"21",t:"육개장"},
    {v:"22",t:"고등어"},
    {v:"23",t:"미역국"}
    ];
    function loadDropdownParent(){
        let h = [];
        dropdown_parent.forEach(item => {
            h.push('<option value="' + item.v+'">' + item.t + '</option>');
        });

        document.getElementById("dropdown_parent").innerHTML = h.join("");
    }

    function loadDropdownChild(){
let parent_dropdown = document.getElementById("dropdown_parent").value;
let h = [];
if(parent_dropdown=="0"){
    dropdown_child_0.forEach(item => {
        h.push('<option value="' + item.v+'">' + item.t + '</option>');
    });
}
else{
     if(parent_dropdown=="1"){
        dropdown_child_1.forEach(item => {
            h.push('<option value="' + item.v+'">' + item.t + '</option>');
        });
    }else if(parent_dropdown=="2"){
        dropdown_child_2.forEach(item => {
            h.push('<option value="' + item.v+'">' + item.t + '</option>');
        });
    }
   }
    document.getElementById("dropdown_child").innerHTML = h.join("");
}
    loadDropdownParent();
// function addresskindChange(e){
//     let computer = ["프로그래밍및실습1","컴퓨터수학1","컴퓨터수학2"];
//     let software = ["프로그래밍및실습2","확률과통계","기초공학수학"];
//     let target = document.getElementById("addresskindD");

//     if(e.value == "a"){
//         let d = computer;
//     }
//     else if (e.value == "b"){
//         let d = software;
//     }
//     target.options.length = 0;

//     for( x in d) {
//         let opt = document.createElement("option");
//         opt.value = d[x];
//         opt.innerHTML = d[x];
//         target.appendChild(opt);
//     }
// }