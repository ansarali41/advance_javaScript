// false(0,null,undefined,"",NaN,false)
// true ("0",' ',[], true)
let name = 0;
if (name || name == 0) {
    console.log("true");        
} else {
    console.log("false");
}