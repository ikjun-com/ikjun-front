function tagSelected(e){
    let computer = ["프로그래밍및실습1","프로그래밍및실습2","컴퓨터수학1","컴퓨터수학2","컴퓨터미적분활용",
"확률및통계","컴퓨터공학기초"];
    let software = ["확률및통계","물리1및실험","이산수학","프로그래밍기초및실습","리눅스시스템관리","창의적공학설계"];
    let global = ["Art&Technology","프로그래밍1및실습","기초조형및실습","컴퓨터시스템개론","프로그래밍2및실습","미디어제작및실습"];
    let target = document.getElementById("subject");
   
    if(e.value == "a")
        var d = computer;
    else if(e.value == "b")
        var d = software;
    else if(e.value == "c")
        var d = global;
    target.options.length = 0;
    for( x in d){
        let opt = document.createElement("option");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }
}