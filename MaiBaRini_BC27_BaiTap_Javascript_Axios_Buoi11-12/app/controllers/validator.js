function $(x) {
  return document.getElementById(x);
}
//validator======

function validation() {
  var valid = true;
  // B1 : DOM lấy value từ inout
  var account = $("TaiKhoan").value;
  var errorAccount = $("tbTaiKhoan");
  var regexAcccount = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
  if (!isRequired(account)) {
    valid = false;
    errorAccount.innerHTML = "Tài khoản không được để trống";
  } else if (!regexAcccount.test(account)) {
    valid = false;
    errorAccount.innerHTML = "Tài khoản không hợp lệ";
  } else {
    errorAccount.innerHTML = "";
  }
  //FullName
  var fullName = $("HoTen").value;
  var errorFullName = $("tbHoTen");
  var regexFullName =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (!isRequired(fullName)) {
    valid = false;
    errorFullName.innerHTML = "Họ tên không được để trống";
  } else if (!regexFullName.test(fullName)) {
    valid = false;
    errorFullName.innerHTML = "Họ tên không hợp lệ";
  } else {
    errorFullName.innerHTML = "";
  }
  //Password
  var passWord = $("MatKhau").value;
  var errorPassWord = $("tbMatKhau");
  var regexPassWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,8}$/;
  if (!isRequired(passWord)) {
    valid = false;
    errorPassWord.innerHTML = "Password không được để trống";
  } else if (!regexPassWord.test(passWord)) {
    valid = false;
    errorPassWord.innerHTML = "Password không hợp lệ";
  } else {
    errorPassWord.innerHTML = "";
  }
  //Email
  var email = $("Email").value;
  var errorEmail = $("tbEmail");
  var regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  if (!isRequired(email)) {
    valid = false;
    errorEmail.innerHTML = "Email không được để trống";
  } else if (!regexEmail.test(email)) {
    valid = false;
    errorEmail.innerHTML = "Email không hợp lệ";
    email = "";
  } else {
    errorEmail.innerHTML = "";
  }
  //email
  var email = $("Email").value;
  var errorEmail = $("tbEmail");
  var regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  if (!isRequired(email)) {
    valid = false;
    errorEmail.innerHTML = "Email không được để trống";
  } else if (!regexEmail.test(email)) {
    valid = false;
    errorEmail.innerHTML = "Email không hợp lệ";
    email = "";
  } else {
    errorEmail.innerHTML = "";
  }
  //Hình ảnh
  var image = $("HinhAnh").value;
  var errorImage = $("tbHinhAnh");
  var regexImage = /(https?:\/\/.*\.(?:png|jpg))/i;
  if (!isRequired(image)) {
    valid = false;
    errorImage.innerHTML = "Hình ảnh không được để trống";
  } else {
    errorImage.innerHTML = "";
  }
  //  else if (!regexImage.test(image)) {
  //   valid = false;
  //   errorImage.innerHTML = "Hình ảnh không hợp lệ";
  // }

  //Loai người dùng
  var typeUser = $("loaiNguoiDung").value;
  var errorTypeUser = $("tbloaiNguoiDung");
  if (!isRequired(typeUser)) {
    valid = false;
    errorTypeUser.innerHTML = "Chọn loại người dùng";
  } else if (typeUser === "Chọn loại người dùng") {
    valid = false;
    errorTypeUser.innerHTML = "Chọn loại người dùng";
  } else {
    errorTypeUser.innerHTML = "";
  }
  //Loại ngôn ngữ
  var typeLanguage = $("loaiNgonNgu").value;
  var errorLanguage = $("tbloaiNgonNgu");
  if (!isRequired(typeLanguage)) {
    valid = false;
    errorLanguage.innerHTML = "Chọn ngôn ngữ";
  } else if (typeLanguage === "Chọn ngôn ngữ") {
    valid = false;
    errorLanguage.innerHTML = "Chọn ngôn ngữ";
  } else {
    errorLanguage.innerHTML = "";
  }
  //Motar
  var desc = $("MoTa").value;
  var errordesc = $("tbMoTa");
  if (!isRequired(desc)) {
    valid = false;
    errordesc.innerHTML = "Không được để trống";
  } else if (desc.length > 60) {
    valid = false;
    errordesc.innerHTML = "Không được quá 60 ký tự";
  } else {
    errordesc.innerHTML = "";
  }
  return valid;
}

// hàm kiểm tra input có trống hay không
function isRequired(value) {
  if (!value) {
    return false;
  }
  return true;
}

// hàm kiểm tra độ dài
function length(value, max, min) {
  if (value.length > max) {
    return false;
  }
  if (value.length < min) {
    return false;
  }
  return true;
}
