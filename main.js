const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Good stuff',
            image: './assets/images/socks_green.jpg',
            moreLink: 'http://www.example.com',
            inStock: true,
            inventory: 9,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 2234,
                    color: 'green'
                },
                {
                    id: 2235,
                    color: 'blue'
                }
            ],
            sizes: [38, 39, 40, 41, 42, 43, 44]
        }
    }
})