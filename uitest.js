const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');


async function performActions() {
    const profilePath = 'C:/Users/user_name/AppData/Roaming/Mozilla/Firefox/Profiles/vw1vg62j.automate';
    const options = new firefox.Options().setProfile(profilePath);
    const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();

        try {
            
            await driver.get('https://console.brahma.fi');
       
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const connectWalletButton = await driver.findElement(By.xpath('/html/body/div/div/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div'));

          
            await connectWalletButton.click();
    
          console.log("success");

          await new Promise((resolve) => setTimeout(resolve, 2000));
          const InjectButton = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div/button/div/div'));
          await InjectButton.click();
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const windowHandles = await driver.getAllWindowHandles();
    
        console.log("Total window number:", windowHandles.length);
        await driver.switchTo().window(windowHandles[1])
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await driver.findElement(By.id("password")).sendKeys("Qwerty@123");
     

        const unlock = await driver.findElement(By.css('button[data-testid="unlock-submit"]'));
        await unlock.click();
        console.log("unlocked");
        // data-testid="page-container-footer-next
        const nextButton = await driver.wait(until.elementLocated(By.css('[data-testid="page-container-footer-next"]')), 3000);


        await nextButton.click();

        const confirmButton = await driver.wait(until.elementLocated(By.css('[data-testid="page-container-footer-next"]')), 5000);
        await confirmButton.click();
        await driver.switchTo().window(windowHandles[0])
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const windowHandlesx = await driver.getAllWindowHandles();
    
        console.log("Total window number:", windowHandlesx.length);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const sign = await driver.findElement(By.css('button.sc-13b1a077-0'));
        await sign.click();

        await new Promise((resolve) => setTimeout(resolve, 12000));
        // sc-d69b3081-6 yldwz
        const uitest = await driver.wait(until.elementLocated(By.className("sc-d69b3081-6 yldwz")), 2000);
        await uitest.click();
        console.log("inside");
       
        await driver.sleep(9000); 

       
        driver.takeScreenshot().then(function(image) {
            require('fs').writeFileSync('screenshot.png', image, 'base64');
        });
        
        const paragraphElement = await driver.findElement(By.className("sc-c2bb2821-0 iMmAbl"));
        const actualText = await paragraphElement.getText();
        console.log(actualText);
        const expectedText = "$0.00";
        if(actualText == expectedText){
            console.log(`text below UI testing says “$0.00”`);
        }
        
        } finally {
            
        }
    }
performActions();