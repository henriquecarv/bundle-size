import { exec } from 'child_process';

export default (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};
