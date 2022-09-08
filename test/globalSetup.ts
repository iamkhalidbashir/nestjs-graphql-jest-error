import 'tsconfig-paths/register';
import { AppResolver } from '../src/app.resolver';

const setup = async () => {
  // Comment below (console.log) line and the tests will pass
  // It is because of the circular dependency between the two files (Group.dto.ts and Member.dto.ts)
  // But I dont know why?
  console.log(AppResolver);
};

export default setup;
