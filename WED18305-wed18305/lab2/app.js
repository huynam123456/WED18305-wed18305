let root1;
let root2;

let a = prompt("nhap a");
let a1 = parseFloat(a);
let b = prompt(" nhap b");
let b1 = parseFloat(b);
let c = prompt(" nhap c");
let c1= parseFloat(c);
let d = b * b - 4 *a*c;
if (d<0) {;
    document.write(" phuong trinh vo nghiem");


}else if(d ==0){
    let x = -(b/(2*a));
    document.write("phuogn trinh co nghiem kep "+x)


}else{
    let x1 = (-b / (2 * a)).toFixed(2);
    
    let x2 = (Math.sqrt(-d)/(2*a)).toFixed(2);
    
    document.write( " phuong trinh bat 2 la "+(x1+x2) , (x1-x2)
       
    );
}

