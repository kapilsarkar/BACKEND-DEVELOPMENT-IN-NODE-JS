//only using callbacks?
//1. write a function to download data from url?
//2. write a function to save that downloaded data in a file and return the filename?
//3. write a function to upload the file written in previous step to a new url?

//1. write a function to download data from url?

function download(url,callBack){
    //downloads content from the given url and passes the downloaded content to the callback
    console.log("Starting to Download data from",url)
    setTimeout(function down(){
     console.log("Download Completed")
     const content = "ABCDEF" //ASSUME DUMMY DOWNLOAD CONTENT
     callBack(content)
    },5000)
}



download("www.xyz.com",function process(content){
     console.log("Downloaded Data is :",content)
})

//2. write a function to save that downloaded data in a file and return the filename?

function writeFile(data,callBack){
    console.log("Started writing a file with",data)
    setTimeout(function write(){
       console.log("completed writing the data in a file")
       const fileName = "file.txt"
       callBack(fileName)
    },5000)
}

writeFile("abcdef",function process(names){
    console.log("File Written with name :",names)
})

//3. write a function to upload the file written in previous step to a new url?

function upload(url,file,callback){
    console.log("Started Uploading these:", file ,"on" ,url )
    setTimeout(function up(){
          console.log("Upload Complete")
          const response = "SUCCESS"
          callback(response)
    },2000)
}
//this is a CALL-BACK HELL PROBLEM
download("www.xyz.com",function processDownload(content){
   console.log("We are now going to process the downloaded data")
   writeFile(content,function processWrite(filename){
    console.log("we have downloaded and written the file,now will upload ")
    upload("www.upload.com",filename,function processUpload(response){
         console.log("we have uploaded the file with ",response)
    })
   })
})

//same thing can be done by promises

function promiseDownload(url){
   return new Promise(function exec(resolve,reject){
    console.log("Starting to Download data from",url)
    setTimeout(function down(){
        console.log("Downloading Complete")
        const content = "ABCDEF"
        resolve(content)
    },6000)
   })
}

function promiseWrite(data){
   return new Promise(function exec(resolve,reject){
    console.log("Started writing a file with",data)
    setTimeout(function write(){
        console.log("completed writing the data in a file")
        const fileName = "file.txt"
        resolve(fileName)
     },5000)
   })
}

function promiseUploadData(file,url){
    return new Promise(function exec(resolve,reject){
        setTimeout(function up(){
            console.log("Upload Complete")
            const response = "SUCCESS"
            resolve(response)
      },2000)
    })
}

promiseDownload("www.xyz.com")
.then(function processDownload(value){
   console.log("Downloading done with the following value:",value)
   return promiseWrite(value)

}).then(function processWrite(value){
    console.log("Data Written with the file:",value)
    return promiseUploadData(value)
}).then(function processUpload(value){
    console.log("We have Uploaded with :",value)
})