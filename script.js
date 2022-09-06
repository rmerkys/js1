var kaina = prompt("Įveskite prekės kainą")

// if(isNaN(kaina)) {
//     var kaina = prompt("Įveskite prekės kainą")
// } else {
//     var PVM = (kaina * 0.21)/1.21
//     var kainaBePVM = kaina - PVM

//     console.log("Prekės kaina su PVM: " + kaina + "€")
//     console.log("PVM: " + PVM.toFixed(2) + "€")
//     console.log("Prekės kaina su PVM: " + kainaBePVM.toFixed(2) + "€")
// }

while(isNaN(kaina)){
    var kaina = prompt("Įveskite prekės kainą")
}

    var PVM = (kaina * 0.21)/1.21
    var kainaBePVM = kaina - PVM

    console.log("Prekės kaina su PVM: " + kaina + "€")
    console.log("PVM: " + PVM.toFixed(2) + "€")
    console.log("Prekės kaina su PVM: " + kainaBePVM.toFixed(2) + "€")