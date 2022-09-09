import 'tsconfig-paths/register';
import { AppResolver } from '../src/app.resolver';

const setup = async () => {
  // Comment below (console.log) line and the tests will pass
  // It failes when a custom Graphql ObjectType()-DTO (AdminDto) is used in another ObjectType()-DTO (GroupDto) like shown in src/dtos.ts
  // But I dont know why it get passed without globalSetup option?
  console.log(AppResolver);
};

export default setup;
