import '../App'; 
import './Strings'

//Model parameters
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

//border colours
var normalBorder = 'solid 4px #E8F5FC'
var redBorder = 'solid 4px #e2271d'
var orangeBorder = 'solid 4px #ffa202'
var grenBorder = 'solid 4px #3be21d'
var blackBorder = 'solid 4px #000000'

//base answers
export const answers = {
    Title: 'Intet resultat at vise',
    Text: 'Indtast et testsvar for at beregne et resultat',
    borderColor: normalBorder,
    Calculation: 'Ingen testsvar er indsat',
    Outside: ''
} 

//the number of the current test used for calculations
var specimen_base = 0;
var specimen_last = 0;
 
//main function
export function convertNgMg({datapoints}) {

    //Sets the variable equal to the length of the list minus 1. 
    specimen_last = datapoints.length - 1

    //creates variables to use in the results
    var date_base = new Date(datapoints[specimen_base].Date)
    var date_last = new Date(datapoints[specimen_last].Date)
    var date_base_format = new Date(datapoints[specimen_base].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    var date_last_format = new Date(datapoints[specimen_last].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    
    //runs the function days between
    daysBetween()

    const ifRoundedSpeciemBaseIsLargerThan800 = {
        Title: "Modellen kan endnu ikke forudsige resultatet.",
        Text: "Tag n??ste pr??ve efter 5 dage.",
        Calculation: `Modellen har givet f??lgende resultat baseret p?? test nr. ${specimen_base + 1}.`
    }

    const ifRoundedSpeciemBaseIsLessThan800 = {
        Title: "Modellen kan endnu ikke forudsige resultatet.",
        Text: "Tag n??ste pr??ve tidligst efter 2 dage.",
        Calculation: `Modellen har givet f??lgende resultat baseret p?? test nr. ${specimen_base + 1}.`
    }

    const ifRoundedSpecimenBaseisLessOrEqualToParam1 = {
        Title: "V??rdi er udenfor modellens r??kkevidde (0,9 til 132 mg/mol).",
        Text: "Testv??rdien er for lav til modellen. Lave v??rdier i denne st??rrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtv??vet.",
        Calculation: `Modellen er uden for r??kkevidde baseret p?? test nr. ${specimen_base + 1}`
    }
    
    const ifRoundedSpecimenBaseisLargerThanParam9 = {
        Title: "V??rdi er udenfor modellens r??kkevidde (0,9 til 132 mg/mol).",
        Text: `Testv??rdien den ${date_base_format} er for h??j, og der m?? afventes et fald inden modellen kan anvendes. Gentagne h??je v??rdier kan betragtes som tegn p?? fortsat stofbrug`,
        Calculation: `Modellen er uden for r??kkevidde baseret p?? test nr. ${specimen_base + 1}`
    }

    const ifRoundedSpecimenLastIsLessOrEqualToParam1 ={
        Title: "V??rdi er udenfor modellens r??kkevidde (0,9 til 132 mg/mol) ",
        Text: 'Testv??rdien er for lav til modellen. Lave v??rdier i denne st??rrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtv??vet. BEM??RK: Der er derfor ikke tegn p?? nyt indtag',
        Calculation: `Modellen er uden for r??kkevidde baseret p?? test nr. ${specimen_last + 1}`
    }

    const ifRoundedSpecimenLastIsLargerThanParam9 = {
        Title: "V??rdi er udenfor modellens r??kkevidde (0,9 til 132 mg/mol) ",
        Text:`Testv??rdien den ${date_last_format} er for h??j, og der m?? afventes et fald inden modellen kan anvendes. Gentagne h??je v??rdier kan betragtes som tegn p?? fortsat stofbrug`,
        Calculation: `Modellen er uden for r??kkevidde baseret p?? test nr. ${specimen_last + 1}`
    }

    const ifResultIsLargerThanRatio = {
        Calculation: `Modellen har givet f??lgende resultat baseret p?? test nr. ${specimen_base + 1} og test nr. ${specimen_last + 1}`,
        ifRoundedBaseIsLagerThan800AndroundedSpecimenLastIsLessThan200: {
            Title: `Tegn p?? nyt indtag`,
            Text: `Der er evidens for nyt forbrug. N??ste beregning vil ske med udgangspunkt i testen fra den ${date_last_format}`
        }, 
        ifAnswerTitleIsEqualToAnswerTitleAndRoundedSpecimenIsLargerOrEqualTo200: {
            Title: "Tegn p?? nyt indtag.",
            Text: `Der er evidens for nyt forbrug. N??ste beregning vil ske med udgangspunkt i testen fra den ${date_last_format}`

        },
        ifRoundedBaseIsLagerThan800AndroundedSpecimenLastLargerThan200: {
            Title: "Risiko for falsk forudsigelse af nyt indtag",
            Text: `BEM??RK: Der er mulighed for en falsk positiv forudsigelse  i op til 14 dage fra testen den ${date_base_format}, foretag derfor n??ste test efter den ${new Date(datapoints[specimen_base].Date).addDays(15).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}, hvorefter modellen vil v??re pr??cis.`
        }, 
        ifRoundedBaseIsLessOrEqualTo800: {
            ifAnswerTitleIsEqualToAnswerTitle: {
                Titel: "Tegn p?? nyt indtag",
                Text: `Der er evidens for nyt forbrug. N??ste beregning vil ske med udgangspunkt i testen fra den ${date_last_format}`
            },
            ifAnswerTitleIsNotEqualToAnswerTitle: {
                Title:"Ny pr??ve p??kr??vet. Modellen kan endnu ikke forudsige et resultat. Der er risiko for falsk forudsigelse af nyt indtag.",
                Text: `BEM??RK: Resultatet fra modellen er usikkert. Tag n??ste pr??ve tidligst efter 2 dage. N??ste testsvar vil blive beregnet p?? baggrund af testen fra den ${date_last_format}. Modellen burde herefter v??re pr??cis`
            }
        }, 
        ifResultIsLargerThanRatio: {
            Title: "Intet tegn p?? nyt indtag af cannabis.",
            Text: `Der er ikke evidens for nyt cannabis forbrug mellem den ${date_base_format} og den ${date_last_format}. N??ste pr??ve vil fortsat blive beregnet med udgangspunkt i testen fra den ${date_base_format}`,
            Calculation: `Modellen har givet f??lgende resultat baseret p?? test nr. ${specimen_base + 1} og test nr. ${specimen_last + 1}`
        },
        ifRoundedSpecimenLastLessThanParam1: {
            Title: "V??rdi er udenfor modellens r??kkevidde (0,9 til 132 mg/mol)",
            Text: 'Testv??rdien er for lav til modellen. Lave v??rdier i denne st??rrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtv??vet. BEM??RK: Der er derfor ikke tegn p?? nyt indtag',
            Calculation: `Modellen er uden for r??kkevidde baseret p?? test nr. ${specimen_last + 1}`
        },
        ifRoundedSpecimenLastLargerThanParam9: {
            Title: "V??rdi er udenfor modellens r??kkevidde (0,9 til 132 mg/mol) ",
            Text: `Testv??rdien den ${new Date(datapoints[specimen_last].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})} er for h??j, og der m?? afventes et fald inden modellen kan anvendes. Gentagne h??je v??rdier kan betragtes som tegn p?? fortsat stofbrug`,
            Calculation: `Modellen er uden for r??kkevidde baseret p?? test nr. ${specimen_last + 1}`
        }
    }

    

    //checks if the difference between the base date and last day is not above 30 days 
    //if it is, it tries the next one until it finds the next basedate. 
    function daysBetween(){
        var daysbetween = (date_last.getTime() - date_base.getTime()) / (1000 * 3600 * 24) 
        if (daysbetween >= 31){
            //specimen_base = specimen_base + 1
            answers.Outside = 'Sp??ndet p?? de 30 dage for modellen er overskredet, resultatet er derfor udelukkende vejledende'
        }
    }

    //calculations for the base specimen
    let convertSpecimen_base = datapoints[specimen_base].Value *1000/113.12; 
    let roundedSpecimen_base = Math.floor(convertSpecimen_base);
    let base_date = new Date(datapoints[specimen_base].Date)
    
    //initiate the variable for the last specimen and assign it null
    let convertSpecimen_last = null
    let roundedSpecimen_last = null
    let last_date = null

    var totalHours = null

    //the if-statement that initiate the correct calculations, whether there is one or more specimens. 
    if (datapoints.length === 1 || specimen_last === specimen_base){
        above800(convertSpecimen_base); 
    }
    else{
        //assignes the variables for the last specimen
        convertSpecimen_last = datapoints[specimen_last].Value*1000/113.12;
        roundedSpecimen_last = Math.floor(convertSpecimen_last);
        
        last_date = new Date(datapoints[specimen_last].Date)
        
        //calculates the hours between the tests
        const hours = 60 * 60 * 1000; 
        totalHours = (last_date.getTime() - base_date.getTime()) / hours;
        totalHours = Math.round(totalHours)
        calcRatio(); 
    }

    //gives an answer based on one test
    function above800 () {
        if (roundedSpecimen_base <= param.concentration[1]){
            answers.Title = ifRoundedSpecimenBaseisLessOrEqualToParam1.Title
            answers.Text = ifRoundedSpecimenBaseisLessOrEqualToParam1.Text
            answers.Calculation = ifRoundedSpecimenBaseisLessOrEqualToParam1.Calculation
            specimen_base = specimen_base + 1
            answers.borderColor = blackBorder
        }
        else if (roundedSpecimen_base > param.concentration[9]){
            answers.Title = ifRoundedSpecimenBaseisLargerThanParam9.Title
            answers.Text = ifRoundedSpecimenBaseisLargerThanParam9.Text
            answers.Calculation = ifRoundedSpecimenBaseisLargerThanParam9.Calculation
            specimen_base = specimen_base + 1
            answers.borderColor = blackBorder
        }
        else{
            if (roundedSpecimen_base > 800) {
                answers.Title = ifRoundedSpeciemBaseIsLargerThan800.Title
                answers.Text = ifRoundedSpeciemBaseIsLargerThan800.Text
                answers.borderColor = normalBorder
                answers.Calculation = ifRoundedSpeciemBaseIsLargerThan800.Calculation
            } else {
                answers.Title = ifRoundedSpeciemBaseIsLessThan800.Title
                answers.Text = ifRoundedSpeciemBaseIsLessThan800.Text
                answers.borderColor = normalBorder
                answers.Calculation = ifRoundedSpeciemBaseIsLessThan800.Calculation
            }
        }
    }

    //calculates the ratio between the tests
    function calcRatio() {
        let ratio = roundedSpecimen_last / roundedSpecimen_base; 
        let roundedRatio = Math.floor(ratio * 100 ) / 100 

        findA(roundedRatio); 
    }

    //findes the correct parameters to use for the calculations. 
    function findA(roundedRatio) {
        if (roundedSpecimen_base <= param.concentration[1]) {
            answers.Title = ifRoundedSpecimenBaseisLessOrEqualToParam1.Title
            answers.Text = ifRoundedSpecimenBaseisLessOrEqualToParam1.Text
            answers.borderColor = blackBorder
            answers.Calculation = ifRoundedSpecimenBaseisLessOrEqualToParam1.Calculation
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
            answers.Title = ifRoundedSpecimenBaseisLargerThanParam9.Title
            answers.Text = ifRoundedSpecimenBaseisLargerThanParam9.Text
            answers.borderColor = blackBorder
            answers.Calculation = ifRoundedSpecimenBaseisLargerThanParam9.Calculation
            specimen_base = specimen_last
        }
    }

    //calculates the upper limit for the correct parameters
    function upperLimit(A, k, t, S2, RMS, ratio) { 
        let result = (A * Math.exp(-k * t)) + (2.57*(Math.sqrt(S2+RMS))); 
        autoInterpretation(result, ratio);
    }

    //Assignes the correct result based on the result and ratio, as well as other elements
    function autoInterpretation(result, ratio) {
        if (roundedSpecimen_last <= param.concentration[1]){
            answers.Title = ifRoundedSpecimenLastIsLessOrEqualToParam1.Title
            answers.Text = ifRoundedSpecimenLastIsLessOrEqualToParam1.Text
            answers.Calculation = ifRoundedSpecimenLastIsLessOrEqualToParam1.Calculation
            answers.borderColor = blackBorder
            specimen_base = specimen_last
        }
        else if (roundedSpecimen_last > param.concentration[9]){
            answers.Title = ifRoundedSpecimenLastIsLargerThanParam9.Title
            answers.Text =  ifRoundedSpecimenLastIsLargerThanParam9.Text
            answers.Calculation = ifRoundedSpecimenLastIsLargerThanParam9.Calculation
            answers.borderColor = blackBorder
            specimen_base = specimen_last
        }
        else {
            if (result < ratio) {
                answers.Outside = ''
                answers.borderColor = redBorder
                answers.Calculation = ifResultIsLargerThanRatio.Calculation
                if (roundedSpecimen_base > 800) {
                    if(roundedSpecimen_last < 200){
                        answers.Title = ifResultIsLargerThanRatio.ifRoundedBaseIsLagerThan800AndroundedSpecimenLastIsLessThan200.Title
                        answers.Text = ifResultIsLargerThanRatio.ifRoundedBaseIsLagerThan800AndroundedSpecimenLastIsLessThan200.Text
                    }
                    else if (specimen_last - specimen_base >= 1)
                    {
                        answers.Title = ifResultIsLargerThanRatio.ifAnswerTitleIsEqualToAnswerTitleAndRoundedSpecimenIsLargerOrEqualTo200.Title
                        answers.Text = ifResultIsLargerThanRatio.ifAnswerTitleIsEqualToAnswerTitleAndRoundedSpecimenIsLargerOrEqualTo200.Text
                    }
                    else{
                        answers.Title = ifResultIsLargerThanRatio.ifRoundedBaseIsLagerThan800AndroundedSpecimenLastLargerThan200.Title
                        //Connected to the Date.prototype.addDays method to add 15 days
                        var rawDatObject = new Date(datapoints[specimen_last].Date)
                        // Converts the date into a string with the month name. 
                        var added15Days = rawDatObject.addDays(15).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
                        
                        answers.Text = ifResultIsLargerThanRatio.ifRoundedBaseIsLagerThan800AndroundedSpecimenLastLargerThan200.Text
                        answers.borderColor = orangeBorder
                    }
                }
                else if (roundedSpecimen_base <= 800) {
                    console.log(specimen_base)
                    console.log(specimen_last)
                    if (specimen_last - specimen_base > 1){
                        answers.Title = ifResultIsLargerThanRatio.ifRoundedBaseIsLessOrEqualTo800.ifAnswerTitleIsEqualToAnswerTitle.Titel
                        answers.Text = ifResultIsLargerThanRatio.ifRoundedBaseIsLessOrEqualTo800.ifAnswerTitleIsEqualToAnswerTitle.Text
                        answers.borderColor = redBorder
                    }
                    else 
                    {
                        answers.Title = ifResultIsLargerThanRatio.ifRoundedBaseIsLessOrEqualTo800.ifAnswerTitleIsNotEqualToAnswerTitle.Title
                        answers.Text = ifResultIsLargerThanRatio.ifRoundedBaseIsLessOrEqualTo800.ifAnswerTitleIsNotEqualToAnswerTitle.Text
                        answers.borderColor = orangeBorder
                    }
                    
                }
                specimen_base = specimen_last
            } 
            else if (result > ratio) {
                answers.Title = ifResultIsLargerThanRatio.ifResultIsLargerThanRatio.Title
                answers.borderColor = grenBorder
                answers.Text = ifResultIsLargerThanRatio.ifResultIsLargerThanRatio.Text
                answers.Calculation = ifResultIsLargerThanRatio.ifResultIsLargerThanRatio.Calculation 
            } 
            else if (result = null){
            }
        }
    }   

}


//Prototype added to the Date object. It adds days to the date. 
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

