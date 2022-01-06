
  const getHighestScore = (scores) => {
    if (!scores) {
      return "N/A";
    }

    let best = scores[Object.keys(scores)[0]].score;

    for (const [, value] of Object.entries(scores)) {
      if (value.score > best) {
        best = value.score;
      }
    }

    return best;
  };

  const getLowestScore = (scores) => {
    if (!scores) {
      return "N/A";
    }

    let best = scores[Object.keys(scores)[0]].score;

    for (const [, value] of Object.entries(scores)) {
      if (value.score < best) {
        best = value.score;
      }
    }
    
    return best;
  };

  const passedPresidential = (student) => {
    const curlUps = getHighestScore(student?.curlUps);
    const sitAndReach = getHighestScore(student?.sitAndReach);
    const pullUps = getHighestScore(student?.pullUps);
    const pushUps = getHighestScore(student?.pushUps);
    const mile = getLowestScore(student?.mile);
    const shuttle = getLowestScore(student?.shuttle);

    if (student.isMale) {
      if (student.age <= 6) {
        if (
          curlUps >= 33 &&
          shuttle <= 12.1 &&
          sitAndReach >= 31 &&
          mile <= 615 &&
          (pullUps >= 2 ||
            pushUps >= 9)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          curlUps >= 36 &&
          shuttle <= 11.5 &&
          sitAndReach >= 30 &&
          mile <= 562 &&
          (pullUps >= 4 ||
            pushUps >= 14)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          curlUps >= 40 &&
          shuttle <= 11.1 &&
          sitAndReach >= 31 &&
          mile <= 528 &&
          (pullUps >= 5 ||
            pushUps >= 17)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          curlUps >= 41 &&
          shuttle <= 10.9 &&
          sitAndReach >= 31 &&
          mile <= 511 &&
          (pullUps >= 5 ||
            pushUps >= 18)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          curlUps >= 45 &&
          shuttle <= 10.3 &&
          sitAndReach >= 30 &&
          mile <= 477 &&
          (pullUps >= 6 ||
            pushUps >= 22)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          curlUps >= 47 &&
          shuttle <= 10 &&
          sitAndReach >= 31 &&
          mile <= 452 &&
          (pullUps >= 6 ||
            pushUps >= 27)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          curlUps >= 50 &&
          shuttle <= 9.8 &&
          sitAndReach >= 31 &&
          mile <= 431 &&
          (pullUps >= 7) |
            (pushUps >= 31)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          curlUps >= 53 &&
          shuttle <= 9.5 &&
          sitAndReach >= 33 &&
          mile <= 410 &&
          (pullUps >= 7 ||
            pushUps >= 39)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          curlUps >= 56 &&
          shuttle <= 9.1 &&
          sitAndReach >= 36 &&
          mile <= 386 &&
          (pullUps >= 10 ||
            pushUps >= 40)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          curlUps >= 57 &&
          shuttle <= 9 &&
          sitAndReach >= 37 &&
          mile <= 380 &&
          (pullUps >= 11 ||
            pushUps >= 42)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          curlUps >= 56 &&
          shuttle <= 8.7 &&
          sitAndReach >= 38 &&
          mile <= 368 &&
          (pullUps >= 11 ||
            pushUps >= 44)
        ) {
          return true;
        }
      } else {
        if (
          curlUps >= 55 &&
          shuttle <= 8.7 &&
          sitAndReach >= 41 &&
          mile <= 366 &&
          (pullUps >= 13 ||
            pushUps >= 53)
        ) {
          return true;
        }
      }
    } else {
      if (student.age <= 6) {
        if (
          curlUps >= 32 &&
          shuttle <= 12.4 &&
          sitAndReach >= 32 &&
          mile <= 680 &&
          (pullUps >= 2 ||
            pushUps >= 9)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          curlUps >= 34 &&
          shuttle <= 12.1 &&
          sitAndReach >= 32 &&
          mile <= 636 &&
          (pullUps >= 2 ||
            pushUps >= 14)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          curlUps >= 38 &&
          shuttle <= 11.8 &&
          sitAndReach >= 33 &&
          mile <= 602 &&
          (pullUps >= 2 ||
            pushUps >= 17)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          curlUps >= 39 &&
          shuttle <= 11.1 &&
          sitAndReach >= 33 &&
          mile <= 570 &&
          (pullUps >= 2 ||
            pushUps >= 18)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          curlUps >= 40 &&
          shuttle <= 10.8 &&
          sitAndReach >= 33 &&
          mile <= 559 &&
          (pullUps >= 3 ||
            pushUps >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          curlUps >= 42 &&
          shuttle <= 10.5 &&
          sitAndReach >= 34 &&
          mile <= 542 &&
          (pullUps >= 3 ||
            pushUps >= 19)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          curlUps >= 45 &&
          shuttle <= 10.4 &&
          sitAndReach >= 36 &&
          mile <= 503 &&
          (pullUps >= 2 ||
            pushUps >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          curlUps >= 46 &&
          shuttle <= 10.2 &&
          sitAndReach >= 38 &&
          mile <= 493 &&
          (pullUps >= 2 ||
            pushUps >= 21)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          curlUps >= 47 &&
          shuttle <= 10.1 &&
          sitAndReach >= 40 &&
          mile <= 479 &&
          (pullUps >= 2 ||
            pushUps >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          curlUps >= 48 &&
          shuttle <= 10 &&
          sitAndReach >= 43 &&
          mile <= 488 &&
          (pullUps >= 2 ||
            pushUps >= 21)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          curlUps >= 45 &&
          shuttle <= 10.1 &&
          sitAndReach >= 42 &&
          mile <= 503 &&
          (pullUps >= 1 ||
            pushUps >= 24)
        ) {
          return true;
        }
      } else {
        if (
          curlUps >= 44 &&
          shuttle <= 10 &&
          sitAndReach >= 42 &&
          mile <= 495 &&
          (pullUps >= 1 ||
            pushUps >= 25)
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const passedNational = (student) => {
    const curlUps = getHighestScore(student?.curlUps);
    const sitAndReach = getHighestScore(student?.sitAndReach);
    const pullUps = getHighestScore(student?.pullUps);
    const pushUps = getHighestScore(student?.pushUps);
    const armHang = getHighestScore(student?.armHang);
    const mile = getLowestScore(student?.mile);
    const shuttle = getLowestScore(student?.shuttle);

    if (student.isMale) {
      if (student.age <= 6) {
        if (
          curlUps >= 22 &&
          shuttle <= 13.3 &&
          sitAndReach >= 26 &&
          mile <= 756 &&
          (pullUps >= 1 ||
            pushUps >= 7 ||
            armHang >= 6)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          curlUps >= 28 &&
          shuttle <= 12.8 &&
          sitAndReach >= 25 &&
          mile <= 700 &&
          (pullUps >= 1 ||
            pushUps >= 8 ||
            armHang >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          curlUps >= 31 &&
          shuttle <= 12.2 &&
          sitAndReach >= 25 &&
          mile <= 665 &&
          (pullUps >= 1 ||
            pushUps >= 9 ||
            armHang >= 10)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          curlUps >= 32 &&
          shuttle <= 11.9 &&
          sitAndReach >= 25 &&
          mile <= 630 &&
          (pullUps >= 2 ||
            pushUps >= 12 ||
            armHang >= 10)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          curlUps >= 35 &&
          shuttle <= 11.5 &&
          sitAndReach >= 25 &&
          mile <= 588 &&
          (pullUps >= 2 ||
            pushUps >= 14 ||
            armHang >= 12)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          curlUps >= 37 &&
          shuttle <= 11.1 &&
          sitAndReach >= 25 &&
          mile <= 560 &&
          (pullUps >= 2 ||
            pushUps >= 15 ||
            armHang >= 11)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          curlUps >= 40 &&
          shuttle <= 10.6 &&
          sitAndReach >= 26 &&
          mile <= 520 &&
          (pullUps >= 2 ||
            pushUps >= 18 ||
            armHang >= 12)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          curlUps >= 42 &&
          shuttle <= 10.2 &&
          sitAndReach >= 26 &&
          mile <= 486 &&
          (pullUps >= 3 ||
            pushUps >= 24 ||
            armHang >= 14)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          curlUps >= 45 &&
          shuttle <= 9.9 &&
          sitAndReach >= 28 &&
          mile <= 464 &&
          (pullUps >= 5 ||
            pushUps >= 24 ||
            armHang >= 20)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          curlUps >= 45 &&
          shuttle <= 9.7 &&
          sitAndReach >= 30 &&
          mile <= 450 &&
          (pullUps >= 6 ||
            pushUps >= 30 ||
            armHang >= 28)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          curlUps >= 45 &&
          shuttle <= 9.4 &&
          sitAndReach >= 30 &&
          mile <= 430 &&
          (pullUps >= 7 ||
            pushUps >= 30 ||
            armHang >= 28)
        ) {
          return true;
        }
      } else {
        if (
          curlUps >= 44 &&
          shuttle <= 9.4 &&
          sitAndReach >= 34 &&
          mile <= 424 &&
          (pullUps >= 8 ||
            pushUps >= 37 ||
            armHang >= 30)
        ) {
          return true;
        }
      }
    } else {
      if (student.age <= 6) {
        if (
          curlUps >= 23 &&
          shuttle <= 13.8 &&
          sitAndReach >= 27 &&
          mile <= 792 &&
          (pullUps >= 1 ||
            pushUps >= 6 ||
            armHang >= 5)
        ) {
          return true;
        }
      } else if (student.age <= 7) {
        if (
          curlUps >= 25 &&
          shuttle <= 13.2 &&
          sitAndReach >= 27 &&
          mile <= 776 &&
          (pullUps >= 1 ||
            pushUps >= 8 ||
            armHang >= 6)
        ) {
          return true;
        }
      } else if (student.age <= 8) {
        if (
          curlUps >= 29 &&
          shuttle <= 12.9 &&
          sitAndReach >= 28 &&
          mile <= 750 &&
          (pullUps >= 1 ||
            pushUps >= 9 ||
            armHang >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 9) {
        if (
          curlUps >= 30 &&
          shuttle <= 12.5 &&
          sitAndReach >= 28 &&
          mile <= 712 &&
          (pullUps >= 1 ||
            pushUps >= 12 ||
            armHang >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 10) {
        if (
          curlUps >= 30 &&
          shuttle <= 12.1 &&
          sitAndReach >= 28 &&
          mile <= 682 &&
          (pullUps >= 1 ||
            pushUps >= 13 ||
            armHang >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 11) {
        if (
          curlUps >= 32 &&
          shuttle <= 11.5 &&
          sitAndReach >= 29 &&
          mile <= 677 &&
          (pullUps >= 1 ||
            pushUps >= 11 ||
            armHang >= 7)
        ) {
          return true;
        }
      } else if (student.age <= 12) {
        if (
          curlUps >= 35 &&
          shuttle <= 11.3 &&
          sitAndReach >= 30 &&
          mile <= 665 &&
          (pullUps >= 1 ||
            pushUps >= 10 ||
            armHang >= 7)
        ) {
          return true;
        }
      } else if (student.age <= 13) {
        if (
          curlUps >= 37 &&
          shuttle <= 11.1 &&
          sitAndReach >= 31 &&
          mile <= 623 &&
          (pullUps >= 1 ||
            pushUps >= 11 ||
            armHang >= 8)
        ) {
          return true;
        }
      } else if (student.age <= 14) {
        if (
          curlUps >= 37 &&
          shuttle <= 11.2 &&
          sitAndReach >= 33 &&
          mile <= 606 &&
          (pullUps >= 1 ||
            pushUps >= 10 ||
            armHang >= 9)
        ) {
          return true;
        }
      } else if (student.age <= 15) {
        if (
          curlUps >= 36 &&
          shuttle <= 11 &&
          sitAndReach >= 36 &&
          mile <= 598 &&
          (pullUps >= 1 ||
            pushUps >= 15 ||
            armHang >= 7)
        ) {
          return true;
        }
      } else if (student.age <= 16) {
        if (
          curlUps >= 35 &&
          shuttle <= 10.9 &&
          sitAndReach >= 34 &&
          mile <= 631 &&
          (pullUps >= 1 ||
            pushUps >= 12 ||
            armHang >= 7)
        ) {
          return true;
        }
      } else {
        if (
          curlUps >= 34 &&
          shuttle <= 11 &&
          sitAndReach >= 35 &&
          mile <= 622 &&
          (pullUps >= 1 ||
            pushUps >= 16 ||
            armHang >= 7)
        ) {
          return true;
        }
      }
    }

    return false;
  };

 export default {getHighestScore, getLowestScore, passedNational, passedPresidential};
