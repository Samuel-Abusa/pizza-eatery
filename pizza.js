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
  var noOfPizz1 = parseInt($ ("#amnt1").val());

  var Crust = function (){
    if ($("#crust1").val() == "Crispy"){
      return (priceOfPizz1 * noOfPizz1) + (2 * noOfPizz1);
    }else{
      if ($("#crust1").val() == "Stuffed"){
        return (priceOfPizz1 * noOfPizz1) + (3 * noOfPizz1);
      }else{
        return (priceOfPizz1 * noOfPizz1) + (4 * noOfPizz1);
      }
    }
  }

  var tOtaL = function (){
    if ($ ("#tpngs1").val() == "Mushrooms"){
      return Crust() + (2.5 * noOfPizz1);
    }else{
      if ($ ("#tpngs1").val() == "Sausage"){
        return Crust() + (2.99 * noOfPizz1);
      }else{
        if ($ ("#tpngs1").val() == "Bacon"){
          return Crust() + (3 * noOfPizz1);
        }else{
          if ($ ("#tpngs1").val() == "Black olives"){
            return Crust() + (3.05 * noOfPizz1);
          }else{
            return Crust() + (3.2 * noOfPizz1);
          }
        }
      }
    }
  }
});

