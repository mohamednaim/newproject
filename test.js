var startYear = document.getElementById("start"),
  endYear = document.getElementById("end"),
  otherCase = document.getElementById("others");

function gneratYear() {

  "use strict";

  if (startYear.value >= 1900 && endYear.value <= 2016) {

    var year;

    for (year = startYear.value; year <= endYear.value; year++) {

      document.getElementById("theSelector").innerHTML += "<option>" + year + "</option>";
    }
  } else {

    otherCase.innerHTML = "you should inter the value of the years in <1900> to <2016>";

  }
  //[i]case sensitive
  var string ="llove elzero school";
  var result=string.replace(/L/ig,"@");
  var result2=string.replace(/[^e]/ig,"s");
  var result2=string.replace(/[a-e]/ig,"s");
  var result2=string.replace(/[a-z]/ig,"s");
  var result2=string.replace(/[A-z]/ig,"s");
  var result2=string.replace(/[0-9]/i,"s")

  console.log(result);
}