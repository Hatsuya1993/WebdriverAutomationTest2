export class HomePagePOM {

    private readonly title : WebdriverIO.Element
    private readonly searchInput : WebdriverIO.Element
    private readonly topDeals : WebdriverIO.Element
    private readonly flightBooking : WebdriverIO.Element
    private readonly cart : WebdriverIO.Element
    private readonly products : WebdriverIO.Element
    private readonly product : WebdriverIO.ElementArray
    private readonly productTitle : WebdriverIO.ElementArray

    constructor(private readonly $main : WebdriverIO.Element = $("body")) {

        this.title = this.$main.$(".brand.greenLogo")
        this.searchInput = this.$main.$("[type='search']")
        this.topDeals = this.$main.$("//a[text()='Top Deals']")
        this.flightBooking = this.$main.$("//a[text()='Flight Booking']")
        this.cart = this.$main.$("[alt='Cart']")
        this.products = this.$main.$(".products")
        this.product = this.$main.$$(".products .product")
        this.productTitle = this.$main.$$(".products .product .product-name")

    }

    navigateTo() : string {
        return browser.url("https://rahulshettyacademy.com/seleniumPractise/#/")
    }

    getTitle() : WebdriverIO.Element {
        return this.title
    }

    getSearchInput() : WebdriverIO.Element {
        return this.searchInput
    }

    getTopDeals() : WebdriverIO.Element {
        return this.topDeals
    }

    getFlightBooking() : WebdriverIO.Element {
        return this.flightBooking
    }

    getCart() : WebdriverIO.Element {
        return this.cart
    }

    getProducts() : WebdriverIO.Element {
        return this.products
    }

    getProduct() : WebdriverIO.ElementArray {
        return this.product
    }

    getProductTitle() : WebdriverIO.ElementArray {
        return this.productTitle
    }

    async checkEachItemTitle(data: Array<string>, title: WebdriverIO.ElementArray) : Promise<boolean>{
        for(let i = 0; i < title.length; i++){
            if(!data.includes(await title[i].getText())){
                return false
            }
        }
        return true
    }
}