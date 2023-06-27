import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameplayModule } from './gameplay/gameplay.module';

@Module({
  imports: [GameplayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
