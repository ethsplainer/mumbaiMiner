const puppeteer = require('puppeteer')

// IIFE (Immediately Invoked Function Expression)
;(async () => {
  // launch browser instance
  const browser = await puppeteer.launch({
	args: ["--no-sandbox"],
    	headless: false
  })

  // create new browser tab
  const page = await browser.newPage()

  // open desired page
  await page.goto('https://faucet.polygon.technology/')

	// enter wallet address
	await page.waitFor('input[type=text]');
	await page.type('input[type=text]', '<wallet>', {delay: 20});

	// submit
	await page.$eval('button[type=button]', form => form.click() );

	// Confirm
	await page.waitFor(1000)
	await page.$eval('#app > div > div > div.index > div > div > div:nth-child(1) > div > div.section.position-absolute > div.modal.show > div > div > div:nth-child(2) > div.ps-t-12 > div > button', form => form.click() )
	
	// close
	await page.waitFor(1000)
	await page.$eval('#app > div > div > div.index > div > div > div:nth-child(1) > div > div.section.position-absolute > div.modal.show > div > div > div.row.top-section > a > img', form => form.click() )

	// close browser
	await browser.close();
	
})()
