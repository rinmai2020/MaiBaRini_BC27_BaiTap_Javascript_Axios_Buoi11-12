var baseUrl = "https://62a42428259aba8e10e2f93f.mockapi.io/api/userManagers";

// Hàm call API lấy danh sách sản phẩm
function apiGetUsers(search) {
  return axios({
    url: baseUrl,
    method: "GET",
    params: {
      name: search,
    },
  });
}
function apiAddUser(user) {
  return axios({
    url: baseUrl,
    method: "POST",
    data: user,
  });
}
function apiDeleteUser(userId) {
  return axios({
    url: `${baseUrl}/${userId}`,
    method: "DELETE",
  });
}
function apiGetUserDetail(userId) {
  return axios({
    url: `${baseUrl}/${userId}`,
    method: "GET",
  });
}
function apiUpdateUser(user) {
  return axios({
    url: `${baseUrl}/${user.id}`,
    data: user,
    method: "PUT",
  });
}
