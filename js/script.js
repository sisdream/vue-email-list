// const { createApp } = Vue;
// const app = createApp({
//     data: {
//       emails : [],
//     },
//     mounted(){
//         for (let i = 0; i < 10; i++) {
//             axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
//             .then((response) =>{
//                 console.log(response.data.response);
//                 // const email = response.data.response;
//                 // this.emails.push(response.data);
//             }); 
//         };
//     }
// });
// app.mount('#app');


const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            emails : [],
        };
    },
    methods: {
        
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((response) =>{
                const email = response.data.response;
                console.log(email);
                this.emails.push(email);
            });
        }
    },
});

app.mount('#app');
