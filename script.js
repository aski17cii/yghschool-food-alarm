var today = new Date();
var year = today.getFullYear(); // 년도
var month = (today.getMonth() + 1).toString().padStart(2,'0');  // 월
var date = today.getDate().toString().padStart(2,'0');  // 날짜

document.querySelector('#YMD').value = year + '-' + month + '-' + date
printFoodList()

var btn = document.querySelector('#printBtn')
btn.addEventListener('click', printFoodList)

function printFoodList() {

  var replaceDate = document.querySelector('#YMD').value.replace(/-/g, '')
  
  var apiURL= "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=f1a5ea919bda4471bc6d1517a067a92c&Type=json&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7531105&MLSV_YMD="+replaceDate
  
  fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    var foodList = data.mealServiceDietInfo[1].row[0].DDISH_NM
    document.querySelector('#foodList').innerHTML = foodList});
}


    



