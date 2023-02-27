/* 
 * On-click functions for KVM
 */

// Button to turn on the KVM
document.getElementById("button").onclick = function() {
    document.getElementById("on").innerHTML = "KVM On"
}

// Button to turn off the KVM
document.getElementById("button").onclick = function() {
    document.getElementById("off").innerHTML = "KVM Off"
}

// Button to access KVM mouse
document.getElementById("button").onclick = function() {
    document.getElementById("mouse").innerHTML = "Mouse"
}

// Button to access KVM keyboard
document.getElementById("button").onclick = function() {
    document.getElementById("keyboard").innerHTML = "Keyboard"
}