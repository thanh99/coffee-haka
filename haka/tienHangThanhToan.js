
let validateName = false;
let validatePhoneNumber = false;
let validateAddress = false;

function validate1() {
    if (document.getElementById('ho_va_ten').value == '') {
        document.getElementById('name-error').innerHTML = '<i style="color: red">Bạn chưa điền tên</i>';
    }
    else {
        document.getElementById('name-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateName = true;
    }
}

function validate2() {
    var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var numberPhone = $('#so_dien_thoai').val();
    if (document.getElementById('so_dien_thoai').value == '') {
        document.getElementById('phonenumber-error').innerHTML = '<i style="color: red">Bạn chưa điền số điện thoại</i>';
    }
    else if (regex.test(numberPhone) == false) {
        document.getElementById('phonenumber-error').innerHTML = '<i style="color: red">Số điện thoại không hợp lệ(đủ 10 chữ số)</i>';
    }
    else {
        document.getElementById('phonenumber-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành</i>';
        validatePhoneNumber = true;
    }
}

function validate3() {
    if (document.getElementById('dia_chi_giao_hang').value == '') {
        document.getElementById('address-error').innerHTML = '<br><i style="color: red">Bạn chưa điền địa chỉ</i>';
    }
    else {
        document.getElementById('address-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành</i>';
        validateAddress = true;
    }
}

// let content = document.getElementById('content');


function displayInfor() {
    let contentText = '';
    let name = document.getElementById('ho_va_ten').value;
    let number = document.getElementById('so_dien_thoai').value;
    let address = document.getElementById('dia_chi_giao_hang').value;
    // var note = document.getElementById('ghi_chu').value;
    // var time = new Date();
    if (validateName == true && validatePhoneNumber == true && validateAddress == true) {
        contentText += `
        <h5>${name}</h5>
        <p>${number}</p>
        <p>${address}</p>
        `
    }
    else {
        contentText += `<h5> Không đủ thông tin </h5>
                       <p>Vui hoàn thành thông tin </p>`
    }
    document.getElementById('content').innerHTML = contentText;
    
}
//-------------------------------hien thi icon------------------------------------------
function displayIcon() {
    let listHoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    let count = 0
    for (let i = 0; i < listHoaDon.length; i++) {
        count += listHoaDon[i].soLuongCuaSanPham;
    }
    document.getElementById("amount").innerHTML = count;
}
displayIcon()
//-------------------------------hien thi hoa don-------------------------------------------
function displayHoaDon() {
    let listHoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    var s = ``;
    var thanhTien = 0;
    for (let i = 0; i < listHoaDon.length; i++) {
        const element = listHoaDon[i];
        s += `<div class="row" style="padding-top: 1rem; border-bottom: #ddd solid 1px;">
                                    <div class="col-sm-8">
                                        <p><strong>${element.soLuongCuaSanPham}x</strong>${element.name}</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p style="text-align:right;">${numberWithCommas(element.price * element.soLuongCuaSanPham)}đ</p>
                                    </div>
                                </div>`
        thanhTien += element.price * element.soLuongCuaSanPham;
    }

    s += `
    <div style="border-bottom: #ddd solid 1px">
    <div class="row" style="padding-top: 1rem;">
    <div class="col-sm-8">
        <p>Tạm tính:</p>
    </div>
    <div class="col-sm-4">
        <p  style="text-align: right;">${numberWithCommas(thanhTien)}đ</p>
    </div>
</div>
<div class="row">
    <div class="col-sm-8">
        <p>Phí ship:</p>
    </div>
    <div class="col-sm-4">
        <p  style="text-align: right;">${numberWithCommas(29000)}đ</p>
    </div>
</div>
</div>
<div class="row" style="padding-top: 1rem;">
    <div class="col-sm-6">
        <h5>Thành tiền:</h5>
    </div>
    <div class="col-sm-6">
        <p style="color:red; font-size: 1.5rem; text-align: right;">${numberWithCommas(thanhTien + 29000)}đ</p>
    </div>
</div>`
    document.getElementById("hoaDon").innerHTML = s;
}
displayHoaDon();

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
//---------------------------------------dat mua-------------------------------------
function datMua() {
    let objTam = {
        nameCustomer: document.getElementById('ho_va_ten').value,
        PhongNumberCustomer: document.getElementById('so_dien_thoai').value,
        addressCustomer: document.getElementById('dia_chi_giao_hang').value,
        noteCustomer: document.getElementById('ghi_chu').value,
        timeCustomer: new Date()
    }
    localStorage.setItem("CustomerLocalstorage",JSON.stringify(objTam));
}