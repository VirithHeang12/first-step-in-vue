const app = Vue.createApp({
    data(){
        return {
            input: '',
            messages: [],
            randomNumber: 0,
        }
    },
    methods: {
        addElement(number, event) {
            if (this.input === '') {
                return;
            }
            this.messages.push(this.input);
            this.input = '';
        },
    },
    computed: {
        count() {
            return this.messages.length;
        },
    },
    watch: {
        count(newValue, oldValue) {
            console.log('count changed', newValue, oldValue);
        },
    },
});


app.mount('#app');