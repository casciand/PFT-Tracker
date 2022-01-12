import { Avatar } from "react-native-paper";

const standards = {
  presidential: {
    curlUps: {
      6: {
        male: 33,
        female: 32,
      },
      7: {
        male: 36,
        female: 34,
      },
      8: {
        male: 40,
        female: 38,
      },
      9: {
        male: 41,
        female: 39,
      },
      10: {
        male: 45,
        female: 40,
      },
      11: {
        male: 47,
        female: 42,
      },
      12: {
        male: 50,
        female: 45,
      },
      13: {
        male: 53,
        female: 46,
      },
      14: {
        male: 56,
        female: 47,
      },
      15: {
        male: 57,
        female: 48,
      },
      16: {
        male: 56,
        female: 45,
      },
      17: {
        male: 55,
        female: 44,
      },
    },
    sitAndReach: {
      6: {
        male: 31,
        female: 32,
      },
      7: {
        male: 30,
        female: 32,
      },
      8: {
        male: 31,
        female: 33,
      },
      9: {
        male: 31,
        female: 33,
      },
      10: {
        male: 30,
        female: 33,
      },
      11: {
        male: 31,
        female: 34,
      },
      12: {
        male: 31,
        female: 36,
      },
      13: {
        male: 33,
        female: 38,
      },
      14: {
        male: 36,
        female: 40,
      },
      15: {
        male: 37,
        female: 43,
      },
      16: {
        male: 38,
        female: 42,
      },
      17: {
        male: 41,
        female: 42,
      },
    },
    pushUps: {
      6: {
        male: 9,
        female: 9,
      },
      7: {
        male: 14,
        female: 14,
      },
      8: {
        male: 17,
        female: 17,
      },
      9: {
        male: 18,
        female: 18,
      },
      10: {
        male: 22,
        female: 20,
      },
      11: {
        male: 27,
        female: 19,
      },
      12: {
        male: 31,
        female: 20,
      },
      13: {
        male: 39,
        female: 21,
      },
      14: {
        male: 40,
        female: 20,
      },
      15: {
        male: 42,
        female: 21,
      },
      16: {
        male: 44,
        female: 24,
      },
      17: {
        male: 53,
        female: 25,
      },
    },
    pullUps: {
      6: {
        male: 2,
        female: 2,
      },
      7: {
        male: 4,
        female: 2,
      },
      8: {
        male: 5,
        female: 2,
      },
      9: {
        male: 5,
        female: 2,
      },
      10: {
        male: 6,
        female: 3,
      },
      11: {
        male: 6,
        female: 3,
      },
      12: {
        male: 7,
        female: 2,
      },
      13: {
        male: 7,
        female: 2,
      },
      14: {
        male: 10,
        female: 2,
      },
      15: {
        male: 11,
        female: 2,
      },
      16: {
        male: 11,
        female: 1,
      },
      17: {
        male: 13,
        female: 1,
      },
    },
    mile: {
      6: {
        male: 615,
        female: 680,
      },
      7: {
        male: 562,
        female: 636,
      },
      8: {
        male: 528,
        female: 602,
      },
      9: {
        male: 511,
        female: 570,
      },
      10: {
        male: 477,
        female: 559,
      },
      11: {
        male: 452,
        female: 542,
      },
      12: {
        male: 431,
        female: 503,
      },
      13: {
        male: 410,
        female: 493,
      },
      14: {
        male: 386,
        female: 479,
      },
      15: {
        male: 380,
        female: 488,
      },
      16: {
        male: 368,
        female: 503,
      },
      17: {
        male: 366,
        female: 495,
      },
    },
    shuttle: {
      6: {
        male: 12.1,
        female: 12.4,
      },
      7: {
        male: 11.5,
        female: 12.1,
      },
      8: {
        male: 11.1,
        female: 11.8,
      },
      9: {
        male: 10.9,
        female: 11.1,
      },
      10: {
        male: 10.3,
        female: 10.8,
      },
      11: {
        male: 10,
        female: 10.5,
      },
      12: {
        male: 9.8,
        female: 10.4,
      },
      13: {
        male: 9.5,
        female: 10.2,
      },
      14: {
        male: 9.1,
        female: 10.1,
      },
      15: {
        male: 9,
        female: 10,
      },
      16: {
        male: 8.7,
        female: 10.1,
      },
      17: {
        male: 8.7,
        female: 10,
      },
    },
  },
  national: {
    curlUps: {
      6: {
        male: 22,
        female: 23,
      },
      7: {
        male: 28,
        female: 25,
      },
      8: {
        male: 31,
        female: 29,
      },
      9: {
        male: 32,
        female: 30,
      },
      10: {
        male: 35,
        female: 30,
      },
      11: {
        male: 37,
        female: 32,
      },
      12: {
        male: 40,
        female: 35,
      },
      13: {
        male: 42,
        female: 37,
      },
      14: {
        male: 45,
        female: 37,
      },
      15: {
        male: 45,
        female: 36,
      },
      16: {
        male: 45,
        female: 35,
      },
      17: {
        male: 44,
        female: 34,
      },
    },
    sitAndReach: {
      6: {
        male: 26,
        female: 27,
      },
      7: {
        male: 25,
        female: 27,
      },
      8: {
        male: 25,
        female: 28,
      },
      9: {
        male: 25,
        female: 28,
      },
      10: {
        male: 25,
        female: 28,
      },
      11: {
        male: 25,
        female: 29,
      },
      12: {
        male: 26,
        female: 30,
      },
      13: {
        male: 26,
        female: 31,
      },
      14: {
        male: 28,
        female: 33,
      },
      15: {
        male: 30,
        female: 36,
      },
      16: {
        male: 30,
        female: 34,
      },
      17: {
        male: 34,
        female: 35,
      },
    },
    pushUps: {
      6: {
        male: 7,
        female: 6,
      },
      7: {
        male: 8,
        female: 8,
      },
      8: {
        male: 9,
        female: 9,
      },
      9: {
        male: 12,
        female: 12,
      },
      10: {
        male: 14,
        female: 13,
      },
      11: {
        male: 15,
        female: 11,
      },
      12: {
        male: 18,
        female: 10,
      },
      13: {
        male: 24,
        female: 11,
      },
      14: {
        male: 24,
        female: 10,
      },
      15: {
        male: 30,
        female: 15,
      },
      16: {
        male: 30,
        female: 12,
      },
      17: {
        male: 37,
        female: 16,
      },
    },
    pullUps: {
      6: {
        male: 1,
        female: 1,
      },
      7: {
        male: 1,
        female: 1,
      },
      8: {
        male: 1,
        female: 1,
      },
      9: {
        male: 2,
        female: 1,
      },
      10: {
        male: 2,
        female: 1,
      },
      11: {
        male: 2,
        female: 1,
      },
      12: {
        male: 2,
        female: 1,
      },
      13: {
        male: 3,
        female: 1,
      },
      14: {
        male: 5,
        female: 1,
      },
      15: {
        male: 6,
        female: 1,
      },
      16: {
        male: 7,
        female: 1,
      },
      17: {
        male: 8,
        female: 1,
      },
    },
    armHang: {
      6: {
        male: 6,
        female: 5,
      },
      7: {
        male: 8,
        female: 6,
      },
      8: {
        male: 10,
        female: 8,
      },
      9: {
        male: 10,
        female: 8,
      },
      10: {
        male: 12,
        female: 8,
      },
      11: {
        male: 11,
        female: 7,
      },
      12: {
        male: 12,
        female: 7,
      },
      13: {
        male: 14,
        female: 8,
      },
      14: {
        male: 20,
        female: 9,
      },
      15: {
        male: 28,
        female: 7,
      },
      16: {
        male: 28,
        female: 7,
      },
      17: {
        male: 30,
        female: 7,
      },
    },
    mile: {
      6: {
        male: 756,
        female: 792,
      },
      7: {
        male: 700,
        female: 776,
      },
      8: {
        male: 665,
        female: 750,
      },
      9: {
        male: 630,
        female: 712,
      },
      10: {
        male: 588,
        female: 682,
      },
      11: {
        male: 560,
        female: 677,
      },
      12: {
        male: 520,
        female: 665,
      },
      13: {
        male: 486,
        female: 623,
      },
      14: {
        male: 464,
        female: 606,
      },
      15: {
        male: 450,
        female: 598,
      },
      16: {
        male: 430,
        female: 631,
      },
      17: {
        male: 424,
        female: 622,
      },
    },
    shuttle: {
      6: {
        male: 13.3,
        female: 13.8,
      },
      7: {
        male: 12.8,
        female: 13.2,
      },
      8: {
        male: 12.2,
        female: 12.9,
      },
      9: {
        male: 11.9,
        female: 12.5,
      },
      10: {
        male: 11.5,
        female: 12.1,
      },
      11: {
        male: 11.1,
        female: 11.5,
      },
      12: {
        male: 10.6,
        female: 11.3,
      },
      13: {
        male: 10.2,
        female: 11.1,
      },
      14: {
        male: 9.9,
        female: 11.2,
      },
      15: {
        male: 9.7,
        female: 11,
      },
      16: {
        male: 9.4,
        female: 10.9,
      },
      17: {
        male: 9.4,
        female: 11,
      },
    },
  },
};

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

