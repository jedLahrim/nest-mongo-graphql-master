import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MedicationsModule } from './medications/medications.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      // typePaths: ['./src/**/*.graphql'],
      autoSchemaFile: true,
      path: '/api/v2',
    }),
    MongooseModule.forRoot('mongodb://dbJolixUserName:dbPassword@localhost:27017/admin'),
    MedicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
