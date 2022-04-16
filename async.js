let promise=new Promise((res,rej)=>{
    setTimeout(()=>res(5),1000);
});
async function someFun(){
    console.log("a");
}
promise.then((data)=>{
    console.log("then:"+data);
}).catch((error)=>{
    console.log("error occured"+error);
})