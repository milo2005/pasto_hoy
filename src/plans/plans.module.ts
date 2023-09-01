import { Module } from '@nestjs/common';
import { PlansService } from './services/plans.service';
import { PlansController } from './controllers/plans.controller';

@Module({
  providers: [PlansService],
  controllers: [PlansController]
})
export class PlansModule {}
