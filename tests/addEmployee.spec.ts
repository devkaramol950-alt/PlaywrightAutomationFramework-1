import {test,expect} from '@playwright/test';
import { PageManager } from '../Pages/pageManager';
import { Helper } from '../helper';

test('should add a new employee successfully', async ({page}) => {
    const pm = new PageManager(page);

    await pm.loginPage.gotoLoginPage();
    await pm.loginPage.Login('admin','admin123');

    await expect(pm.dashboardPage.dashboardHeading).toBeVisible();

    const userData = await pm.helper.generateUserData();
    console.log(userData);

   await pm.pimPage.addEmployee(userData.firstName, userData.lastName);

    await expect(pm.pimPage.personalDetailsHeading).toBeVisible();

   await pm.pimPage.addEmployee(userData.firstName, userData.middleName);
    
});