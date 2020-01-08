import { Module } from "@nestjs/common";
import { AngularUniversalModule } from "@nestjs/ng-universal";
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfig } from "./database.config";
import { PhotoModule } from "./photo/photo.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), "dist/browser"),
      bundle: require("../server/main"),
      liveReload: true
    }),
    TypeOrmModule.forRoot(DatabaseConfig),
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class ApplicationModule {}
