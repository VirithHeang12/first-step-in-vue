const app = Vue.createApp({
    data(){
        return {
            input: '',
            messages: [],
            randomNumber: 0,
            box1Active: false,
            isActive: false,
            error: false,
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
        toggleError() {
            this.error = !this.error;
        },
    },
    computed: {
        count() {
            return this.messages.length;
        },
        classObject() {
            return {
                active: this.isActive && this.error,
                'text-danger': this.error || this.isActive
            }
        }
    },
    watch: {
        count(newValue, oldValue) {
            console.log('count changed', newValue, oldValue);
        },
        
    },
});


app.mount('#app');