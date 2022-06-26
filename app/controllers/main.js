//Call API lấy danh sách
// Hàm main sẽ được chay khi ứng dụng được khởi tạo
var users = [];
main();
function main() {
  // B1: Goi API lấy danh sách
  apiGetUsers().then(function (result) {
    users = result.data;
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      users[i] = new User(
        user.id,
        user.account,
        user.passWord,
        user.fullName,
        user.email,
        user.typeUser,
        user.image,
        user.description,
        user.languages
      );
    }
    display(users);
  });
}
//hien thi user
function display(users) {
  var html = "";
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    html += `
    <tr>
      <td>${i + 1}</td>
      <td>${user.account}</td>
      <td>${user.passWord}</td>
      <td>${user.fullName}</td>
      <td>${user.email}</td>
      <td>${user.languages}</td>
      <td>${user.typeUser}</td>
      <td >
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          data-type="update"
          data-id="${user.id}"
        >
          Cập Nhật
        </button>
        <button class="btn btn-danger" data-type="delete" data-id="${user.id}">
          Xoá
        </button>
      </td>
    </tr>
    `;
  }
  document.getElementById("tblDanhSachNguoiDung").innerHTML = html;
}

//Them Moi====================
document
  .getElementById("btnThemNguoiDung")
  .addEventListener("click", showAddModal);
//function showAddModal
function showAddModal() {
  document.querySelector(".modal-title").innerHTML = "Danh sách";
  document.querySelector(".modal-footer").innerHTML = `
  <button
      class="btn btn-primary"
      data-type="add"
    >
      Thêm
    </button>
    <button
      class="btn btn-secondary"
      data-toggle="modal"
      data-target="#myModal"
    >
      Huỷ
    </button>
  `;
}
// Them moi
//Lắng nghe event của các button từ thẻ .modal-footer add and update
document
  .querySelector(".modal-footer")
  .addEventListener("click", handleSubmitFooter);
function handleSubmitFooter(e) {
  var type = e.target.getAttribute("data-type");
  switch (type) {
    case "add":
      addUser();
    case "update":
      downUpdateAddUser();
    default:
      break;
  }
}
//Tạo bien edit rong
var btnEdit = "";
function addUser() {
  btnEdit = "add";
  //B1:DOM value
  var account = document.getElementById("TaiKhoan").value;
  var fullName = document.getElementById("HoTen").value;
  var passWord = document.getElementById("MatKhau").value;
  var email = document.getElementById("Email").value;
  var image = document.getElementById("HinhAnh").value;
  var typeUser = document.getElementById("loaiNguoiDung").value;
  var languages = document.getElementById("loaiNgonNgu").value;
  var description = document.getElementById("MoTa").value;

  var valid = validation();
  if (!valid) {
    return;
  }
  var user = new User(
    null,
    account,
    passWord,
    fullName,
    email,
    typeUser,
    image,
    description,
    languages
  );
  //btn Edit
  if (btnEdit === "add") {
    var valid = validation();
    if (!valid) {
      return;
    }
  }
  apiAddUser(user)
    .then(function (result) {
      main();
      resetForm();
    })
    .catch(function (error) {
      console.log(error);
    });
}
//downupdate produc
function downUpdateAddUser() {
  var id = document.getElementById("MaId").value; //Id hidden
  var account = document.getElementById("TaiKhoan").value;
  var fullName = document.getElementById("HoTen").value;
  var passWord = document.getElementById("MatKhau").value;
  var email = document.getElementById("Email").value;
  var image = document.getElementById("HinhAnh").value;
  var typeUser = document.getElementById("loaiNguoiDung").value;
  var languages = document.getElementById("loaiNgonNgu").value;
  var description = document.getElementById("MoTa").value;
  var valid = validation();
  if (!valid) {
    return;
  }
  var user = new User(
    id,
    account,
    passWord,
    fullName,
    email,
    typeUser,
    image,
    description,
    languages
  );
  apiUpdateUser(user)
    .then(function (result) {
      main();
      resetForm();
    })
    .catch(function (error) {
      console.log(error);
    });
}
// Hàm xử lý gọi API xoá sản phẩm
function deleteUser(userId) {
  apiDeleteUser(userId)
    .then(function () {
      // Xoá thành công
      main();
    })
    .catch(function (error) {
      console.log(error);
    });
}
//reset Form===============
function resetForm() {
  // Reset form
  document.getElementById("MaId").value = "";
  document.getElementById("TaiKhoan").value = "";
  document.getElementById("HoTen").value = "";
  document.getElementById("MatKhau").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("HinhAnh").value = "";
  document.getElementById("loaiNguoiDung").value = "";
  document.getElementById("loaiNgonNgu").value = "";
  document.getElementById("MoTa").value = "";
  // Đóng modal
  $("#myModal").modal("hide");
}
document
  .getElementById("tblDanhSachNguoiDung")
  .addEventListener("click", handleProductAction);
function handleProductAction(e) {
  var type = e.target.getAttribute("data-type");
  // Id của sản phẩm
  var id = e.target.getAttribute("data-id");
  switch (type) {
    case "delete":
      deleteUser(id);
      break;
    case "update":
      {
        showUpdateModal(id);
      }
      break;
    default:
      break;
  }
}
function showUpdateModal(userId) {
  document.querySelector(".modal-title").innerHTML = "Cập nhật sản phẩm";
  document.querySelector(".modal-footer").innerHTML = `
    <button
      class="btn btn-primary"
      data-type="update"
      data-toggle="modal"
      data-target="#myModal"
    >
      Cập nhật
    </button>
    <button
      class="btn btn-secondary"
      data-dismiss="modal"
    >
      Huỷ
    </button>
  `;
  //call api
  apiGetUserDetail(userId)
    .then(function (result) {
      // Thành công, fill data lên form
      var user = result.data;
      document.getElementById("MaId").value = user.id;
      document.getElementById("TaiKhoan").value = user.account;
      document.getElementById("HoTen").value = user.fullName;
      document.getElementById("MatKhau").value = user.passWord;
      document.getElementById("Email").value = user.email;
      document.getElementById("HinhAnh").value = user.image;
      document.getElementById("loaiNguoiDung").value = user.typeUser;
      document.getElementById("loaiNgonNgu").value = user.languages;
      document.getElementById("MoTa").value = user.description;
    })
    .catch(function (error) {
      console.log(error);
    });
  document.getElementById("TaiKhoan").disabled = true;
}
//search
document.getElementById("txtSearch").addEventListener("keypress", handleSearch);
function handleSearch(evt) {
  console.log(evt);
  if (evt.key !== "Enter") return;
  var value = evt.target.value;
  apiGetUsers(value).then(function (result) {
    users = result.data;
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      users[i] = new User(
        user.id,
        user.account,
        user.passWord,
        user.fullName,
        user.email,
        user.typeUser,
        user.image,
        user.languages,
        user.description
      );
    }
    display(users);
  });
}
