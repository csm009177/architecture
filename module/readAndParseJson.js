import fs, {readFileSync} from 'fs';
import path from 'path';

export function readAndParseJson(path) {
  const jsonData = fs.readFileSync(path, 'utf8');
  const parsedData = JSON.parse(jsonData);
  
  return parsedData, console.log(`parsedData${parsedData}`);
}