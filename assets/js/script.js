const {createApp} = Vue

createApp({
    data(){
        return{
            images: [
                'assets/img/1.webp',
                'assets/img/2.webp',
                'assets/img/3.jpg',
                'assets/img/4.webp',
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

            // Controllo per passare dall'ultima immagine alla prima
            if(this.counter === -1) this.counter = this.images.length - 1;  // -1 perché la length dell'array è 5, ma l'indice parte da 0, quindi senza -1 non verrebbe visualizzata nessuna immagine 

            // Controllo per passare dalla prima immagine all'ultima
            if(this.counter >= this.images.length) this.counter = 0;
        }
    }
}).mount('#app')


                