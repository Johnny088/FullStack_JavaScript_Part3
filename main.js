// ============task 1 ===================
let userObj = {
  firstName: 'Johnny',
  lastName: 'Smith',
  age: 25,
};
console.log(userObj);

// task 2 =====================

userObj.fullName = function () {
  return userObj.firstName + ' ' + userObj.lastName;
};
console.log(userObj.fullName());
