import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { join } from 'path';
import { IHistoryBarDataModel } from '../../shared/history-data.model';

@Controller('base')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data')
  getHello(): Promise<Array<any>> {
    return new Promise((resolve) => {
      const result: Array<IHistoryBarDataModel> = [];
      const path = join(__dirname, '..', 'historical_data', 'BTC-USD.csv');
      fs.createReadStream(path)
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => {
          resolve(result);
        });
    });
  }
}
