//Call API lấy danh sách
// Hàm main sẽ được chay khi ứng dụng được khởi tạo
main();
function main() {
  // B1: Goi API lấy danh sách
  apiGetUsers().then(function (result) {
    var users = result.data;
    var html = "";
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.typeUser === "GV") {
        html += `
        <div class="col-lg-3 col-md-6 col-sm-6 py-0 py-sm-4 px-sm-4">
          <div class="card card-style ">
              <div class="card-img">
                <img class="card-img-top" src="${user.image}"/>
              </div>
              <div class="card-body">
                <h6>${user.languages}</h6>
                <h1>${user.fullName}</h1>
                <p class="card-text">
                ${user.description}
                </p>
              </div>
          </div>
        </div>
        `;
      }
    }
    document.getElementById("productRow").innerHTML = html;
  });
}
//hien thi user
function display(users) {}
