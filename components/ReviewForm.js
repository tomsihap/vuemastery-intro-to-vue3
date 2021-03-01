app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <p>Would you recommand it ?</p>

    <div>
    <input type="radio" id="yes" name="recommand" value="yes" v-model="recommand">
    <label for="yes">Yes</label>
    </div>

    <div>
    <input type="radio" id="no" name="recommand" value="no" v-model="recommand">
    <label for="no">No</label>
    </div>

    <input class="button" type="submit" value="Submit">

    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommand: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommand === '') {
                alert('incomplete form!');
                return;
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommand: this.recommand
            }

            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null,
            this.recommand = ''
        }

    }
})