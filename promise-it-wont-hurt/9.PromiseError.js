require('es6-promise')
parsedPromised = function(json){
    try{
        return Promise.resolve(JSON.parse(json))
    }catch(e){
        return Promise.reject(e)
    }
}

function onReject(error){
    return console.log(error.message)
}

parsedPromised(process.argv[2]).then(console.log).catch(onReject)