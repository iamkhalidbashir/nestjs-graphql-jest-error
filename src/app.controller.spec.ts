import { Test, TestingModule } from '@nestjs/testing';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppResolver],
      providers: [AppService],
    }).compile();
  });

  describe('getAdmins', () => {
    it('should return []', () => {
      const appController = app.get(AppResolver);
      expect(appController.getAdmins()).toBe([]);
    });
  });

  describe('getGroups', () => {
    it('should return []', () => {
      const appController = app.get(AppResolver);
      expect(appController.getGroups()).toBe([]);
    });
  });
});
