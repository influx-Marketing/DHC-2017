// BCP SVG #TWO
$(document).ready(function() {
  $("#blueCircleBCP2").hover(
    function() {
      $("#redChartBCP2").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartBCP2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#redChartBCP2").fadeTo(900, 1, 'linear');
      $("#spottyChartBCP2").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#redCircleBCP2").hover(
    function() {
      $("#blueChartBCP2").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartBCP2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blueChartBCP2").fadeTo(900, 1, 'linear');
      $("#spottyChartBCP2").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#spottyCircleBCP2").hover(
    function() {
      $("#blueChartBCP2").not(this).fadeTo(800, 0.2, 'linear');
      $("#redChartBCP2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blueChartBCP2").fadeTo(900, 1, 'linear');
      $("#redChartBCP2").fadeTo(900, 1, 'linear');
    }
  );
})

// BCP SVG #THREE
$(document).ready(function() {
  $("#spottyCircleBCP3").hover(
    function() {
      $("#redChartBCP3").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#redChartBCP3").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#redCircleBCP3").hover(
    function() {
      $("#spottyChartBCP3").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartBCP3").fadeTo(900, 1, 'linear');
    }
  );
})

// BCP SVG #FOUR
$(document).ready(function() {
  $("#blueCircleBCP4").hover(
    function() {
      $("#redChartBCP4").not(this).fadeTo(800, 0.2, 'linear');
      $("#redChart2BCP4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#redChartBCP4").fadeTo(900, 1, 'linear');
      $("#redChart2BCP4").fadeTo(900, 1, 'linear');
    }
  );
})


$(document).ready(function() {
  $("#redCircleBCP4").hover(
    function() {
      $("#blueChartBCP4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blueChartBCP4").fadeTo(900, 1, 'linear');
    }
  );
})

// DR SVG #ONE
$(document).ready(function() {
  $("#yellowCircleDR1").hover(
    function() {
      $("#greenChartDR1").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartDR1").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenCircleDR1").hover(
    function() {
      $("#yellowChartDR1").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#yellowChartDR1").fadeTo(900, 1, 'linear');
    }
  );
})

// DR SVG #TWO
$(document).ready(function() {
  $("#whiteCircleDR2").hover(
    function() {
      $("#blackChartDR2").not(this).fadeTo(800, 0.2, 'linear');
      $("#yellowChartDR2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartDR2").fadeTo(900, 1, 'linear');
      $("#yellowChartDR2").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleDR2").hover(
    function() {
      $("#whiteChartDR2").not(this).fadeTo(800, 0.2, 'linear');
      $("#yellowChartDR2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#whiteChartDR2").fadeTo(900, 1, 'linear');
      $("#yellowChartDR2").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#yellowCircleDR2").hover(
    function() {
      $("#blackChartDR2").not(this).fadeTo(800, 0.2, 'linear');
      $("#whiteChartDR2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartDR2").fadeTo(900, 1, 'linear');
      $("#whiteChartDR2").fadeTo(900, 1, 'linear');
    }
  );
})

// DR SVG #FOUR
$(document).ready(function() {
  $("#whiteCircleDR4").hover(
    function() {
      $("#yellowChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartDR4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#yellowChartDR4").fadeTo(900, 1, 'linear');
      $("#blackChartDR4").fadeTo(900, 1, 'linear');
      $("#spottyChartDR4").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#spottyCircleDR4").hover(
    function() {
      $("#yellowChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#whiteChartDR4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#yellowChartDR4").fadeTo(900, 1, 'linear');
      $("#blackChartDR4").fadeTo(900, 1, 'linear');
      $("#whiteChartDR4").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#yellowCircleDR4").hover(
    function() {
      $("#spottyChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#whiteChartDR4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartDR4").fadeTo(900, 1, 'linear');
      $("#blackChartDR4").fadeTo(900, 1, 'linear');
      $("#whiteChartDR4").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleDR4").hover(
    function() {
      $("#spottyChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#yellowChartDR4").not(this).fadeTo(800, 0.2, 'linear');
      $("#whiteChartDR4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartDR4").fadeTo(900, 1, 'linear');
      $("#yellowChartDR4").fadeTo(900, 1, 'linear');
      $("#whiteChartDR4").fadeTo(900, 1, 'linear');
    }
  );
})

// DR SVG #FIVE
$(document).ready(function() {
  $("#greenCircleDR5").hover(
    function() {
      $("#blackChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#yellowChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartDR5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartDR5").fadeTo(900, 1, 'linear');
      $("#yellowChartDR5").fadeTo(900, 1, 'linear');
      $("#greyChartDR5").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleDR5").hover(
    function() {
      $("#greenChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#yellowChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartDR5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartDR5").fadeTo(900, 1, 'linear');
      $("#yellowChartDR5").fadeTo(900, 1, 'linear');
      $("#greyChartDR5").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#yellowCircleDR5").hover(
    function() {
      $("#greenChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartDR5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartDR5").fadeTo(900, 1, 'linear');
      $("#blackChartDR5").fadeTo(900, 1, 'linear');
      $("#greyChartDR5").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greyCircleDR5").hover(
    function() {
      $("#greenChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartDR5").not(this).fadeTo(800, 0.2, 'linear');
      $("#yellowChartDR5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartDR5").fadeTo(900, 1, 'linear');
      $("#blackChartDR5").fadeTo(900, 1, 'linear');
      $("#yellowChartDR5").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #ONE
$(document).ready(function() {
  $("#orangeCircleC1").hover(
    function() {
      $("#greenChartC1").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC1").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC1").fadeTo(900, 1, 'linear');
      $("#spottyChartC1").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#spottyCircleC1").hover(
    function() {
      $("#greenChartC1").not(this).fadeTo(800, 0.2, 'linear');
      $("#orangeChartC1").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC1").fadeTo(900, 1, 'linear');
      $("#orangeChartC1").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenCircleC1").hover(
    function() {
      $("#spottyChartC1").not(this).fadeTo(800, 0.2, 'linear');
      $("#orangeChartC1").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartC1").fadeTo(900, 1, 'linear');
      $("#orangeChartC1").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #TWO
$(document).ready(function() {
  $("#whiteCircleC2").hover(
    function() {
      $("#blackChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC2").fadeTo(900, 1, 'linear');
      $("#spottyChartC2").fadeTo(900, 1, 'linear');
      $("#greenChartC2").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleC2").hover(
    function() {
      $("#whiteChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#whiteChartC2").fadeTo(900, 1, 'linear');
      $("#spottyChartC2").fadeTo(900, 1, 'linear');
      $("#greenChartC2").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#spottyCircleC2").hover(
    function() {
      $("#whiteChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#whiteChartC2").fadeTo(900, 1, 'linear');
      $("#blackChartC2").fadeTo(900, 1, 'linear');
      $("#greenChartC2").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenCircleC2").hover(
    function() {
      $("#whiteChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC2").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC2").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#whiteChartC2").fadeTo(900, 1, 'linear');
      $("#blackChartC2").fadeTo(900, 1, 'linear');
      $("#spottyChartC2").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #THREE
$(document).ready(function() {
  $("#blackChartC3").hover(
    function() {
      $("#greenChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#orangeChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartC3").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC3").fadeTo(900, 1, 'linear');
      $("#orangeChartC3").fadeTo(900, 1, 'linear');
      $("#greyChartC3").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenChartC3").hover(
    function() {
      $("#blackChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#orangeChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartC3").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC3").fadeTo(900, 1, 'linear');
      $("#orangeChartC3").fadeTo(900, 1, 'linear');
      $("#greyChartC3").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#orangeChartC3").hover(
    function() {
      $("#greenChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartC3").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC3").fadeTo(900, 1, 'linear');
      $("#blackChartC3").fadeTo(900, 1, 'linear');
      $("#greyChartC3").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greyChartC3").hover(
    function() {
      $("#greenChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#orangeChartC3").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC3").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC3").fadeTo(900, 1, 'linear');
      $("#orangeChartC3").fadeTo(900, 1, 'linear');
      $("#blackChartC3").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #FOUR
$(document).ready(function() {
  $("#spottyCircleC4").hover(
    function() {
      $("#greenChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#whiteChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC4").fadeTo(900, 1, 'linear');
      $("#whiteChartC4").fadeTo(900, 1, 'linear');
      $("#blackChartC4").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#whiteCircleC4").hover(
    function() {
      $("#greenChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC4").fadeTo(900, 1, 'linear');
      $("#spottyChartC4").fadeTo(900, 1, 'linear');
      $("#blackChartC4").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleC4").hover(
    function() {
      $("#greenChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#whiteChartC4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greenChartC4").fadeTo(900, 1, 'linear');
      $("#spottyChartC4").fadeTo(900, 1, 'linear');
      $("#whiteChartC4").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenCircleC4").hover(
    function() {
      $("#blackChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC4").not(this).fadeTo(800, 0.2, 'linear');
      $("#whiteChartC4").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC4").fadeTo(900, 1, 'linear');
      $("#spottyChartC4").fadeTo(900, 1, 'linear');
      $("#whiteChartC4").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #FIVE
$(document).ready(function() {
  $("#greyCircleC5").hover(
    function() {
      $("#blackChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#orangeChartC5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC5").fadeTo(900, 1, 'linear');
      $("#greenChartC5").fadeTo(900, 1, 'linear');
      $("#orangeChartC5").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenCircleC5").hover(
    function() {
      $("#blackChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#orangeChartC5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC5").fadeTo(900, 1, 'linear');
      $("#greyChartC5").fadeTo(900, 1, 'linear');
      $("#orangeChartC5").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#orangeCircleC5").hover(
    function() {
      $("#blackChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC5").fadeTo(900, 1, 'linear');
      $("#greyChartC5").fadeTo(900, 1, 'linear');
      $("#greenChartC5").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleC5").hover(
    function() {
      $("#orangeChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartC5").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC5").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#orangeChartC5").fadeTo(900, 1, 'linear');
      $("#greyChartC5").fadeTo(900, 1, 'linear');
      $("#greenChartC5").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #SIX
$(document).ready(function() {
  $("#spottyCircleC6").hover(
    function() {
      $("#blackChartC6").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC6").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC6").fadeTo(900, 1, 'linear');
      $("#greenChartC6").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleC6").hover(
    function() {
      $("#spottyChartC6").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC6").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartC6").fadeTo(900, 1, 'linear');
      $("#greenChartC6").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenCircleC6").hover(
    function() {
      $("#spottyChartC6").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC6").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartC6").fadeTo(900, 1, 'linear');
      $("#blackChartC6").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #SEVEN
$(document).ready(function() {
  $("#spottyCircleC7").hover(
    function() {
      $("#orangeChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC7").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#orangeChartC7").fadeTo(900, 1, 'linear');
      $("#greenChartC7").fadeTo(900, 1, 'linear');
      $("#blackChartC7").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greenCircleC7").hover(
    function() {
      $("#orangeChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC7").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#orangeChartC7").fadeTo(900, 1, 'linear');
      $("#spottyChartC7").fadeTo(900, 1, 'linear');
      $("#blackChartC7").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleC7").hover(
    function() {
      $("#orangeChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC7").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#orangeChartC7").fadeTo(900, 1, 'linear');
      $("#spottyChartC7").fadeTo(900, 1, 'linear');
      $("#greenChartC7").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#orangeCircleC7").hover(
    function() {
      $("#blackChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC7").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC7").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#blackChartC7").fadeTo(900, 1, 'linear');
      $("#spottyChartC7").fadeTo(900, 1, 'linear');
      $("#greenChartC7").fadeTo(900, 1, 'linear');
    }
  );
})

// CYBER SVG #EIGHT
$(document).ready(function() {
  $("#greenCircleC8").hover(
    function() {
      $("#greyChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#spottyChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC8").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greyChartC8").fadeTo(900, 1, 'linear');
      $("#spottyChartC8").fadeTo(900, 1, 'linear');
      $("#blackChartC8").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#spottyCircleC8").hover(
    function() {
      $("#greyChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC8").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#greyChartC8").fadeTo(900, 1, 'linear');
      $("#greenChartC8").fadeTo(900, 1, 'linear');
      $("#blackChartC8").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#greyCircleC8").hover(
    function() {
      $("#spottyChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#blackChartC8").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartC8").fadeTo(900, 1, 'linear');
      $("#greenChartC8").fadeTo(900, 1, 'linear');
      $("#blackChartC8").fadeTo(900, 1, 'linear');
    }
  );
})

$(document).ready(function() {
  $("#blackCircleC8").hover(
    function() {
      $("#spottyChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#greenChartC8").not(this).fadeTo(800, 0.2, 'linear');
      $("#greyChartC8").not(this).fadeTo(800, 0.2, 'linear');
    },
    function() {
      $("#spottyChartC8").fadeTo(900, 1, 'linear');
      $("#greenChartC8").fadeTo(900, 1, 'linear');
      $("#greyChartC8").fadeTo(900, 1, 'linear');
    }
  );
})