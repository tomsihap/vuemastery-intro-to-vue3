const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Hello',
            description: 'Good stuff',
            selectedVariant: 0,
            moreLink: 'http://www.example.com',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 50,
                    onSale: false
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                    onSale: true
                }
            ],
            sizes: [38, 39, 40, 41, 42, 43, 44],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart++;
            this.variants[this.selectedVariant].quantity--;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale
        }

    }
})