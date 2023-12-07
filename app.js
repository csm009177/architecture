/** 
 * 이 모듈은 팀 빌딩 프로젝트에서 학생 목록을 셔플하고 , 팀을 생성하는 역할을 합니다
 * shuffleArray, readAndParseJson, createTeams 모듈에 의존합니다
 * 
 * @module shuffle
 * @requires fs
 * @requires path
 * @requires ./module/shuffleArray.js
 * @requires ./module/readAndParseJson.js
 * @requires ./module/createTeams.js
*/

// built in module
import fs, {readFileSync} from 'fs';
import path from 'path';

// custom module
import shuffleArray from './module/shuffleArray.js';
import readAndParseJson from './module/readAndParseJson.js'
import createTeams from './module/createTeams.js'

/**
 * 학생 목록을 셔플하고, 팀을 생성합니다
 * 
 * @type {Array}
 * @exports teams
 */

<<<<<<< HEAD
console.log(studentList.length);
function shuffleArray(array) {
  for(let i = array.length - 1; i>0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 배열 셔플
=======
const studentList = readAndParseJson('data/studentList.json');
>>>>>>> 4e3ca52122f046216506769cbe5bde9348106224
const shuffledArray = shuffleArray(studentList);
const teams = createTeams(shuffleArray, true);

console.log(studentList.length);   // readAndParseJson 함수가 반환한 배열의 길이 
console.log(shuffledArray);        // shuffleArray 함수가 반환한 배열
console.log(shuffledArray.length); // shuffleArray 함수가 반환한 배열의 길이
console.log(teams); // createTeams 함수가 반환한 배열

export default teams; // teams 배열을 내보냅니다
