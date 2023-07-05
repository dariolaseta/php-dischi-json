const { createApp } = Vue;

createApp({
    data() {
        return {
            api : "server.php",
            disks : [],
        }
    },
    methods: {
        getDiskInfo(){
            axios.get(this.api)
                .then(result => {
                    console.log(result);
                    this.disks = result.data;
                    console.log(this.disks);
                })
        }
    },
    created() {
        this.getDiskInfo();
    }
}).mount("#app");