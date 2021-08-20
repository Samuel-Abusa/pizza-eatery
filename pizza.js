$(document).ready(function () {
  $(".prices").hide();
  $(".receipt1").hide();
  $(".receipt2").hide();
  $(".receipt3").hide();
});

function showOrder(price, piz) {
  price.show();
  piz.hide();
}

$(".place1").click(function () {
  showOrder($(".price1"), $(".piz1"));
});

$(".place2").click(function () {
  showOrder($(".price2"), $(".piz2"));
});

$(".place3").click(function () {
  showOrder($(".price3"), $(".piz3"));
});

$(".form1").submit(function (event) {
  event.preventDefault();

  var priceOfPizz1 = 10;
  var noOfPizz1 = parseInt($("#amnt1").val());

  function toTalPizzas1() {
    return priceOfPizz1 * noOfPizz1;
  }

  function toTalCrust1() {
    if ($("#crust1").val() == "Crispy") {
      return 2 * noOfPizz1;
    } else {
      if ($("#crust1").val() == "Stuffed") {
        return 3 * noOfPizz1;
      } else {
        return 4 * noOfPizz1;
      }
    }
  }
  function toTalTopings1() {
    if ($("#tpngs1").val() == "Mushrooms") {
      return 2.5 * noOfPizz1;
    } else {
      if ($("#tpngs1").val() == "Sausage") {
        return 2.99 * noOfPizz1;
      } else {
        if ($("#tpngs1").val() == "Bacon") {
          return 3 * noOfPizz1;
        } else {
          if ($("#tpngs1").val() == "Black olives") {
            return 3.05 * noOfPizz1;
          } else {
            return 3.2 * noOfPizz1;
          }
        }
      }
    }
  }

  var Crust01 = function () {
    if ($("#crust1").val() == "Crispy") {
      return toTalPizzas1() + 2 * noOfPizz1;
    } else {
      if ($("#crust1").val() == "Stuffed") {
        return toTalPizzas1() + 3 * noOfPizz1;
      } else {
        return toTalPizzas1() + 4 * noOfPizz1;
      }
    }
  };

  var tOtaL1 = function () {
    if ($("#tpngs1").val() == "Mushrooms") {
      return Crust01() + 2.5 * noOfPizz1;
    } else {
      if ($("#tpngs1").val() == "Sausage") {
        return Crust01() + 2.99 * noOfPizz1;
      } else {
        if ($("#tpngs1").val() == "Bacon") {
          return Crust01() + 3 * noOfPizz1;
        } else {
          if ($("#tpngs1").val() == "Black olives") {
            return Crust01() + 3.05 * noOfPizz1;
          } else {
            return Crust01() + 3.2 * noOfPizz1;
          }
        }
      }
    }
  };

  if ($("input[name = 'optn1']:checked").val() == "Yes") {
    alert("Your delvery fee for small pizza will be $3");
    prompt("Enter where the delivery should be made");
    alert("your order will be delivered to your location");
    $(".sub1").hide();
    $(".chkout1").css({ display: "block" });
  } else {
    $(".sub1").hide();
    $(".chkout1").css({ display: "block" });
  }
  $(".chkout1").click(function () {
    $(".price1").hide();
    $(".receipt1").show();
    document.getElementById("pz1").innerHTML = toTalPizzas1();
    document.getElementById("cr1").innerHTML = toTalCrust1();
    document.getElementById("tp1").innerHTML = toTalTopings1();
    document.getElementById("ttlOdr1").innerHTML = tOtaL1();
  });
  $("#con1").click(function () {
    alert("Your order has been received. Thank you!");
    $(".price1").hide();
    $(".receipt1").hide();
    $(".piz1").show();
    location.reload();
  });
});

