const getBestStatic = (scores) => {
  if (scores.length == 0) {
    return 0;
  }

  let best = scores[0].value;

  for (let i = 0; i < scores.length; ++i) {
    if (scores[i].value > best) {
      best = scores[i].value;
    }
  }

  return best;
};

const getBestTimer = (scores) => {
  if (scores.length == 0) {
    return 793;
  }

  let best = scores[0].value;

  for (let i = 0; i < scores.length; ++i) {
    if (scores[i].value < best) {
      best = scores[i].value;
    }
  }

  return best;
};

export default {
  passedPresidential: (student) => {
    if (student.gender == "Boy") {
      if (student.age <= 6) {
        if (
          getBestStatic(student.curlUps) >= 33 &&
          getBestTimer(student.shuttle) <= 12.1 &&
          getBestStatic(student.sitAndReach) >= 31 &&
          getBestTimer(student.mile) <= 615 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 9)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          getBestStatic(student.curlUps) >= 36 &&
          getBestTimer(student.shuttle) <= 11.5 &&
          getBestStatic(student.sitAndReach) >= 30 &&
          getBestTimer(student.mile) <= 562 &&
          (getBestStatic(student.pullUps) >= 4 ||
            getBestStatic(student.pushUps) >= 14)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          getBestStatic(student.curlUps) >= 40 &&
          getBestTimer(student.shuttle) <= 11.1 &&
          getBestStatic(student.sitAndReach) >= 31 &&
          getBestTimer(student.mile) <= 528 &&
          (getBestStatic(student.pullUps) >= 5 ||
            getBestStatic(student.pushUps) >= 17)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          getBestStatic(student.curlUps) >= 41 &&
          getBestTimer(student.shuttle) <= 10.9 &&
          getBestStatic(student.sitAndReach) >= 31 &&
          getBestTimer(student.mile) <= 511 &&
          (getBestStatic(student.pullUps) >= 5 ||
            getBestStatic(student.pushUps) >= 18)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          getBestStatic(student.curlUps) >= 45 &&
          getBestTimer(student.shuttle) <= 10.3 &&
          getBestStatic(student.sitAndReach) >= 30 &&
          getBestTimer(student.mile) <= 477 &&
          (getBestStatic(student.pullUps) >= 6 ||
            getBestStatic(student.pushUps) >= 22)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          getBestStatic(student.curlUps) >= 47 &&
          getBestTimer(student.shuttle) <= 10 &&
          getBestStatic(student.sitAndReach) >= 31 &&
          getBestTimer(student.mile) <= 452 &&
          (getBestStatic(student.pullUps) >= 6 ||
            getBestStatic(student.pushUps) >= 27)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          getBestStatic(student.curlUps) >= 50 &&
          getBestTimer(student.shuttle) <= 9.8 &&
          getBestStatic(student.sitAndReach) >= 31 &&
          getBestTimer(student.mile) <= 431 &&
          (getBestStatic(student.pullUps) >= 7) |
            (getBestStatic(student.pushUps) >= 31)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          getBestStatic(student.curlUps) >= 53 &&
          getBestTimer(student.shuttle) <= 9.5 &&
          getBestStatic(student.sitAndReach) >= 33 &&
          getBestTimer(student.mile) <= 410 &&
          (getBestStatic(student.pullUps) >= 7 ||
            getBestStatic(student.pushUps) >= 39)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          getBestStatic(student.curlUps) >= 56 &&
          getBestTimer(student.shuttle) <= 9.1 &&
          getBestStatic(student.sitAndReach) >= 36 &&
          getBestTimer(student.mile) <= 386 &&
          (getBestStatic(student.pullUps) >= 10 ||
            getBestStatic(student.pushUps) >= 40)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          getBestStatic(student.curlUps) >= 57 &&
          getBestTimer(student.shuttle) <= 9 &&
          getBestStatic(student.sitAndReach) >= 37 &&
          getBestTimer(student.mile) <= 380 &&
          (getBestStatic(student.pullUps) >= 11 ||
            getBestTimer(student.pushUps) >= 42)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          getBestStatic(student.curlUps) >= 56 &&
          getBestTimer(student.shuttle) <= 8.7 &&
          getBestStatic(student.sitAndReach) >= 38 &&
          getBestTimer(student.mile) <= 368 &&
          (getBestStatic(student.pullUps) >= 11 ||
            getBestStatic(student.pushUps) >= 44)
        ) {
          return true;
        }
      } else {
        if (
          getBestStatic(student.curlUps) >= 55 &&
          getBestTimer(student.shuttle) <= 8.7 &&
          getBestStatic(student.sitAndReach) >= 41 &&
          getBestTimer(student.mile) <= 366 &&
          (getBestStatic(student.pullUps) >= 13 ||
            getBestStatic(student.pushUps) >= 53)
        ) {
          return true;
        }
      }
    } else {
      if (student.age <= 6) {
        if (
          getBestStatic(student.curlUps) >= 32 &&
          getBestTimer(student.shuttle) <= 12.4 &&
          getBestStatic(student.sitAndReach) >= 32 &&
          getBestTimer(student.mile) <= 680 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 9)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          getBestStatic(student.curlUps) >= 34 &&
          getBestTimer(student.shuttle) <= 12.1 &&
          getBestStatic(student.sitAndReach) >= 32 &&
          getBestTimer(student.mile) <= 636 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 14)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          getBestStatic(student.curlUps) >= 38 &&
          getBestTimer(student.shuttle) <= 11.8 &&
          getBestStatic(student.sitAndReach) >= 33 &&
          getBestTimer(student.mile) <= 602 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 17)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          getBestStatic(student.curlUps) >= 39 &&
          getBestTimer(student.shuttle) <= 11.1 &&
          getBestStatic(student.sitAndReach) >= 33 &&
          getBestTimer(student.mile) <= 570 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 18)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          getBestStatic(student.curlUps) >= 40 &&
          getBestTimer(student.shuttle) <= 10.8 &&
          getBestStatic(student.sitAndReach) >= 33 &&
          getBestTimer(student.mile) <= 559 &&
          (getBestStatic(student.pullUps) >= 3 ||
            getBestStatic(student.pushUps) >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          getBestStatic(student.curlUps) >= 42 &&
          getBestTimer(student.shuttle) <= 10.5 &&
          getBestStatic(student.sitAndReach) >= 34 &&
          getBestTimer(student.mile) <= 542 &&
          (getBestStatic(student.pullUps) >= 3 ||
            getBestStatic(student.pushUps) >= 19)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          getBestStatic(student.curlUps) >= 45 &&
          getBestTimer(student.shuttle) <= 10.4 &&
          getBestStatic(student.sitAndReach) >= 36 &&
          getBestTimer(student.mile) <= 503 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          getBestStatic(student.curlUps) >= 46 &&
          getBestTimer(student.shuttle) <= 10.2 &&
          getBestStatic(student.sitAndReach) >= 38 &&
          getBestTimer(student.mile) <= 493 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 21)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          getBestStatic(student.curlUps) >= 47 &&
          getBestTimer(student.shuttle) <= 10.1 &&
          getBestStatic(student.sitAndReach) >= 40 &&
          getBestTimer(student.mile) <= 479 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          getBestStatic(student.curlUps) >= 48 &&
          getBestTimer(student.shuttle) <= 10 &&
          getBestStatic(student.sitAndReach) >= 43 &&
          getBestTimer(student.mile) <= 488 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 21)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          getBestStatic(student.curlUps) >= 45 &&
          getBestTimer(student.shuttle) <= 10.1 &&
          getBestStatic(student.sitAndReach) >= 42 &&
          getBestTimer(student.mile) <= 503 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 24)
        ) {
          return true;
        }
      } else {
        if (
          getBestStatic(student.curlUps) >= 44 &&
          getBestTimer(student.shuttle) <= 10 &&
          getBestStatic(student.sitAndReach) >= 42 &&
          getBestTimer(student.mile) <= 495 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 25)
        ) {
          return true;
        }
      }
    }

    return false;
  },

  passedNational: (student) => {
    if (student.gender == "Boy") {
      if (student.age <= 6) {
        if (
          getBestStatic(student.curlUps) >= 22 &&
          getBestTimer(student.shuttle) <= 13.3 &&
          getBestStatic(student.sitAndReach) >= 26 &&
          getBestTimer(student.mile) <= 756 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 7 ||
            getBestStatic(student.flexedArmHang) >= 6)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          getBestStatic(student.curlUps) >= 28 &&
          getBestTimer(student.shuttle) <= 12.8 &&
          getBestStatic(student.sitAndReach) >= 25 &&
          getBestTimer(student.mile) <= 700 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 8 ||
            getBestStatic(student.flexedArmHang) >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          getBestStatic(student.curlUps) >= 31 &&
          getBestTimer(student.shuttle) <= 12.2 &&
          getBestStatic(student.sitAndReach) >= 25 &&
          getBestTimer(student.mile) <= 665 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 9 ||
            getBestStatic(student.flexedArmHang) >= 10)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          getBestStatic(student.curlUps) >= 32 &&
          getBestTimer(student.shuttle) <= 11.9 &&
          getBestStatic(student.sitAndReach) >= 25 &&
          getBestTimer(student.mile) <= 630 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 12 ||
            getBestStatic(student.flexedArmHang) >= 10)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          getBestStatic(student.curlUps) >= 35 &&
          getBestTimer(student.shuttle) <= 11.5 &&
          getBestStatic(student.sitAndReach) >= 25 &&
          getBestTimer(student.mile) <= 588 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 14 ||
            getBestStatic(student.flexedArmHang) >= 12)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          getBestStatic(student.curlUps) >= 37 &&
          getBestTimer(student.shuttle) <= 11.1 &&
          getBestStatic(student.sitAndReach) >= 25 &&
          getBestTimer(student.mile) <= 560 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 15 ||
            getBestStatic(student.flexedArmHang) >= 11)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          getBestStatic(student.curlUps) >= 40 &&
          getBestTimer(student.shuttle) <= 10.6 &&
          getBestStatic(student.sitAndReach) >= 26 &&
          getBestTimer(student.mile) <= 520 &&
          (getBestStatic(student.pullUps) >= 2 ||
            getBestStatic(student.pushUps) >= 18 ||
            getBestStatic(student.flexedArmHang) >= 12)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          getBestStatic(student.curlUps) >= 42 &&
          getBestTimer(student.shuttle) <= 10.2 &&
          getBestStatic(student.sitAndReach) >= 26 &&
          getBestTimer(student.mile) <= 486 &&
          (getBestStatic(student.pullUps) >= 3 ||
            getBestStatic(student.pushUps) >= 24 ||
            getBestStatic(student.flexedArmHang) >= 14)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          getBestStatic(student.curlUps) >= 45 &&
          getBestTimer(student.shuttle) <= 9.9 &&
          getBestStatic(student.sitAndReach) >= 28 &&
          getBestTimer(student.mile) <= 464 &&
          (getBestStatic(student.pullUps) >= 5 ||
            getBestStatic(student.pushUps) >= 24 ||
            getBestStatic(student.flexedArmHang) >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          getBestStatic(student.curlUps) >= 45 &&
          getBestTimer(student.shuttle) <= 9.7 &&
          getBestStatic(student.sitAndReach) >= 30 &&
          getBestTimer(student.mile) <= 450 &&
          (getBestStatic(student.pullUps) >= 6 ||
            getBestStatic(student.pushUps) >= 30 ||
            getBestStatic(student.flexedArmHang) >= 28)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          getBestStatic(student.curlUps) >= 45 &&
          getBestTimer(student.shuttle) <= 9.4 &&
          getBestStatic(student.sitAndReach) >= 30 &&
          getBestTimer(student.mile) <= 430 &&
          (getBestStatic(student.pullUps) >= 7 ||
            getBestStatic(student.pushUps) >= 30 ||
            getBestStatic(student.flexedArmHang) >= 28)
        ) {
          return true;
        }
      } else {
        if (
          getBestStatic(student.curlUps) >= 44 &&
          getBestTimer(student.shuttle) <= 9.4 &&
          getBestStatic(student.sitAndReach) >= 34 &&
          getBestTimer(student.mile) <= 424 &&
          (getBestStatic(student.pullUps) >= 8 ||
            getBestStatic(student.pushUps) >= 37 ||
            getBestStatic(student.flexedArmHang) >= 30)
        ) {
          return true;
        }
      }
    } else {
      if (student.age <= 6) {
        if (
          getBestStatic(student.curlUps) >= 23 &&
          getBestTimer(student.shuttle) <= 13.8 &&
          getBestStatic(student.sitAndReach) >= 27 &&
          getBestTimer(student.mile) <= 792 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 6 ||
            getBestStatic(student.flexedArmHang) >= 5)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          getBestStatic(student.curlUps) >= 25 &&
          getBestTimer(student.shuttle) <= 13.2 &&
          getBestStatic(student.sitAndReach) >= 27 &&
          getBestTimer(student.mile) <= 776 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 8 ||
            getBestStatic(student.flexedArmHang) >= 6)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          getBestStatic(student.curlUps) >= 29 &&
          getBestTimer(student.shuttle) <= 12.9 &&
          getBestStatic(student.sitAndReach) >= 28 &&
          getBestTimer(student.mile) <= 750 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 9 ||
            getBestStatic(student.flexedArmHang) >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          getBestStatic(student.curlUps) >= 30 &&
          getBestTimer(student.shuttle) <= 12.5 &&
          getBestStatic(student.sitAndReach) >= 28 &&
          getBestTimer(student.mile) <= 712 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 12 ||
            getBestStatic(student.flexedArmHang) >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          getBestStatic(student.curlUps) >= 30 &&
          getBestTimer(student.shuttle) <= 12.1 &&
          getBestStatic(student.sitAndReach) >= 28 &&
          getBestTimer(student.mile) <= 682 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 13 ||
            getBestStatic(student.flexedArmHang) >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          getBestStatic(student.curlUps) >= 32 &&
          getBestTimer(student.shuttle) <= 11.5 &&
          getBestStatic(student.sitAndReach) >= 29 &&
          getBestTimer(student.mile) <= 677 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 11 ||
            getBestStatic(student.flexedArmHang) >= 7)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          getBestStatic(student.curlUps) >= 35 &&
          getBestTimer(student.shuttle) <= 11.3 &&
          getBestStatic(student.sitAndReach) >= 30 &&
          getBestTimer(student.mile) <= 665 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 10 ||
            getBestStatic(student.flexedArmHang) >= 7)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          getBestStatic(student.curlUps) >= 37 &&
          getBestTimer(student.shuttle) <= 11.1 &&
          getBestStatic(student.sitAndReach) >= 31 &&
          getBestTimer(student.mile) <= 623 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 11 ||
            getBestStatic(student.flexedArmHang) >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          getBestStatic(student.curlUps) >= 37 &&
          getBestTimer(student.shuttle) <= 11.2 &&
          getBestStatic(student.sitAndReach) >= 33 &&
          getBestTimer(student.mile) <= 606 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 10 ||
            getBestStatic(student.flexedArmHang) >= 9)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          getBestStatic(student.curlUps) >= 36 &&
          getBestTimer(student.shuttle) <= 11 &&
          getBestStatic(student.sitAndReach) >= 36 &&
          getBestTimer(student.mile) <= 598 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 15 ||
            getBestStatic(student.flexedArmHang) >= 7)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          getBestStatic(student.curlUps) >= 35 &&
          getBestTimer(student.shuttle) <= 10.9 &&
          getBestStatic(student.sitAndReach) >= 34 &&
          getBestTimer(student.mile) <= 631 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 12 ||
            getBestStatic(student.flexedArmHang) >= 7)
        ) {
          return true;
        }
      } else {
        if (
          getBestStatic(student.curlUps) >= 34 &&
          getBestTimer(student.shuttle) <= 11 &&
          getBestStatic(student.sitAndReach) >= 35 &&
          getBestTimer(student.mile) <= 622 &&
          (getBestStatic(student.pullUps) >= 1 ||
            getBestStatic(student.pushUps) >= 16 ||
            getBestStatic(student.flexedArmHang) >= 7)
        ) {
          return true;
        }
      }
    }

    return false;
  },
};
