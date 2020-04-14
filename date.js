module.exports.getDate = function(){
    let today = new Date();

    let options = {
        day: "numeric",
        weekday: "long",
        year: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        seconds: "numeric"
    }
    
    return today.toLocaleDateString("hi-IN", options);
}

module.exports.getDay = function(){
    let today = new Date();

    let options = {
        weekday: "long",
    }
    
    return today.toLocaleDateString("hi-IN", options);
}