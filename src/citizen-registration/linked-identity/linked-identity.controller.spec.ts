import { Test, TestingModule } from '@nestjs/testing';
import { LinkedIdentityController } from './linked-identity.controller';
import { LinkedIdentityService } from './linked-identity.service';

describe('LinkedIdentityController', () => {
  let controller: LinkedIdentityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedIdentityController],
      providers: [LinkedIdentityService],
    }).compile();

    controller = module.get<LinkedIdentityController>(LinkedIdentityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
