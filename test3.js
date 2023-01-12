function addresskindChange(e){
    let seoul = ["강남","홍대","영등포","여의도"];
    let gyeonggi = ["수원","평택","용인"];
    let target = document.getElementById("addresskindD");

    if(e.value == "a")
        var d = seoul;
    else if(e.value == "b")
        var d = gyeonggi;
    target.options.length = 0;
    for( x in d){
        let opt = document.createElement("option");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }
}