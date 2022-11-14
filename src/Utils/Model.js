import '../App'; 
import datapoints from '../App'
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
    Text: 'Indtast et testsvar for at beregne et resultat',
    Color: '#E8F5FC'
} 

export var specimen_base = 0;
export var specimen_last = 0;
 
export function convertNgMg({datapoints}) {

   
    //Denne skal ændres sådan at den tjekker hvorvidt det seneste resultat har være new use...
    if (specimen_base >= (datapoints.length - 1) && specimen_base !== 0) {
        specimen_base = specimen_base - 1
    }

    specimen_last = datapoints.length - 1

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
            answers.Title = "Modellen kan endnu ikke forudsige resultatet."
            answers.Text = "Tag næste prøve efter 5 dage"
            answers.Color = "#E8F5FC"
        } else {
            answers.Title = "Modellen kan endnu ikke forudsige resultatet."
            answers.Text = "Tag næste prøve tidligst efter 2 dage"
            answers.Color = "#E8F5FC"
        }
    }

    function calcRatio() {
        let ratio = roundedSpecimen_last / roundedSpecimen_base; 
        let roundedRatio = Math.floor(ratio * 100 ) / 100 

        findA(roundedRatio); 
    }

    function findA(roundedRatio) {

        if ( roundedSpecimen_base <= param.concentration[1]) {
            answers.Title = "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol) " 
            answers.Text = 'Testværdien er for lav til modellen. Lave værdier i denne størrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtvævet.'
            answers.Color = "#E8F5FC"
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
            answers.Title = "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol) "
            answers.Text = `Testværdien den ${new Date(datapoints[specimen_base].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})} er for høj, og der må afventes et fald inden modellen kan anvendes. Gentagne høje værdier kan betragtes som tegn på fortsat stofbrug`
            answers.Color = "#E8F5FC"
            specimen_base = specimen_last
        }
    }


    function autoInterpretation(result, ratio) {
        
        let visableDate = new Date(datapoints[specimen_last].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
        let baseDate = new Date(datapoints[specimen_base].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})

        if (result < ratio) {
            answers.Color = "rgba(250, 0, 0, 0.634)"
            if (roundedSpecimen_base > 800) {
                if(roundedSpecimen_last < 200){
                    answers.Title = `Tegn på nyt indtag`
                    answers.Text = `Der er evidens for nyt forbrug. Modellen burde være præcis. Næste beregning vil ske med udgangspunkt i testen fra den ${visableDate}`
                }
                else{
                    answers.Title = "Risiko for falsk forudsigelse af nyt indtag"; 
                    //Connected to the Date.prototype.addDays method to add 15 days
                    var rawDatObject = new Date(datapoints[specimen_last].Date)
                    // Converts the date into a string with the month name. 
                    var added15Days = rawDatObject.addDays(15).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
                    
                    answers.Text = `BEMÆRK: Der er mulighed for en falsk positiv forudsigelse  i op til 14 dage fra testen den ${visableDate}, foretag derfor næste test den ${added15Days}, hvorefter modellen vil være præcis.`
                }
            }
            else {
                answers.Title = `Ny prøve påkrævet. Modellen kan endnu ikke forudsige et resultat. Der er risiko for falsk forudsigelse af nyt indtag.`
                answers.Text = `BEMÆRK: Resultatet fra modellen er usikkert. Tag næste prøve tidligst efter 2 dage. Næste testsvar vil blive beregnet på baggrund af testen fra den ${visableDate}. Modellen burde herefter være præcis`
            }
            specimen_base = specimen_last
        } else if (result > ratio) {
            answers.Title = "Intet tegn på nyt indtag af cannabis."
            answers.Color = "rgb(132, 225, 135)"
            answers.Text = `Der er ikke tegn på nyt cannabis forbrug mellem ${baseDate} og ${visableDate}, der er derfor evidens for abstinens.`  
        } else if (result = null){
        }
    }

    function upperLimit(A, k, t, S2, RMS, ratio) { 
        let result = (A * Math.exp(-k * t)) + (2.57*(Math.sqrt(S2+RMS))); 
        autoInterpretation(result, ratio);
    }

    
}


//Prototype added to the Date object. It adds days to the date. 
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


