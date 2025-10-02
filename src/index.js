const fs=require("fs");
fs.writeFileSync("./test.txt","hey there i am noman sheikh:");

fs.writeFile("./src/test2.txt","hey i am in asynchronous  operation ",(err)=>{ })



try {
  const result = fs.readFileSync("./src/test1.txt", "utf-8");
  console.log("File content:", result);
} catch (err) {
  console.error("❌ Error reading file:", err.message);
}

fs.readFile("./src/test2.txt","utf-8",(err,res)=>{
    if(err){
        console.log("error is:",err);
    }else{
        console.log("result is:",res);
    }
})


fs.appendFileSync("./src/test1.txt","hey i am appeding wioth u\n");

// fs.unlinkSync("./test1.txt");
fs.rename('test.txt', 'newExample.txt', (err) => {
  if (err) throw err;
  console.log('File renamed ✅');
});

