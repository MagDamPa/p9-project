import '../App'; 
import './Strings'

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
    Title: 'Intet resultat at vise',
    Text: '',
    Color: 'white'
} 



var specimen_base = 0 


 
export function convertNgMg({datapoints}) {

    

    //Denne skal ændres sådan at den tjekker hvorvidt det seneste resultat har være new use...
    if (specimen_base >= (datapoints.length - 1) && specimen_base !== 0) {
        specimen_base = specimen_base - 1
    }

    var specimen_last = datapoints.length - 1

    daysBetween()

    //checks if the difference between the base date and last day is not above 30 days 
    //if it is, it tries the next one until it finds the next basedate. 
    function daysBetween(){
        var date1 = new Date(datapoints[specimen_base].Date)
        var date2 = new Date(datapoints[specimen_last].Date)
        var daysbetween = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24) 
        //console.log('daysbetween, before change: ' + datapoints[specimen_base].Date)
        if (daysbetween >= 31){
            specimen_base = specimen_base + 1
            //console.log('daysbetween, after change: ' + datapoints[specimen_base].Date)
            daysBetween()
        }
    }

   
   


    let convertSpecimen_base = datapoints[specimen_base].Value *1000/113.12; 
    let roundedSpecimen_base = Math.floor(convertSpecimen_base);

    let base_date = new Date(datapoints[specimen_base].Date)
    

   
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
            answers.Title = "Første test"
            answers.Text = "Indsamle næste prøve på 5. dagen"
            answers.Color = "grey"
        } else {
            answers.Title = "Første test"
            answers.Text = "Indsamle næste prøve tidligst efter 2 dage"
            answers.Color = "grey"
        }
    }

    function calcRatio() {
        let ratio = roundedSpecimen_last / roundedSpecimen_base; 
        let roundedRatio = Math.floor(ratio * 100 ) / 100 

        findA(roundedRatio); 
    }

    function findA(roundedRatio) {

        if ( roundedSpecimen_base <= param.concentration[1]) {
            answers.Title = "Udenfor modellens rækkevidde" 
            answers.Text = 'Testværdien er for lav.'
            answers.Color = "grey"
            specimen_base = specimen_last
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
            answers.Title = "Udenfor modellens rækkevidde"
            answers.Text = 'Testværdien er for højt'
            answers.Color = "grey"
            specimen_base = specimen_last
        }
    }

 

    function autoInterpretation(result, ratio) {

        //console.log('Base Date: ' + datapoints[specimen_base].Date)
        //console.log('Last Date: ' + datapoints[specimen_last].Date)
        //console.log('First value: ' + convertSpecimen_base)
        //console.log('Last value: ' + convertSpecimen_last)

    
        

        if (result < ratio) {
            answers.Title = "Chance for nyt indtag"; 
            answers.Color = "red"
            if (roundedSpecimen_base > 800) {
                if(roundedSpecimen_last < 200){
                    answers.Text = ``
                }
                else{
                    let visableDate = new Date(datapoints[specimen_last].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
                    
                    //Connected to the Date.prototype.addDays method to add 15 days
                    var rawDatObject = new Date(datapoints[specimen_last].Date)
                    // Converts the date into a string with the month name. 
                    var added15Days = rawDatObject.addDays(15).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
                    
                   
                    answers.Text = `Der er mulighed for en falsk positiv i op til 14 dage fra testen den ${visableDate}, foretag derfor næste test den ${added15Days}`
                }
            }
            else {
                answers.Text = `Indsamle næste prøve tidligst efter 2 dage. Ved næste testsvar vil resultatet blive beregnet på baggrund af testen fra den ${new Date(datapoints[specimen_last].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}`
            }
            specimen_base = specimen_last
            //console.log('BaseDate after new use: ' + datapoints[specimen_base].Date)
        } else if (result > ratio) {
            answers.Title = "Intet nyt indtag af cannabis"
            answers.Color = "green"
            
            if (roundedSpecimen_base > 800) {
                answers.Text = 'Der er på nuværende tidspunkt ikke tegn på nyt cannabis forbrug'
            }
            else {
                answers.Text = 'Der er på nuværende tidspunkt ikke tegn på nyt cannabis forbrug'
            }
        } else if (result = null){
        }
    }

    function upperLimit(A, k, t, S2, RMS, ratio) { 
        let result = (A * Math.exp(-k * t)) + (2.57*(Math.sqrt(S2+RMS))); 
        autoInterpretation(result, ratio);
    }

    
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


