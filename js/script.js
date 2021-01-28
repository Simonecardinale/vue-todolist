var app = new Vue ( {
    el: '#app',
    data: {
        arrayList: [
            'Comprare il pane',
            'Uscire il cane',
            'Andare in palestra',
            'Aperitivo'
        ],
        trashList: []
    },

    methods: {
        moveToTrash(index) {
            this.trashList.push(this.arrayList[index]);
            this.arrayList.splice(index, 1)
            console.log(this.trashList);
        }
    }
});