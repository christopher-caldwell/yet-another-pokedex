import puppeteer from 'puppeteer'

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://pokemondb.net/pokedex/game/sword-shield')

  await page.setViewport({ width: 1792, height: 844 })

  await page.waitForSelector('.infocard-list > .infocard:nth-child(1) > .infocard-lg-img > a > .img-sprite')
  await page.click('.infocard-list > .infocard:nth-child(1) > .infocard-lg-img > a > .img-sprite')

  await navigationPromise

  await page.waitForSelector('#main > .grid-row > .grid-col > p:nth-child(1) > em')
  await page.click('#main > .grid-row > .grid-col > p:nth-child(1) > em')

  await page.waitForSelector('#main > .grid-row > .grid-col > p:nth-child(1) > em')
  await page.click('#main > .grid-row > .grid-col > p:nth-child(1) > em')

  await navigationPromise
}

main()
