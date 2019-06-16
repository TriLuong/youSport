var promoItemsArr = document.getElementsByClassName("promoItem");
var numberImgShow = 4;
var currentPos = 0;
var tempPromoItemsArr = [];

for (i = 0; i < promoItemsArr.length; i++) {
  if (i < numberImgShow) {
    promoItemsArr[i].style.display = "block";
  } else {
    promoItemsArr[i].style.display = "none";
  }
}

function plusPromo(n) {
  showPromo((currentPos += n));
}

function showPromo(index) {
  for (i = 0; i < promoItemsArr.length; i++) {
    promoItemsArr[i].style.display = "none";
  }
  for (i = 0; i < promoItemsArr.length; i++) {
    if (i === 0) {
      temp = promoItemsArr[0];
    } else {
      tempPromoItemsArr.push(promoItemsArr[i]);
      if (i === promoItemsArr.length - 1) {
        tempPromoItemsArr.push(temp);
      }
    }
  }
  promoItemsArr = tempPromoItemsArr;
  tempPromoItemsArr = [];
  document.getElementsByClassName("promoItems")[0].innerHTML = "";
  for (i = 0; i < numberImgShow; i++) {
    promoItemsArr[i].style.display = "block";
    document.getElementsByClassName("promoItems")[0].innerHTML +=
      "<div class='promoItem'>" + promoItemsArr[i].innerHTML;
  }
}
