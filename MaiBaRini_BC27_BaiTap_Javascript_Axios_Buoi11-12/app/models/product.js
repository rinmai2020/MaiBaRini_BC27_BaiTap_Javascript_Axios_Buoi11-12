// Tạo lớp đối tượng
function User(
  id,
  account,
  passWord,
  fullName,
  email,
  typeUser,
  image,
  description,
  languages
) {
  this.id = id;
  this.account = account;
  this.passWord = passWord;
  this.fullName = fullName;
  this.email = email;
  this.image = image;
  this.typeUser = typeUser;
  this.description = description;
  this.languages = languages;
}
