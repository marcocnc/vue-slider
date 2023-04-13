const {createApp} = Vue

createApp({
    data(){
        return{
            images: [
                'assets/img/1.webp',
                'assets/img/2.webp',
                'assets/img/3.jpg',
                'assets/img/4.jpg',
                'assets/img/5.jpg'
            ],
            counter: 0,
            isNext : true
        }
    },

    methods:{
        increaseDecrease(isNext){
            if(isNext) this.counter++;
            else this.counter--;

            
        }
    }
}).mount('#app')


                