import {faker} from '@faker-js/faker';

export class Helper {
    async generateUserData(){
        const firstNames = faker.person.firstName();
        const lastNames = faker.person.lastName();
        const middleNames = faker.person.middleName();

        return {
            firstName : firstNames,
            lastName : lastNames,
            middleName : middleNames
        }
    }
}