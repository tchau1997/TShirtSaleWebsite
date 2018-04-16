
var index = 0;
var para = document.createElement("P");

// 
var imageInput = document.getElementById("fileinput1");

para.style.fontSize = "25px";
var textInput;
function fetch() {
    var get = document.getElementById("get-color").value;
    document.getElementById("put-color").value = get;
    para.style.color = get;
}
function myfc() {
    if (document.getElementById("iflower").selected) {
        para.style.fontFamily = "\'Indie Flower\',cursive";
    }
    else if (document.getElementById("PressStart2P").selected) {
        para.style.fontFamily = "\'Press Start 2P\',cursive";
    }
    else if (document.getElementById("FasterOne").selected) {
        para.style.fontFamily = "\'Faster One\',cursive";
    }
    else if (document.getElementById("Orbitron").selected) {
        para.style.fontFamily = "\'Orbitron\',cursive";
    }
    else if (document.getElementById("Monoton|Orbitron").selected) {
        para.style.fontFamily = "\'Monoton\',cursive";
    }
    else if (document.getElementById("normal").selected) {
        para.style.fontFamily = "\'Roboto\',sans-serif";
    }

}


imageInput.onchange = function(){
    readURL(this);
};
function readURL(input) {
    
    var imgav = document.createElement("IMG");
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imgav.setAttribute("src", e.target.result);
            imgav.style.width="200px";
            imgav.style.height="200px";
            
            document.getElementById("khungtrong").appendChild(imgav);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
textInput = document.getElementById("exampleInputEmail1");
// var t = document.createTextNode();
// para.appendChild(t);
document.getElementById("khungtrong").appendChild(para);
textInput.oninput = function () {
    para.innerHTML = textInput.value;
}
function choose(src) {
    var id = "image" + index;
    index = index + 1;
    var x = document.createElement("IMG");
    x.setAttribute("src", src);
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("draggable", "true");
    x.setAttribute("ondragstart", "drag(event)");
    x.setAttribute("alt", "The Pulpit Rock");
    x.setAttribute("id", id);
    x.setAttribute("style", "position:absolute; left:" + 0 + "px; top:" + 0 + "px");
    x.setAttribute("left", "24px");
    x.setAttribute("top", "25px");
    document.getElementById("khungtrong").appendChild(x);


}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {


    var style = window.getComputedStyle(ev.target, null);
    var str = (parseInt(style.getPropertyValue("left"), 10) - ev.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - ev.clientY) + ',' + ev.target.id;

    ev.dataTransfer.setData("text", str);
}

function drop(ev) {

    var data = ev.dataTransfer.getData("text").split(',');
    var dm = document.getElementById(data[2]);
    dm.style.left = (event.clientX + parseInt(data[0])) + 'px';
    dm.style.top = (event.clientY + parseInt(data[1])) + 'px';
    ev.target.appendChild(document.getElementById(data[2]));
    ev.preventDefault();



}
// function setupevent(){
//     alert("đã loa xong");
// }
function doinen(caller){
    $('#nen').attr('src',caller.find("img").attr('src'));
}

function doinen1() {
    var obj = document.getElementById("nen");
    obj.src = "img/t-shirt2.jpg";
    // obj.style.height="500px";
    // obj.style.marginTop="30px";

    // var khung=document.getElementById("khungtrong");
    // khung.style.width= "210px";
    // khung.style.marginLeft="145px";

}
function doinen2() {
    var obj = document.getElementById("nen");
    obj.src = "img/t-shirt3.jpg";
    // obj.style.height="500px";
    // obj.style.marginTop="30px";

    // var khung=document.getElementById("khungtrong");
    // khung.style.width= "220px";
    // khung.style.marginLeft="142px";

}
function doinen3() {
    var obj = document.getElementById("nen");
    obj.src = "img/t-shirt4.jpg";
    // obj.style.height="500px";
    // obj.style.width="550px";
    // obj.style.marginTop="30px";

    // var khung=document.getElementById("khungtrong");
    // khung.style.width= "220px";
    // khung.style.marginLeft="142px";

}
function doinen4() {
    var obj = document.getElementById("nen");
    obj.src = "img/t-shirt5.jpg";
    // obj.style.height="500px";
    // obj.style.width="550px";
    // obj.style.marginTop="30px";

    // var khung=document.getElementById("khungtrong");
    // khung.style.width= "220px";
    // khung.style.marginLeft="142px";

}