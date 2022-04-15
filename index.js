const puppeteer = require('puppeteer-extra')

// stealth plugin
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// IIFE (Immediately Invoked Function Expression)
;(async () => {
  const browser = await puppeteer.launch({
		args: ["--no-sandbox"],
  	headless: true
  })

// create new tab & set HTTP headers
	const page = await browser.newPage()
	await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9'
		});
		await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36');
// navigate to faucet
	await page.goto('https://faucet.polygon.technology')
	await page.waitForTimeout(2000)
// enter wallet and submit request
	await page.type('input[type=text]', '0xe1018079D3d90a2914eb78Ed0833c22927AE87d2');
	await page.$eval('button[type=button]', form => form.click() );
	await page.waitForTimeout(2000)
	await page.$eval('#app > div > div > div.index > div > div > div:nth-child(1) > div > div.section.position-absolute > div.modal.show > div > div > div:nth-child(2) > div.ps-t-12 > div > button', form => form.click() )
	await page.waitForTimeout(2000)
// close tab	
	await browser.close();
	
})()
