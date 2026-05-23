import{test ,expect} from '@playwright/test';
import {LoginPage} from '../Pages/loginPage';
import testData from '../testdata.json';


test('should login successfully and display dashboard', async ({page}) => {
const loginPage = new LoginPage(page);  
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await loginPage.Login(testData.username, testData.password);

await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

});