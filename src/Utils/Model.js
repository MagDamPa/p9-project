
 const param = {
    concentration: [
        0, 
        6,
        15,
        25,
        50,
        100,
        200,
        400,
        600,
        1166
    ],
    //outside param:
   n: [
        'Outside param',
        3317,
        7150,
        21790,
        49052,
        29695,
        10488,
        1066,
        955,
        'Outside param'
    ],
    A: [
        'Outside param',
        1.244,
        0.994,
        1.018,
        0.891,
        0.664,
        0.384,
        0.213,
        0.212,
        'Outside param'
    ],
    k: [
        'Outside param',
        0.0016,
        0.00087,
        0.00131,
        0.00086,
        0.00129,
        0.00144,
        0.00188,
        0.00342,
        'Outside param'
    ],
    RMS: [
        'Outside param',
        0.513,
        0.282,
        0.264,
        0.174,
        0.064,
        0.014,
        0.003,
        0.001,
        'Outside param'
    ],
    S2: [
        'Outside param',
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        'Outside param'
    ]
}



export let specimen_1  = 100; 
export let specimen_2 = 10; 

 
export function convertNgMg(specimen_1, specimen_2) {
let convertSpecimen_1 = specimen_1*1000/113.12; 
let convertSpecimen_2 = specimen_2*1000/113.12; 

let roundedSpecimen_1 = Math.floor(convertSpecimen_1);
let roundedSpecimen_2 = Math.floor(convertSpecimen_2);

above800(convertSpecimen_1); 

calcRatio(roundedSpecimen_1, roundedSpecimen_2); 




//console.log(convertSpecimen_1)
}




export function above800 (roundedConvert) {
    if (roundedConvert > 800) {
        //console.table("collect the second specimen on the 5th day")
    } else {
        //console.log("collect the second specimen at least 48 hours later")
    }
}

export function calcRatio(n1, n2) {
let ratio = n2 / n1; 
let roundedRatio = Math.floor(ratio * 100 ) / 100 


findA(n1, roundedRatio); 
}



export function findA(n1, ratio) {
    let t = 960; 
    if ( n1 <= param.concentration[1]) {
        console.log(param.concentration[0], param.A[0], "det virker");
    } 
    else if (n1 > param.concentration[1] && n1 < param.concentration[2]) {
        upperLimit(param.A[1], param.k[1], t, param.S2[1], param.RMS[1], ratio)
        //console.log(param.concentration[1], "A", param.A[1], "det virker");
        //console.table(Object.keys(param)); 
        //console.table(Object.values(param)); 
    } 
    else if (n1 > param.concentration[2] && n1 < param.concentration[3]) {
        upperLimit(param.A[2], param.k[2], t, param.S2[2], param.RMS[2], ratio)
        //console.log(param.concentration[2], "A", param.A[2], "det virker");
        
    } 
    else if (n1 > param.concentration[3] && n1 < param.concentration[4]) {
        upperLimit(param.A[3], param.k[3], t, param.S2[3], param.RMS[3], ratio)
        //console.log(param.concentration[3], "A", param.A[3], "det virker");
    } 
    else if (n1 > param.concentration[4] && n1 < param.concentration[5]) {
        upperLimit(param.A[4], param.k[4], t, param.S2[4], param.RMS[4], ratio)
        //console.log(param.concentration[4],"A", param.A[4], "det virker");
    } 
    else if (n1 > param.concentration[5] && n1 < param.concentration[6]) {
        upperLimit(param.A[5], param.k[5], t, param.S2[5], param.RMS[5], ratio)
        //console.log(param.concentration[5],"A", param.A[5], "det virker");
       
    }
    else if (n1 > param.concentration[6] && n1 < param.concentration[7]) {
        upperLimit(param.A[6], param.k[6], t, param.S2[6], param.RMS[6], ratio)
        //console.log(param.concentration[6],"A", param.A[6], "det virker");
    }
    else if (n1 > param.concentration[7] && n1 < param.concentration[8]) {
        upperLimit(param.A[7], param.k[7], t, param.S2[7], param.RMS[7], ratio)
        //console.log(param.concentration[7],"A", param.A[7], "det virker");
    }
    else if (n1 > param.concentration[8] && n1 < param.concentration[9]) {
        upperLimit(param.A[8], param.k[8], t, param.S2[8], param.RMS[8], ratio)
        //console.log(param.concentration[8],"A", param.A[8], "det virker");
    }
    else if (n1 > param.concentration[9] ) {
        //console.log(param.concentration[9],"A", param.A[9], "det virker");
    }
}

export function rule1(s1, s2) {
    //TODO
    if (s1 > 800 ) {
        console.log("New use" )
    }
}

export function autoInterpretation(result, ratio) {
    
    if (result < ratio) {
        console.log("New use");
    } else if (result > ratio) {
        console.log("Abstinent");
    } else {
        console.log("default"); 
    }
}


export function upperLimit(A, k, t, S2, RMS, ratio) { 
    
    //console.log("A:", A, "k: ", k, "n: ", "S2: ", S2, "RMS: ", RMS)
    let result = (A * Math.exp(-k * t)) + (2.57*(Math.sqrt(S2+RMS))); 
    autoInterpretation(result, ratio);
    console.log(result)

}



