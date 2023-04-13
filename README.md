Vue Slider
===
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.


## Procedimento
1. Dopo aver ricopiato il markup dell'esercizio Array Carousel, nel file script si richiama Vue;
2. Nel data, si crea un array di images che avrà le src delle varie immagini, e si crea un contatore uguale a zero;
3. Per fare in modo che si scambino le immagini, nei div dei bottoni si aggiunge la funzione del click con incremento o decremento del counter(con una funzione), a seconda del tipo del bottone, ma ora si dovrà fare il controllo;
4. Per fare il controllo si creano due condizioni, in cui se il counter è -1 (perché quando è -1 non visualizzo nessuna immagine), il counter dovrà essere uguale alla lunghezza dell'array images -1; così facendo si passa dall'ultima immagine alla prima.
Per passare dalla prima immagine all'ultima, se il counter sarà maggiore o uguale alla lunghezza dell'array images, il counter si resetta tornando a 0.
4. Dopo aver creato il markup delle thumb, per stampare le immagini si crea un ciclo for dell'array images, che prende come parametro i e come src avrà i;
5. Per visualizzare l'immagine cliccata dal thumb, all'interno del ciclo for si fa passare un altro parametro con nome a piacere (in questo caso index che corrisponde alle), e richiamando il click, il counter sarà uguale alla variabile index.