$(".form2").submit(function (event) {
  event.preventDefault();

  var priceOfPizz2 = 15;
  var noOfPizz2 = parseInt($("#amnt2").val());

  function toTalPizzas2() {
    return priceOfPizz2 * noOfPizz2;
  }

  function toTalCrust2() {
    if ($("#crust2").val() == "Crispy") {
      return 2.5 * noOfPizz2;
    } else {
      if ($("#crust2").val() == "Stuffed") {
        return (3 / 5) * noOfPizz2;
      } else {
        return 4.5 * noOfPizz2;
      }
    }
  }
  function toTalTopings2() {
    if ($("#tpngs2").val() == "Mushrooms") {
      return 3 * noOfPizz2;
    } else {
      if ($("#tpngs2").val() == "Sausage") {
        return 3.49 * noOfPizz2;
      } else {
        if ($("#tpngs2").val() == "Bacon") {
          return 3.5 * noOfPizz2;
        } else {
          if ($("#tpngs2").val() == "Black olives") {
            return 3.55 * noOfPizz2;
          } else {
            return 3.7 * noOfPizz2;
          }
        }
      }
    }
  }

  var Crust02 = function () {
    if ($("#crust2").val() == "Crispy") {
      return toTalPizzas2() + 2.5 * noOfPizz2;
    } else {
      if ($("#crust2").val() == "Stuffed") {
        return toTalPizzas2() + 3.5 * noOfPizz2;
      } else {
        return toTalPizzas2() + 4.5 * noOfPizz2;
      }
    }
  };

  var tOtaL2 = function () {
    if ($("#tpngs2").val() == "Mushrooms") {
      return Crust02() + 3 * noOfPizz2;
    } else {
      if ($("#tpngs2").val() == "Sausage") {
        return Crust02() + 3.49 * noOfPizz2;
      } else {
        if ($("#tpngs2").val() == "Bacon") {
          return Crust02() + 3.5 * noOfPizz2;
        } else {
          if ($("#tpngs2").val() == "Black olives") {
            return Crust02() + 3.55 * noOfPizz2;
          } else {
            return Crust02() + 3.7 * noOfPizz1;
          }
        }
      }
    }
  };

  if ($("input[name = 'optn2']:checked").val() == "Yes") {
    alert("Your delvery fee for medium pizza will be $3");
    prompt("Enter where the delivery should be made");
    alert("your order will be delivered to your location");
    $(".sub2").hide();
    $(".chkout2").css({ display: "block" });
  } else {
    $(".sub2").hide();
    $(".chkout2").css({ display: "block" });
  }
  $(".chkout2").click(function () {
    $(".price2").hide();
    $(".receipt2").show();
    document.getElementById("pz2").innerHTML = toTalPizzas2();
    document.getElementById("cr2").innerHTML = toTalCrust2();
    document.getElementById("tp2").innerHTML = toTalTopings2();
    document.getElementById("ttlOdr2").innerHTML = tOtaL2();
  });
  $("#con2").click(function () {
    alert("Your order has been received. Thank you!");
    $(".price2").hide();
    $(".receipt2").hide();
    $(".piz2").show();
    location.reload();
  });
});

