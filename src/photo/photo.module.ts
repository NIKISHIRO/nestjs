import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { getRepositoryProvider } from '../shared';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    PhotoController,
  ],
  providers: [
    getRepositoryProvider('PHOTO_REPOSITORY', Photo, 'DATABASE_CONNECTION'),
    PhotoService,
  ],
})
export class PhotoModule {}
