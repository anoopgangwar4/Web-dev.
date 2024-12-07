



let watch = ()=>{
    let date = new Date()

    let updateDate = date.toDateString()

    console.log(updateDate)

    let hour = date.getHours()
    
    let minutes = date.getMinutes()
    
    let seconds = date.getSeconds()
    
    let updateTime = `${hour} : ${minutes} : ${seconds}`
    

    let time = document.getElementById("time")
    let datee = document.getElementById("DATE")
    time.innerHTML = updateTime
    datee.innerHTML = updateDate

}

setInterval(()=>{
    watch()
},1000)