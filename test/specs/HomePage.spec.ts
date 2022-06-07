import {HomePagePOM} from "../pageObjects/HomePagePOM"
import { expect } from 'chai'

describe('Home Page Test', () => { 

    let homePagePOM : HomePagePOM

    beforeEach( async () => {
        homePagePOM = new HomePagePOM()
        homePagePOM.navigateTo()
    })

    it('Check the url is correct', async () => {
        expect(await browser.getUrl()).to.contain("rahulshettyacademy.com/seleniumPractise")
    })

    it('Check the title is displayed', async () => {
        expect(await homePagePOM.getTitle().isDisplayed()).to.be.true
    })

    it('Check the title is displayed correctly', async () => {
        expect(await homePagePOM.getTitle().getText()).to.equal("GREENKART")
    })

    it('Check the search input is displayed', async () => {
        expect(await homePagePOM.getSearchInput().isDisplayed()).to.be.true
    })

    it('Check the top deals is displayed', async () => {
        expect(await homePagePOM.getTopDeals().isDisplayed()).to.be.true
    })

    it('Check the top deals is displayed correctly', async () => {
        expect(await homePagePOM.getTopDeals().getText()).to.equal("Top Deals")
    })

    it('Check the flight booking is displayed', async () => {
        expect(await homePagePOM.getFlightBooking().isDisplayed()).to.be.true
    })

    it('Check the flight booking is displayed correctly', async () => {
        expect(await homePagePOM.getFlightBooking().getText()).to.equal("Flight Booking")
    })

    it('Check the cart is displayed', async () => {
        expect(await homePagePOM.getCart().isDisplayed()).to.be.true
    })

    it('Check the products is displayed', async () => {
        expect(await homePagePOM.getProducts().isDisplayed()).to.be.true
    })
    
    it('Check the number of products to be 30', async () => {
        expect(await homePagePOM.getProduct().length).to.equal(30)
    })

    it('Check all the title is correct', async () => {
        let data : Array<string> = ["Brocolli - 1 Kg", "Cauliflower - 1 Kg", "Cucumber - 1 Kg", "Beetroot - 1 Kg", "Carrot - 1 Kg", "Tomato - 1 Kg", "Beans - 1 Kg", "Brinjal - 1 Kg", "Capsicum", "Mushroom - 1 Kg", "Potato - 1 Kg", "Pumpkin - 1 Kg", "Corn - 1 Kg", "Onion - 1 Kg", "Apple - 1 Kg", "Banana - 1 Kg", "Grapes - 1 Kg", "Mango - 1 Kg", "Musk Melon - 1 Kg", "Orange - 1 Kg", "Pears - 1 Kg", "Pomegranate - 1 Kg", "Raspberry - 1/4 Kg", "Strawberry - 1/4 Kg", "Water Melon - 1 Kg", "Almonds - 1/4 Kg", "Pista - 1/4 Kg", "Nuts Mixture - 1 Kg", "Cashews - 1 Kg", "Walnuts - 1/4 Kg"]
        let results : boolean = await homePagePOM.checkEachItemTitle(data, homePagePOM.getProductTitle())
        expect(results).to.be.true
    })
})