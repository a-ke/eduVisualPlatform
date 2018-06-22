import Vue from 'vue'
Vue.filter("Date", function (val, format) {
  try {
    val = val.replace("-", "/");
  } catch (e) {}
  var date = new Date(val);

  function doubleVal(val) {
    if (val < 10) {
      val = '0' + val;
    }
    return val;
  }

  var Y = doubleVal(date.getFullYear()),
    M = doubleVal(date.getMonth() + 1),
    D = doubleVal(date.getDate()),
    H = doubleVal(date.getHours()),
    I = doubleVal(date.getMinutes()),
    S = doubleVal(date.getSeconds());
  var transDate = null;
  switch (format) {
    case 'YMD':
      transDate = Y + '-' + M + '-' + D;
      break;
    case 'YMDHIS':
      transDate = Y + '-' + M + '-' + D + ' ' + H + ':' + I + ':' + S;
      break;
    case 'YMDHI':
      transDate = Y + '-' + M + '-' + D + ' ' + H + ':' + I;
      break;
    case 'HI':
      transDate = H + ':' + I;
      break;
  }
  return transDate;
});
