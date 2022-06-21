import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

let materialsList: {
  id: number;
  title: string;
  image: string;
  description: string;
}[] = [
  {
    id: 1,
    title: 'string',
    image: 'string',
    description: 'string',
  },
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getAllMaterials(): Promise<
    { id: number; title: string; image: string; description: string }[]
  > {
    readFile()
      .then(
        (
          data: {
            id: number;
            title: string;
            image: string;
            description: string;
          }[],
        ) => {
          return (materialsList = data);
        },
      )
      .catch((err) => {
        throw new Error('Não foi possível carregar os dados');
      });

    return materialsList;
  }
}

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./src/database/mock.json', 'utf-8', (error, data) => {
      if (error) reject(error);
      if (typeof data == 'undefined') {
        resolve([]);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}
