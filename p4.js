//file system


const fs = require('fs');
// // fs.readFile('./docs/iso1.txt',(err,data) => {
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log(data.toString());

// // });

// fs.writeFile('./docs/iso2.txt','hello,again from isocrates',() =>{
//     console.log('file written successfully');
// });

//if(!fs.existsSync("./assert")){

// fs.mkdir('./assert',err =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// })
// }
// else{
//     console.log('folder already exists');
// }

// if(!fs.existsSync("./assert")){

//     fs.rmdir('./assert',err =>{
//          if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
//      }
//      else{
//         fs.rmdir('./assert',err =>{
//             if(err){
//                console.log(err);
//            }
//            console.log('folder deleted');
//         });
//     }

    if(fs.existsSync('./docs/iso2.txt')){
        fs.unlink('./docs/iso2.txt',err =>{
            if(err){
                console.log(err);
            }
            console.log('file deleted');
            });
        };
    
     
