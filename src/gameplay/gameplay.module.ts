import { Module } from '@nestjs/common';
import { GameplayController } from './gameplay.controller';
import { GameplayService } from './gameplay.service';

@Module({
  controllers: [GameplayController],
  providers: [GameplayService]
})
export class GameplayModule {}
