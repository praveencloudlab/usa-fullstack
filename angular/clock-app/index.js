let usaClock=document.querySelector("#usaClock")
let indianClock=document.querySelector("#indianClock")
let dubaiClock=document.querySelector("#dubaiClock")


function jsClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:props});
    let ui=`
    <div>
        <span> ${props} <span>
        <div>
           <p> ${time} </p>
        </div>
    </div>
    `
    return ui;
}
setInterval(()=>{
    usaClock.innerHTML=jsClock('america/new_york');
    indianClock.innerHTML=jsClock('asia/kolkata')
    dubaiClock.innerHTML=jsClock('asia/dubai')
},1000)

