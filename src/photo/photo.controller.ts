import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(
    public service: PhotoService
  ) {}

  @Get()
  add() {
    this.service.addPhoto({
      name: 'name string',
      description: 'description string',
      filename: 'filename string',
      views: 1,
      isPublished: true,
    });

    return 'added';
  }
}
