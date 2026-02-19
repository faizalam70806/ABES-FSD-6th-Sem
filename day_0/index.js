const mypromise = new Promise((resolve, reject) => {
    let age=14;
    if (age>=18) {
        resolve("Eligible for vote")
    }
    else{
        reject("Not eligible")
    }
}
);
// mypromise.then((mssg)=>{console.log(mssg)});
// mypromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using async/await :
const f1 = async() => {
    try {
        const msg = await mypromise;
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
};

f1();