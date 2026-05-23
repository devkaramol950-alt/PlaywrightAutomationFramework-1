import{Page} from '@playwright/test';

export class PimPage {

    readonly page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    get pimLink(){
        return this.page.getByRole('link', {name:'PIM'});
    }

    get addButton(){
        return this.page.getByRole('button', {name:'Add'});
    }

    get employeeFullNameText(){
        return this.page.getByText('Employee Full Name');
    }
   
    get firstName(){
        return this.page.getByPlaceholder('First Name');
    }

    get lastName(){
        return this.page.getByPlaceholder('Last Name');
    }

    get saveButton(){
        return this.page.getByRole('button', {name:'Save'});
    }
    
    get personalDetailsHeading(){
        return this.page.getByRole('heading', {name:'Personal Details'});
    }

    async addEmployee(firstName: string, lastName: string) {
        await this.pimLink.click();
        await this.addButton.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.saveButton.click();
    }
}
