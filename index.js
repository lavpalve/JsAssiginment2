
var showHideBtn = document.getElementById("showHideBtn");
showHideBtn.addEventListener("click", () => {
    var inuputElemt = document.getElementById("passwordField");
    var btnElemt = document.getElementById("showHideBtn");
    if(inuputElemt.type == "text"){
        inuputElemt.type = "password";
        btnElemt.innerHTML = "Show Password";

    }else if(inuputElemt.type == "password"){
        inuputElemt.type = "text";
        btnElemt.innerHTML = "Hide Password";
    }
});

let gmBtnEle = document.getElementById("gmBtn");
let bodyElemt = document.getElementById("body");

gmBtnEle.addEventListener("click", function(){
    let dynamicTextEle = document.getElementById("dynamicContent");
    dynamicTextEle.innerHTML = "Good Morning";
    dynamicTextEle.style.color = "#339";
    bodyElemt.style.background = "url('morning.jpeg')";
    bodyElemt.style.backgroundSize  = "cover" ;

});


const userMsg = (msg, color, url) => {
    htmlElemt = document.getElementById("dynamicContent");
    htmlElemt.innerHTML = msg;
    htmlElemt.style.color = color;
    bodyElemt.style.background = "url('"+url+"')";
    bodyElemt.style.backgroundSize  = "cover" ;
};