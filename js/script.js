// axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
// .then((response) =>{
//     for (let i = 0; i <= 10; i++) {
//         console.log(response.data.response); 
//     }
// });


for (let i = 0; i <= 10; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) =>{
     console.log(response.data.response);
    }); 
};