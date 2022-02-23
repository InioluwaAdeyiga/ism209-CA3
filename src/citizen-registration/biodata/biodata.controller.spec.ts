import { Test, TestingModule } from '@nestjs/testing';
import { BiodataController } from './biodata.controller';
import { BiodataService } from './biodata.service';

describe('BiodataController', () => {
  let controller: BiodataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiodataController],
      providers: [BiodataService],
    }).compile();

    controller = module.get<BiodataController>(BiodataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
