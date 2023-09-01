import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { PlansModule } from './plans/plans.module';
import { PlateRestrictionsModule } from './plate-restrictions/plate-restrictions.module';
import { OperatorModule } from './operator/operator.module';
import { ConfigModule } from '@nestjs/config';
import { EnvModule } from './env/env.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvService } from './env/env.service';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    EnvModule,
    MongooseModule.forRootAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: async (env) => ({ uri: env.mongodb, useNewUrlParser: true })
    }),
    AuthModule, 
    EventsModule, 
    PlansModule, 
    PlateRestrictionsModule, 
    OperatorModule, 
    ConfigModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
