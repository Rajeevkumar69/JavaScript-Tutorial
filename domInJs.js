var element;

element = document.head;
element = document.title;
element = document.all;
element = document.body;
element = document.anchors;
element = document.links;
element = document.images;
element = document.forms;
element = document.doctype;
element = document.URL;
element = document.domain;
element = document.baseURI;


element = document.getElementsByClassName("footer");
element = document.getElementById("head");
element = document.getElementsByTagName('ul');
element = document.getElementsByTagName('li[2]');


element = document.getElementById("head").innerHTML;
element = document.getElementsByClassName("links").innerText;
element = document.getElementById("footer").attributes[1];


element = document.getElementById("footer").innerHTML = "<b>Good Morning ChamchamG</b>";
element = document.getElementById("footer").attributes[1].value = "xyz";
element = document.getElementById("footer").setAttribute("class", "xyz");
element = document.getElementById("footer").removeAttribute("style");

element = document.querySelector("#footer").innerHTML = "<b>Good Morning</b>";
element = document.querySelectorAll(".footer");

element = document.querySelector(".h1").style.color = "blue";
element = document.querySelector(".h1").style.backgroundColor = "red";
element = document.querySelector("h3").className = "h3tag";
element = document.querySelector(".h3").style.color = "green";
element = document.querySelector(".h3").classList;
document.querySelector(".h3").classList.add("h3tag", "abch3");
document.querySelector(".h3").classList.remove("abch3");


document.getElementById("button").onclick = abc;
function abc() {
        document.getElementById("button").style.backgroundColor = "green";

}
document.getElementById("title").addEventListener("click", function () {
        document.getElementById("title").style.backgroundColor = "skyblue";
        document.getElementById("title").style.border = "10px solid red";
});


document.getElementById("title2").addEventListener("click", abC);

function abC() {
        document.getElementById("title2").classList.add("Title2");
        var a = document.getElementById("title2").classList;
        console.log(a);
}
function abC() {
        document.getElementById("title2").classList.remove("Title2");
        var a = document.getElementById("title2").classList;
        console.log(a);
}
function abC() {
        var a = document.getElementById("title2").classList.length;
        console.log(a);
}
function abC() {
        var a = document.getElementById("title2").classList.toggle("title2");
        console.log(a);
}
function abC() {
        var a = document.getElementById("title2").classList.item(0);
        console.log(a);
}
function abC() {
        var a = document.getElementById("title2").classList.contains("title2");
        console.log(a);
}

var b = document.getElementById("title3").parentElement;
var b = document.body.parentElement;
var b = document.getElementById("title3").parentElement.style.backgroundColor = "red";
var b = document.getElementsByClassName("child").parentNode;
console.log(b);

var c = document.getElementById("outer").children;
var c = document.getElementById("outer").children[1];
document.getElementById("outer").children[1].style.backgroundColor = "pink";
var c = document.getElementById("outer").childNodes;
var c = document.getElementById("outer").firstElementChild;
document.getElementById("outer").firstElementChild.style.color = "green";
var c = document.getElementById("outer").nextElementSibling;
var c = document.getElementById("outer").previousElementSibling;
var c = document.getElementById("outer").previousSibling;
var c = document.getElementById("outer").nextSibling;
document.getElementById("outer").previousElementSibling.style.backgroundColor = "yellow";
console.log(c);


var d = document.createElement("p");
var d = document.createTextNode("Hello ChamchamG");
var d = document.createComment("Hello ChamchamG");
var e = document.createElement("h1");
e.appendChild(d);
// d.insertBefore(e);
console.log(d);

var f = document.createElement("h2");
var nf = document.createTextNode("This is just text");
f.appendChild(nf);
var target = document.getElementById("createh4");
var nTarget = "<h2>This is new Target Variable</h2>"
target.insertAdjacentElement("beforebegin", f);
target.insertAdjacentHTML("afterbegin", nTarget);
target.insertAdjacentHTML("beforeend", nTarget);
console.log(f);


var g = document.createElement("li");
var h = document.createTextNode("All Fruits");
g.appendChild(h);
var target = document.getElementById("fruits");
var oldTarget = target.children[1];
target.replaceChild(g, oldTarget);
// target.removeChild(oldTarget);
console.log(oldTarget);


var i = document.getElementById("test");
var target = document.getElementById("abc");
var find = i.contains(target);
console.log(find);


var j = document.getElementById("test");
var find = j.hasAttribute("class");
var find = j.hasChildNodes;
console.log(find);


var k = document.getElementById("fruits").firstElementChild;
var k2 = document.getElementById("test").firstElementChild;
var equal = k.isEqualNode(k2);
console.log(equal);


console.log(element);