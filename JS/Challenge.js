//activeElement
function actEle() {
    var x = document.activeElement.tagName; 
    // returns the currently focused element in the document.
    //tagName property returns the tag name of the element.
    document.getElementById("act").innerHTML = x;
}

//addEventListener() Method
document.addEventListener("click", function(){
document.getElementById("listen").innerHTML = "Hello Hello, Congrats it worked hurray";
});