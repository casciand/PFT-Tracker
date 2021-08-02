export default {
  passedPresidential: (student) => {
    console.log("passed");
    if (student.gender == "Boy") {
      console.log("run");
      if (student.age <= 6) {
        if (
          student.curlUps >= 22 &&
          student.shuttle <= 13.3 &&
          student.sitAndReach >= 26 &&
          student.mile <= 756 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          student.curlUps >= 28 &&
          student.shuttle <= 12.8 &&
          student.sitAndReach >= 25 &&
          student.mile <= 700 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          student.curlUps >= 31 &&
          student.shuttle <= 12.2 &&
          student.sitAndReach >= 25 &&
          student.mile <= 665 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          student.curlUps >= 32 &&
          student.shuttle <= 11.9 &&
          student.sitAndReach >= 25 &&
          student.mile <= 630 &&
          student.pullUps >= 2
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          student.curlUps >= 35 &&
          student.shuttle <= 11.5 &&
          student.sitAndReach >= 25 &&
          student.mile <= 588 &&
          student.pullUps >= 2
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          student.curlUps >= 37 &&
          student.shuttle <= 11.1 &&
          student.sitAndReach >= 25 &&
          student.mile <= 560 &&
          student.pullUps >= 2
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          student.curlUps >= 40 &&
          student.shuttle <= 10.6 &&
          student.sitAndReach >= 26 &&
          student.mile <= 520 &&
          student.pullUps >= 2
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          student.curlUps >= 42 &&
          student.shuttle <= 10.2 &&
          student.sitAndReach >= 26 &&
          student.mile <= 486 &&
          student.pullUps >= 3
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          student.curlUps >= 45 &&
          student.shuttle <= 9.9 &&
          student.sitAndReach >= 28 &&
          student.mile <= 464 &&
          student.pullUps >= 5
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          student.curlUps >= 45 &&
          student.shuttle <= 9.7 &&
          student.sitAndReach >= 30 &&
          student.mile <= 450 &&
          student.pullUps >= 6
        ) {
          console.log("valid");
          return true;
        }
      } else if (student.age <= 16) {
        if (
          student.curlUps >= 45 &&
          student.shuttle <= 9.4 &&
          student.sitAndReach >= 30 &&
          student.mile <= 430 &&
          student.pullUps >= 7
        ) {
          return true;
        }
      } else {
        if (
          student.curlUps >= 44 &&
          student.shuttle <= 9.4 &&
          student.sitAndReach >= 34 &&
          student.mile <= 424 &&
          student.pullUps >= 8
        ) {
          return true;
        }
      }
    } else {
      if (student.age <= 6) {
        if (
          student.curlUps >= 23 &&
          student.shuttle <= 13.8 &&
          student.sitAndReach >= 27 &&
          student.mile <= 792 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          student.curlUps >= 25 &&
          student.shuttle <= 13.2 &&
          student.sitAndReach >= 27 &&
          student.mile <= 776 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          student.curlUps >= 29 &&
          student.shuttle <= 12.9 &&
          student.sitAndReach >= 28 &&
          student.mile <= 750 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          student.curlUps >= 30 &&
          student.shuttle <= 12.5 &&
          student.sitAndReach >= 28 &&
          student.mile <= 712 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          student.curlUps >= 30 &&
          student.shuttle <= 12.5 &&
          student.sitAndReach >= 28 &&
          student.mile <= 682 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          student.curlUps >= 32 &&
          student.shuttle <= 11.5 &&
          student.sitAndReach >= 29 &&
          student.mile <= 677 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          student.curlUps >= 35 &&
          student.shuttle <= 11.3 &&
          student.sitAndReach >= 30 &&
          student.mile <= 665 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          student.curlUps >= 37 &&
          student.shuttle <= 11.1 &&
          student.sitAndReach >= 31 &&
          student.mile <= 623 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          student.curlUps >= 37 &&
          student.shuttle <= 11.2 &&
          student.sitAndReach >= 33 &&
          student.mile <= 606 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          student.curlUps >= 36 &&
          student.shuttle <= 11 &&
          student.sitAndReach >= 36 &&
          student.mile <= 598 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          student.curlUps >= 35 &&
          student.shuttle <= 10.9 &&
          student.sitAndReach >= 34 &&
          student.mile <= 631 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      } else {
        if (
          student.curlUps >= 34 &&
          student.shuttle <= 11 &&
          student.sitAndReach >= 35 &&
          student.mile <= 622 &&
          student.pullUps >= 1
        ) {
          return true;
        }
      }
    }

    return false;
  },

  passeNational: (student) => {},
};
