/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/



//  Define UI Variables  here 
const href = document.querySelector("body > div > div > div:nth-child(2) > a:nth-child(1) > span");
const protocol = document.querySelector("body > div > div > div:nth-child(2) > a:nth-child(2) > span");
const host = document.querySelector("body > div > div > div:nth-child(2) > a:nth-child(3) > span");
const port = document.querySelector("body > div > div > div:nth-child(2) > a:nth-child(4) > span");
const hostName = document.querySelector("body > div > div > div:nth-child(2) > a:nth-child(5) > span");

// browser
const appName = document.querySelector("body > div > div > div:nth-child(4) > a:nth-child(1) > span");
const appVersion = document.querySelector("body > div > div > div:nth-child(4) > a:nth-child(2) > span");
const platForm = document.querySelector("body > div > div > div:nth-child(4) > a:nth-child(3) > span");
const language = document.querySelector("body > div > div > div:nth-child(4) > a:nth-child(4) > span");
const cookieEnabled = document.querySelector("body > div > div > div:nth-child(4) > a:nth-child(5) > span");


// screen

const height = document.querySelector("body > div > div > div:nth-child(6) > a:nth-child(1) > span");
const width = document.querySelector("body > div > div > div:nth-child(6) > a:nth-child(2) > span");
const pixelDepth = document.querySelector("body > div > div > div:nth-child(6) > a:nth-child(3) > span");

// browser history
const length = document.querySelector("body > div > div > div:nth-child(8) > a:nth-child(1) > span");
const state = document.querySelector("body > div > div > div:nth-child(8) > a:nth-child(2) > span");





// Display the BOM Information on the innerHTML of the elements

href.innerHTML = window.location.href
protocol.innerHTML = window.location.protocol
host.innerHTML = window.location.host
port.innerHTML = window.location.port
hostName.innerHTML = window.location.hostname
// browser
appName.innerHTML = window.navigator.appName
appVersion.innerHTML = window.navigator.appVersion
platForm.innerHTML = window.navigator.platform
language.innerHTML = window.navigator.language
cookieEnabled.innerHTML = window.navigator.cookieEnabled
// screen
height.innerHTML = window.screen.height
width.innerHTML = window.screen.width
pixelDepth.innerHTML = window.screen.pixelDepth
//browser history
length.innerHTML = window.history.length
state.innerHTML = window.history.state