import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Connection from 'mysql2/typings/mysql/lib/Connection';
import { ConnectConfig } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
constructor(private readonly connection: Connection){}

}
