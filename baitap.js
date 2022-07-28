//Bài tập 1:
// câu 1 : các trường hợp đặt tên biến sẽ bị thông báo syntaxError là:
        // tên biến bắt đầu bằng số hoặc các kí tự đặc biệt ngoài "$" và "_"
        // tên biến chứa các kí tự không thuộc các nhóm sau:
                // các chữ cái trong bảng chữ cái latinh
                // các kí tự đặc biệt ngoài 2 kí tự "$" và "_"
                // tên biến là các từ khoá thuộc nhóm reserved words trong javascript 
                // sai cú pháp câu lệnh


        //3 ví dụ về đặt tên sai trong javascript:
                // let 1name ="Hung";
                // let percent50% = "1/2";
                // let fuction = "move up";

// câu 2 : Trong javascript, để kiểm tra kiểu dữ liệu chúng ta dùng toán tử typeof, vài ví dụ về cách sử dụng:
                //typeof "hung"             // returning string 
                //typeof fasle              // returning Boolean
                //typeof {name:'Hung", age : 24}    //returning object

// câu 3 : Các kiểu dữ liệu chính trong javascript là: 
    // Primitive(Dữ liệu nguyên thuỷ)
        //String(chuỗi)
        //Number(số)
        //Boolean(True/False)
        //Null
        //undefine

 //Object(đối tượng)
     //Array(mảng), Object(Đối tượng), Function(Hàm)

// Bài tập 2:
    //a: 
    let msg ="Rikkei is awesome";
    console.log(msg);
    
    //b:
    let studentCount= 0;
    console.log(studentCount);

//Bài tập 3:
    //a:
    msg ="Coding is hard but super cool and fun";
    console.log(msg);
    //b:
    studentCount = 30;
    console.log(studentCount);
    //c:
    console.log(msg.toUpperCase());
    console.log(msg.toLowerCase());
    //d:
    let giatrin =(Number(prompt ("nhap gia tri n")));
    console.log(`${studentCount + giatrin}`);

//Bài tập 4:
    alert("ban se gap may man sau khi doc tin nhan nay");

//Bài tập 5:
    let username =prompt("xin chào, mời bạn nhập tên người dùng");
    alert(`${"xin chào " + username}`);
//Bài tập 6:
    let firstname =prompt("họ của bạn là gì?");
    let lastname =prompt("tên đệm và tên của bạn là gì?");
    alert(`${"xin chào " + firstname +" "+ lastname}`);
//bài tập 7:
    let canhhinhvuong =(Number(prompt("nhập độ dài của 1 cạnh hình vuông")));
    alert(`${"diện tích của hình vuông đó là " + canhhinhvuong**2 }`);
//bài tập 8;
    let bankinh =prompt("nhập bán kính hình tròn");
    alert(`${"diện tích của hình tròn đó là " + bankinh**2*Math.PI}`);
//bài tập 9:
    let nhietdoC=prompt("nhập số đo nhiệt trong thang nhiệt độ Celcius");
    alert(`${"nhiệt độ trong thang đo nhiệt Fahrenheit là "+ ((nhietdoC*1.8)+32)}`);
//bài tập 10:
    alert(`${"the quick ___ fox jumps over the ___dog."}`)
    let caunoi=prompt("nhập từ bất kì");
    let caunoi2=prompt("nhập từ bất kì nữa");
    alert(`${"The quick "+ caunoi + " fox jumps over the " + caunoi2 }`);
//bài tập 11:




    
    


        