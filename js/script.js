var app = new Vue ( {
    el: '#app',
    data: {
        arrayList: [
            'Comprare il pane',
            'Uscire il cane',
            'Andare in palestra',
            'Aperitivo'
        ],
        trashList: [],
        utente: ""
    },
    
    methods: {
        moveToTrash(index) {
            this.trashList.push(this.arrayList[index]);
            this.arrayList.splice(index, 1)
            console.log(this.trashList);
        },
        
        addList(utente) {
            if (this.utente.length < "4") {
                alert("Devi inserire almeno 4 caratteri")
            } else if (this.arrayList.includes(this.utente)) {
                const checkList = confirm ("Attenzione!! Hai inserito due volte la stessa attività. Continuare?");
                if (checkList == true) {
                    this.arrayList.push(utente);
                    this.utente = ""
                }
            }else {
                this.arrayList.push(utente);
                this.utente = ""
            }
        },

        restoreList(index) {
            this.arrayList.push(this.trashList[index]);
            this.trashList.splice(index, 1)
        },

        totalDelete() {
            const caution = confirm("Attenzione!! Tutti gli elementi verranno eliminati definitivamente. Continuare?");
            if (caution == true) {
                this.trashList = [];
            }
        },

        rewriteList(index) {
            const rewrited = prompt("Modifica l'attività");
            this.arrayList.splice(index, 1, rewrited);
        }
    }
});
