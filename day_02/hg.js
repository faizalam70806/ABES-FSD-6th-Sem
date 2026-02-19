import fs from *fs;
const makeDirSync = {dir} =>{
try{
const dirdata = fs.readdirSync dir;
console.log(dirData);

}
} catch(error){
    console.log("unable to read dir");
}

}
readDirSync