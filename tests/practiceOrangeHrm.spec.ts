import{test,expect} from '@playwright/test';

test.only('Practice Test for OrangeHRM', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Username,Password,Login Button 
    
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');  
    await page.getByRole('button', {name: 'Login'}).click();
    
    //Verify Dashboard is visible
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();

    //click on PIM
    await page.getByRole('link',{name:'PIM'}).click();
    await expect(page.getByRole('heading',{name:'PIM',exact:true})).toBeVisible();

    //Click on Add button
    await page.getByRole('button',{name:' Add '}).click();
    await expect(page.getByText('Employee Full Name')).toBeVisible();

    //Enter First Name and Last Name
    await page.getByPlaceholder('First Name').fill('Sandip');
    await page.getByPlaceholder('Last Name').fill('Kurhe');

    //Employee ID
    const employeeId = page.locator('.oxd-input-group')
    .filter({has: page.locator('label',{hasText:'Employee Id'})})
    .locator('.oxd-input.oxd-input--active');

    const employeeIdValue = await employeeId.inputValue();
    await employeeId.fill(employeeIdValue);
    
    console.log('Generated Employee ID:', employeeIdValue);

    await page.getByRole('button',{name:' Save '}).click();
    
    //Verify the personal detail page is visible
    await expect(page.getByRole('heading',{name:'Personal Details',exact:true})).toBeVisible();

    //OtherID
    const OtherID = page.locator('.oxd-input-group')
    .filter({has: page.locator('label',({hasText:'Other Id'}))})
    .locator('.oxd-input.oxd-input--active');
    await OtherID.fill('1717');

    //License Expiry Date
    const LicenseNumber = page.locator('.oxd-input-group')
    .filter({has: page.locator('label',({hasText:"Driver's License Number"}))})
    .locator('.oxd-input.oxd-input--active');
    await LicenseNumber.fill('2095');

    //License Expiry Date
    const LicenseExpiryDate = page.locator('.oxd-input-group')
    .filter({has: page.locator('label',({hasText:"License Expiry Date"}))})
    .getByPlaceholder('yyyy-dd-mm');
    await LicenseExpiryDate.fill('2025-31-12'); 

    //Nationality Dropdown
    const NationalityDropdown= page.locator('.oxd-input-group')
    .filter({has: page.locator('label',({hasText:'Nationality'}))})
    .locator('.oxd-select-wrapper');

    await NationalityDropdown.click();
    await NationalityDropdown.getByRole('option',{name:'Indian'}).click();

    //Materal Status dropdown
    const MaritalStatusDropdown= page.locator('.oxd-input-group')
    .filter({has: page.locator('label',({hasText:'Marital Status'}))})
    .locator('.oxd-select-wrapper');

    await MaritalStatusDropdown.click();
    await MaritalStatusDropdown.getByRole('option',({name:'Single'})).click();

    //Date of Birth
    const DateofBirth = page.locator('.oxd-input-group')
    .filter({has: page.locator('label',({hasText:'Date of Birth'}))})
    .getByPlaceholder('yyyy-dd-mm');

    await DateofBirth.click();
    await DateofBirth.fill('2002-07-12');

    //Gender Radio Button
    await page.locator("input[value='1']").check();

    //Milary Service 
    await page.locator('.oxd-input-group')
    .filter({has:page.locator('label',({hasText:'Military Service'}))})
    .locator('.oxd-input.oxd-input--active').fill('No');

    //Smokar

    await page.locator('.oxd-input-group')
    .filter({has: page.locator('label',({hasText:'Smoker'}))})
    .locator('.oxd-checkbox-wrapper').click();

    //Save button click
    await page.getByRole('button',{name:'Save'}).click()
;    //await page.getByText('Yes').click();

});