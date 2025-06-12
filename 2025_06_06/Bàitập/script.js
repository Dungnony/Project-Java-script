// BOM (Browser Object Model) là các đối tượng liên quan đến trình duyệt và mỗi một trình duyệt sẽ có những đối tượng khác nhau nên giữa các BOM với nhau nó sẽ không tồn tại một chuẩn chung. 
    /*
Mở một cửa sổ mới
Để mở một cửa sổ mới trên trình duyệt với đối tượng window thì chúng ta sẽ sử dụng phương thức open() với cú pháp như sau:

window.open(url, name, specs);

Trong đó:

url là địa chỉ mà chúng ta muốn mở.

name là tên bạn muốn đặt cho cửa sổ

specs là các thông số cho cửa sổ như:

Chiều cao của trình duyệt: height=pixel

Chiều rộng của trình duyệt: width=pixel

Vị trí hiển thị của của sổ trình duyệt: top=pixel(cách trên), left=pixel(các trái)
*/ //
 
var width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

		var height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

		var x = document.getElementById("demo");
		x.innerHTML = "Chiều cao rộng trình duyệt: " + width + ", Chiều cao của trình duyệt: " + height + ".";
         function openW1() {
        ptit = window.open('https://portal.ptit.edu.vn/', 'ptit', 'width=500,height=600,left=100px,top=20px',false);
        return false;
    }

    function openW2() {
        dantri = window.open('https://dantri.com.vn/', 'dantri', 'width=500,height=600,left=100px,top=20px',false);
        return false;
    }

    function closeW2() {
        dantri.close();
	}

    function closeW1() {
        ptit.close();
	}