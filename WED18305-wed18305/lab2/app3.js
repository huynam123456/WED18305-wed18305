
let a = prompt("nhap ho");
let a1 = postMessage(a);
let b = prompt(" nhap ten dem");
let b1 = postMessage(b);
let c = prompt(" nhap ten");
let c1= postMessage(c);
let d = prompt( " gioi tinh ");
let d1 = postMessage(d);
var string = a+b+c;
if (d="nu" ) {
    document.write(string.replace(  b,"ve"));
    
}else{
    ddocument.write(string.replace(b,"van"));
}