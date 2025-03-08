import { randInt } from "ts-random";

function solveMathHomework() {
  let answer = 0;
  switch (randInt(1, 4)) {
    case 1:
      answer = 2 + 3;
      break;
    case 2:
      answer = 5 * 2;
      break;
    case 3:
      answer = 7 - 3;
      break;
    case 4:
      answer = 8 / 2;
      break;
  }
  return answer;
}