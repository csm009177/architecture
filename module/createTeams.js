import { shuffleArray } from "./shuffleArray.js";
import path from 'path';

export function createTeams(array) {
  const shuffled = shuffleArray(array);
  const teams = [
    shuffled.slice(0,4),
    shuffled.slice(4,8),
    shuffled.slice(8,12),
    shuffled.slice(12)
  ];

  // 각 팀의 첫 번째 원소에 '팀장-' 추가
  teams.forEach(team =>{
    if(team.length>0) {
      team[0] = '팀장-' + team[0];
    }
  });
  return teams;
}