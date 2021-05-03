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

  var Crust01 = function (){
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

  var tOtaL1 = function (){
    if ($ ("#tpngs1").val() == "Mushrooms"){
      return Crust01() + (2.5 * noOfPizz1);
    }else{
      if ($ ("#tpngs1").val() == "Sausage"){
        return Crust01() + (2.99 * noOfPizz1);
      }else{
        if ($ ("#tpngs1").val() == "Bacon"){
          return Crust01() + (3 * noOfPizz1);
        }else{
          if ($ ("#tpngs1").val() == "Black olives"){
            return Crust01() + (3.05 * noOfPizz1);
          }else{
            return Crust01() + (3.2 * noOfPizz1);
          }
        }
      }
    }
  }
  alert("Your total order for Small Pizza is: $" + tOtaL1());
});

$ (".form2").submit(function (event){
  event.preventDefault();

  var priceOfPizz2 = 15;
  var noOfPizz2 = parseInt($ ("#amnt2").val());

  var Crust02 = function (){
    if ($("#crust2").val() == "Crispy"){
      return (priceOfPizz2 * noOfPizz2) + (2.5 * noOfPizz2);
    }else{
      if ($("#crust2").val() == "Stuffed"){
        return (priceOfPizz2 * noOfPizz2) + (3.5 * noOfPizz2);
      }else{
        return (priceOfPizz2 * noOfPizz2) + (4.5 * noOfPizz2);
      }
    }
  }

  var tOtaL2 = function (){
    if ($ ("#tpngs2").val() == "Mushrooms"){
      return Crust02() + (3 * noOfPizz2);
    }else{
      if ($ ("#tpngs2").val() == "Sausage"){
        return Crust02() + (3.49 * noOfPizz2);
      }else{
        if ($ ("#tpngs2").val() == "Bacon"){
          return Crust02() + (3.5 * noOfPizz2);
        }else{
          if ($ ("#tpngs2").val() == "Black olives"){
            return Crust02() + (3.55 * noOfPizz2);
          }else{
            return Crust02() + (3.7 * noOfPizz2);
          }
        }
      }
    }
  }
  alert("Your total order for Medium Pizza is: $" + tOtaL2());
});

$ (".form3").submit(function (event){
  event.preventDefault();

  var priceOfPizz3 = 20;
  var noOfPizz3 = parseInt($ ("#amnt3").val());

  var Crust03 = function (){
    if ($("#crust3").val() == "Crispy"){
      return (priceOfPizz3 * noOfPizz3) + (3 * noOfPizz3);
    }else{
      if ($("#crust3").val() == "Stuffed"){
        return (priceOfPizz3 * noOfPizz3) + (4 * noOfPizz3);
      }else{
        return (priceOfPizz3 * noOfPizz3) + (5 * noOfPizz3);
      }
    }
  }

  var tOtaL3 = function (){
    if ($ ("#tpngs3").val() == "Mushrooms"){
      return Crust03() + (3.5 * noOfPizz3);
    }else{
      if ($ ("#tpngs3").val() == "Sausage"){
        return Crust03() + (3.99 * noOfPizz3);
      }else{
        if ($ ("#tpngs3").val() == "Bacon"){
          return Crust03() + (4 * noOfPizz3);
        }else{
          if ($ ("#tpngs3").val() == "Black olives"){
            return Crust03() + (4.05 * noOfPizz3);
          }else{
            return Crust03() + (4.2 * noOfPizz3);
          }
        }
      }
    }
  }
  alert("Your total order for Large Pizza is: $" + tOtaL3());
});