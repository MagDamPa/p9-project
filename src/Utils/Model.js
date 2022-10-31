
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

export const answers = {
    Title: '',
    Text: ''
} 

var specimen_base = 0 
 
export function convertNgMg({datapoints}) {

    if (datapoints.length === 0){
        answers.Title = 'Intet resultat at vise'
        answers.Text = ''
    }

    if (specimen_base >= datapoints.length || datapoints[specimen_base] === null){
        specimen_base = 0
        convertNgMg({datapoints})
    }
    
    let convertSpecimen_base = datapoints[specimen_base].Value *1000/113.12; 
    let roundedSpecimen_base = Math.floor(convertSpecimen_base);

    let base_date = new Date(datapoints[specimen_base].Date)

    const specimen_last = datapoints.length - 1

    let convertSpecimen_last = null
    let roundedSpecimen_last = null
    let last_date = null

    var totalHours = null

    if (datapoints.length === 1 || specimen_last === specimen_base){
        above800(convertSpecimen_base); 
        return 0;
    }
    else{
        convertSpecimen_last = datapoints[specimen_last].Value*1000/113.12;
        roundedSpecimen_last = Math.floor(convertSpecimen_last);
        
        last_date = new Date(datapoints[specimen_last].Date)
        
        const hours = 60 * 60 * 1000; 
        totalHours = (last_date.getTime() - base_date.getTime()) / hours;
        totalHours = Math.round(totalHours)
    }

    calcRatio(); 

    function above800 () {
        if (roundedSpecimen_base > 800) {
            answers.Title = "First test"
            answers.Text = "collect the second specimen on the 5th day"
        } else {
            answers.Title = "First test"
            answers.Text = "collect the second specimen at least 48 hours later"
        }
    }

    function calcRatio() {
        let ratio = roundedSpecimen_last / roundedSpecimen_base; 
        let roundedRatio = Math.floor(ratio * 100 ) / 100 

        findA(roundedRatio); 
    }

    function findA(roundedRatio) {

        if ( roundedSpecimen_base <= param.concentration[1]) {
            answers.Title = "outside parameter" 
        } 
        else if (roundedSpecimen_base > param.concentration[1] && roundedSpecimen_base < param.concentration[2]) {
            upperLimit(param.A[1], param.k[1], totalHours, param.S2[1], param.RMS[1], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[2] && roundedSpecimen_base < param.concentration[3]) {
            upperLimit(param.A[2], param.k[2], totalHours, param.S2[2], param.RMS[2], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[3] && roundedSpecimen_base < param.concentration[4]) {
            upperLimit(param.A[3], param.k[3], totalHours, param.S2[3], param.RMS[3], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[4] && roundedSpecimen_base < param.concentration[5]) {
            upperLimit(param.A[4], param.k[4], totalHours, param.S2[4], param.RMS[4], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[5] && roundedSpecimen_base < param.concentration[6]) {
            upperLimit(param.A[5], param.k[5], totalHours, param.S2[5], param.RMS[5], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[6] && roundedSpecimen_base < param.concentration[7]) {
            upperLimit(param.A[6], param.k[6], totalHours, param.S2[6], param.RMS[6], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[7] && roundedSpecimen_base < param.concentration[8]) {
            upperLimit(param.A[7], param.k[7], totalHours, param.S2[7], param.RMS[7], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[8] && roundedSpecimen_base < param.concentration[9]) {
            upperLimit(param.A[8], param.k[8], totalHours, param.S2[8], param.RMS[8], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[9] ) {
            answers.Title = "outside parameter"
        }
    }

    function rule1(s1, s2) {
        //TODO
        if (s1 > 800 ) {
            console.log("New use" )
        }
    }

    function autoInterpretation(result, ratio) {
        
        if (result < ratio) {
            answers.Title = "New use"; 
            if (roundedSpecimen_base > 800) {
                answers.Text = 'False prediction of new use is possible for up to 14 days from first specimen collection. Collect urine specimens 15 days from the first collection'
            }
            else {
                answers.Text = 'Collect the 3rd specimen at least 48 hours later'
            }
            specimen_base = specimen_last
        } else if (result > ratio) {
            answers.Title = "Abstinent"
            if (roundedSpecimen_base > 800) {
                answers.Text = 'Test 1 - abstinent'
            }
            else {
                answers.Text = 'Test 2 - abstinent'
            }
        } else if (result = null){
        }
        
    }


    function upperLimit(A, k, t, S2, RMS, ratio) { 
        
        let result = (A * Math.exp(-k * t)) + (2.57*(Math.sqrt(S2+RMS))); 
        autoInterpretation(result, ratio);

    }
}


