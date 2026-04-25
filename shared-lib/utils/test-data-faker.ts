import { faker } from '@faker-js/faker';

export const generateUser = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  emailId: `user_${Date.now()}@test.com`,
  phoneNo: `9${faker.string.numeric(9)}`,
  occupation: 'Engineer',
  password: 'Test@1234',
  gender: 'male'
});

