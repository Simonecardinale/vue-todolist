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
        moveToTrash: function(index) {
            this.trashList.push(this.arrayList[index]);
        }
    }
});