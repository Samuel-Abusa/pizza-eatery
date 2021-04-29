$ (document).ready(function (){
  $(".prices").hide();
});

function showOrder (price, piz){
  price.show();
  piz.hide();
}

$ (".place1").click(function(){
  showOrder($(".price1"), $(".piz1"));
});

$ (".place2").click(function(){
  showOrder($(".price2"), $(".piz2"));
})

$ (".place3").click(function(){
  showOrder($(".price3"), $(".piz3"));
});

$ (".form1").submit(function (event){
  event.preventDefault();

  var priceOfPizz1 = 10;
  var noOfPizz1 = $ ("#amnt1").val();

  function addCrust(a){
    return +a;
  }
  






  /*function addCrust(a){
    return (priceOfPizz1 * noOfPizz1) + (a * noOfPizz1);
  };*/
  







  /*var crusty = function (){
    if ($ ("#crust1").val() == "Crispy"){
      alert(addCrust(2));
    }else{
      if($ ("#crust1").val() == "Stuffed"){
        alert(addCrust(3));
      }else{
        alert(addCrust(4));
      }
    }
  }
  function addT(){
    + 
  }*/
});
