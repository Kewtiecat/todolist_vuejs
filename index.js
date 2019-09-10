let app = new Vue ({
    el: '#app',
    data: {
        tasks: [
        ],
        tmp: ""
    },
    
    methods: {
        addList: function(){
            this.tasks.push({text: this.tmp})
            this.tmp=""
        },
        deleteList: function(index){
            this.tasks.splice(index, 1)
        }
    }
})