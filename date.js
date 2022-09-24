exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long" ,
    day: "numeric" ,
    month: "long"
  }
  const date = today.toLocaleDateString("en-US" , options);
  return date;
}