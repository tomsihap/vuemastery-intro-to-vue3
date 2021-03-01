app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :alt="description" :class="[!inStock ? 'out-of-stock-img' : '']">
                </div>
                <div class="product-info">
                    <h1>{{ title }}<span v-show="onSale">&nbsp;- on sale !</span></h1>
                    <p v-if="inStock > 10">In stock - {{inStock}} items left</p>
                    <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
                    <p v-else>Out of stock</p>

                    <p>Shipping: {{ shipping }}</p>
                    <p>
                        {{ description }}<br>
                        <a :href="moreLink">More here</a>
                    </p>
                    <product-details :details="details"></product-details>
                    <div
                        v-for="variant, i in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(i)"
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }">
                    </div>
                    <div>Available sizes:
                        <span v-for="size, i in sizes">
                            {{ size }}<span v-if="i != Object.keys(sizes).length -1">,&nbsp;</span>
                        </span>
                    </div>

                    <button
                        class="button"
                        :class="{disabledButton: !inStock}"
                        @click="addToCart"
                        :disabled="!inStock">
                            Add to Cart
                    </button>
                </div>
            </div>
        </div>`,
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
        },
        shipping() {
            return this.premium ? 'Free' : 2.99;
        }

    }
})