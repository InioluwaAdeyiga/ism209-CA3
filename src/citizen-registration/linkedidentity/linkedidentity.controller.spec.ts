import { Test, TestingModule } from '@nestjs/testing';
import { LinkedidentityController } from './linkedidentity.controller';
import { LinkedidentityService } from './linkedidentity.service';

describe('LinkedidentityController', () => {
  let controller: LinkedidentityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedidentityController],
      providers: [LinkedidentityService],
    }).compile();

    controller = module.get<LinkedidentityController>(LinkedidentityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
