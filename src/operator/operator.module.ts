import { Module } from '@nestjs/common';
import { OperatorController } from './controllers/operator.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Operator, OperatorSchema } from './data/schemas/operator.schema';
import { OperatorDao } from './data/daos/operator.dao';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Operator.name, schema: OperatorSchema }])
  ],
  controllers: [OperatorController],
  providers: [ OperatorDao ],
  exports: [ OperatorDao ]
})
export class OperatorModule {}
