do {
    
    
   
    let l = prompt(" trương trình 1 tính trung bình cộng 2 tinh trung bình cộng 3 thoát chon truong trình");

    switch (l) {
        case 1:      
    let a = prompt(" nhap toán ");
    let a1 = parseFloat(a);
    let b = prompt(" nhap hóa");
    let b1 = parseFloat(b);
    let c = prompt(" nhap lý");
    let c1= parseFloat(c);
    let d = prompt(" nhâp sinh");
    let d1 = parseFloat(d);
    
    var tb= (a+b+c+b)/4;
    
    
            switch (tb) {
                case 10:
                    case 9: console.log(" gioi")
    
                    break;
                case 8:
                    case 7: console.log(" khá")
                    break;
    
                    case 6:
                        case 5:console.log("trung bình")
                        break;
                default: console.log(" yếu")
    
                    break;
            }

             case 2: 
    
              
             let toan = prompt(" nhap toán "+ parseFloat (toan));
             let hoa= prompt(" nhap hóa" +parseFloat (hoa));
             let ly = prompt(" nhap lý" +parseFloat (ly));
             let sinh = prompt(" nhâp sinh" +parseFloat (sinh))
            
             let kq= (a+b+c+b)/4;
    
             if (kq>=9) {
                console.log("gioi")
                
             }else if (kq>=7) {
                console.log("khá")
                
             }else if (kq>=5) {
                console.log("trung bình")
                
             }else{
                console.log("yếu")
             }

              
             break ;
    
        default:
            console.log("thoát");
            break;
    }
} while (condition);