const getThreshold = (type, activity, student) => {
  let age = student.age;

  if (age > 17) {
    age = 17;
  } else if (age < 6) {
    age = 6;
  }

  return standards[type][activity][age][student.isMale ? "male" : "female"];
};

const achievedAward = (type, student) => {
  const curlUps = getHighestScore(student?.curlUps) >= getThreshold(type, "curlUps", student);
  const sitAndReach =
    getHighestScore(student?.sitAndReach) >= getThreshold(type, "sitAndReach", student);
  const pushUps = getHighestScore(student?.pushUps) >= getThreshold(type, "pushUps", student);
  const pullUps = getHighestScore(student?.pullUps) >= getThreshold(type, "pullUps", student);
  const mile = getLowestScore(student?.mile) <= getThreshold(type, "mile", student);
  const shuttle = getLowestScore(student?.shuttle) <= getThreshold(type, "shuttle", student);

  if (type == "presidential") {
    return curlUps && sitAndReach && (pushUps || pullUps) && mile && shuttle;
  }

  const armHang = getHighestScore(student?.armHang) >= getThreshold("national", "pullUps", student);

  return curlUps && sitAndReach && (pushUps || pullUps || armHang) && mile && shuttle;
};

export default { getHighestScore, getLowestScore, getThreshold, achievedAward };
