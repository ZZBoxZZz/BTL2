document.getElementById("showcart").style.display = "none";
var giohang = new Array();  //du lieu gio hang

        function themvaogiohang(x) {
            var sp = x.parentElement.children;
            var hinh = sp[0].children[0].src;
            var gia = sp[1].children[0].innerText;
            var tensp = sp[3].innerText;
            var soluong = sp[2].value;
            var sp = new Array(hinh, tensp, gia, soluong);

            giohang.push(sp);

            console.log(giohang);
            showcountsp();

        }
        function showcountsp() {
            document.getElementById("countsp").innerHTML = giohang.length;
        }
        
        function showmycart (){
            var ttgh="";
            var tong =0;
            for (let i = 0; i < giohang.length; i++) {
                var tt= parseInt(giohang[i][1])*parseInt(giohang[i][3]);
                tong+=tt; 
                ttgh+= ' <tr>'+
                '<td>'+(i+1)+'</td>'+
                '<td><img src="'+giohang[i][0]+'"></td>'+
                '<td>'+giohang[i][2]+'</td>'+
                '<td>'+giohang[i][1]+'</td>'+
                '<td>'+giohang[i][3]+'</td>'+
                '<td>'+
                '<div>'+tt+'</div>'+
                '</td>'+
                '<td>'+
                '<button onclick="xoasp(this)">Xóa</button>'+
                '</td>'+
            '</tr>';
            }
            ttgh +='<tr>'+
                '<th colspan="6">Tổng đơn hàng</th>'+
                '<th>'+
                '<div>'+tong+'</div>'+
                '</th>'+
                '</tr>';
            document.getElementById("mycart").innerHTML = ttgh;
        }

        function xoasp(x){
            var tr=x.parentElement.parentElement;
            var tensp = tr.children[2].innerText;
            tr.remove()

            for (let i =0; i < giohang.length; i++) {
                if (giohang[i][2]== tensp) {
                    giohang.splice(i,1);
                }
            }
            showmycart();
            showcountsp();

        }
        function xoatatca(){
            giohang = [];
            showcart();
            showcountsp();
        }

        function showcart (){
            var x = document.getElementById("showcart");
            if (x.style.display == "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
                showmycart();
                showcountsp();
        
            }
            
        }
       


       