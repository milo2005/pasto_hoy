import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserDao } from './data/daos/user.dao';
import { OperatorModule } from 'src/operator/operator.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './data/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { EnvService } from 'src/env/env.service';
import { EnvModule } from 'src/env/env.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    OperatorModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      global: true,
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: async (config: EnvService) => {
        return {
          secret: config.secret
        };
      }
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserDao,
    // Add Global Guard for all Authentication
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ]
})
export class AuthModule { }
