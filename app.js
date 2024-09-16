Vue.createApp({
    data() {
        return {
            message: '',
            input: '',
            messages: []
        }
    },
    methods: {
        addElement() {
            if (this.input === '') {
                return;
            }
            this.messages.push(this.input);
            this.input = '';
        }
    }
}).mount('#app');