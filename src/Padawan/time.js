function time(num) {

  num = Math.floor(num / 60000);
  var min = num % 60;
  var hrs = (num - min) / 60;

  return hrs + 'h ' + min + 'min';
}
export default time;