$(".form3").submit(function (event) {
  event.preventDefault();

  var priceOfPizz3 = 20;
  var noOfPizz3 = parseInt($("#amnt3").val());

  function toTalPizzas3() {
    return priceOfPizz3 * noOfPizz3;
  }

  function toTalCrust3() {
    if ($("#crust3").val() == "Crispy") {
      return 3 * noOfPizz3;
    } else {
      if ($("#crust3").val() == "Stuffed") {
        return 4 * noOfPizz3;
      } else {
        return 5 * noOfPizz3;
      }
    }
  }
  function toTalTopings3() {
    if ($("#tpngs3").val() == "Mushrooms") {
      return 3.5 * noOfPizz3;
    } else {
      if ($("#tpngs3").val() == "Sausage") {
        return 3.99 * noOfPizz3;
      } else {
        if ($("#tpngs3").val() == "Bacon") {
          return 4 * noOfPizz3;
        } else {
          if ($("#tpngs3").val() == "Black olives") {
            return 4.05 * noOfPizz3;
          } else {
            return 4.2 * noOfPizz3;
          }
        }
      }
    }
  }

  var Crust03 = function () {
    if ($("#crust3").val() == "Crispy") {
      return toTalPizzas3() + 3 * noOfPizz3;
    } else {
      if ($("#crust3").val() == "Stuffed") {
        return toTalPizzas3() + 4 * noOfPizz3;
      } else {
        return toTalPizzas3() + 5 * noOfPizz3;
      }
    }
  };

  var tOtaL3 = function () {
    if ($("#tpngs3").val() == "Mushrooms") {
      return Crust03() + 3.5 * noOfPizz3;
    } else {
      if ($("#tpngs3").val() == "Sausage") {
        return Crust03() + 3.99 * noOfPizz3;
      } else {
        if ($("#tpngs3").val() == "Bacon") {
          return Crust03() + 4 * noOfPizz3;
        } else {
          if ($("#tpngs3").val() == "Black olives") {
            return Crust03() + 4.05 * noOfPizz3;
          } else {
            return Crust03() + 4.2 * noOfPizz3;
          }
        }
      }
    }
  };
  if ($("input[name = 'optn3']:checked").val() == "Yes") {
    alert("Your delvery fee will be $3");
    prompt("Enter where the delivery should be made");
    alert("your order will be delivered to your location");
    $(".sub3").hide();
    $(".chkout3").css({ display: "block" });
  } else {
    $(".sub3").hide();
    $(".chkout3").css({ display: "block" });
  }
  $(".chkout3").click(function () {
    $(".price3").hide();
    $(".receipt3").show();
    document.getElementById("pz3").innerHTML = toTalPizzas3();
    document.getElementById("cr3").innerHTML = toTalCrust3();
    document.getElementById("tp3").innerHTML = toTalTopings3();
    document.getElementById("ttlOdr3").innerHTML = tOtaL3();
  });
  $("#con3").click(function () {
    alert("Your order has been received. Thank you!");
    $(".price3").hide();
    $(".receipt3").hide();
    $(".piz3").show();
    location.reload();
  });
});
const mediaQuery = window.matchMedia(`(max-width: 768px)`);
const deskMediaQuery = window.matchMedia(`(min-width: 900px)`);
const slides = document.querySelectorAll(`.pizzz`);

function alertMe(e) {
  if (e.matches) {
    slides.forEach(
      (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
    );
  }
}
mediaQuery.addListener(alertMe);
deskMediaQuery.addListener(function (e) {
  if (e.matches) {
    slides.forEach((slide, i) => (slide.style.flexBasis = `30%`));
  }
});

const openMenu = document.querySelector(`.bi-list`);
const closeMenu = document.querySelector(`.bi-x`);
const menu = document.querySelector(`.navigate`);
const header = document.querySelector(`.headrTxt`);

function mobileMenu() {
  document.querySelector(`nav`).style.height = `50vh`;
  document.querySelector(`.logo`).style.display = `none`;
  menu.classList.remove(`navigate`);
  menu.classList.add(`navigate_sm`);
  document.querySelector(`.navBar`).style.flexDirection = `column`;
  openMenu.style.display = `none`;
  closeMenu.style.display = `block`;
  header.style.display = `none`;
}
function closeMobileMenu() {
  document.querySelector(`nav`).style.height = `10%`;
  document.querySelector(`.logo`).style.display = `block`;
  menu.classList.remove(`navigate_sm`);
  menu.classList.add(`navigate`);
  document.querySelector(`.navBar`).style.flexDirection = `row`;
  openMenu.style.display = `block`;
  closeMenu.style.display = `none`;
  header.style.display = `block`;
}

openMenu.addEventListener(`click`, mobileMenu);
closeMenu.addEventListener(`click`, closeMobileMenu);
