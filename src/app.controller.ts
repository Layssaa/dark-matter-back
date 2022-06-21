import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('materials')
  async getAllMaterials(): Promise<
    {
      id: number;
      title: string;
      image: string;
      description: string;
    }[]
  > {
    const materials = await this.appService.getAllMaterials();
    return materials;
  }
}
