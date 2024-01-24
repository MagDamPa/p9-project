import '../App'; 
import './Strings'

const param = {
    time: [
        0,
        23.9,
        47.9,
        71.9,
        95.9,
        119.9,
        120.1
    ],
    //outside param:
   max: [
        3.05,
        3.05,
        1.74,
        1.45,
        0.250,
        0.215,
        'Outside param'
    ]}

//border colours
var normalBorder = 'solid 4px #E8F5FC'
var redBorder = 'solid 4px #e2271d'
var orangeBorder = 'solid 4px #ffa202'
var grenBorder = 'solid 4px #3be21d'
var blackBorder = 'solid 4px #000000'

export const answersOcc = {
    Title: 'Intet resultat at vise',
    Text: 'Indtast et testsvar for at beregne et resultat',
    borderColor: normalBorder,
    Calculation: 'Ingen testsvar er indsat',
    Outside: ''
} 

    //the number of the current test used for calculations
var specimen_base = 0;
var specimen_last = 0;

//A variable for the old title 0 = okay, 1 = outside parameter
var old_title = 0;
 
//main function
export function convertNgMgOcc({datapoints}) {

    //Sets the variable equal to the length of the list minus 1. 
    specimen_last = datapoints.length - 1

    //creates variables to use in the results
    var date_base = new Date(datapoints[specimen_base].Date)
    var date_last = new Date(datapoints[specimen_last].Date)
    var date_base_format = new Date(datapoints[specimen_base].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    var date_last_format = new Date(datapoints[specimen_last].Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    
    //runs the function days between
    daysBetween()

    //checks if the difference between the base date and last day is not above 30 days 
    //if it is, it tries the next one until it finds the next basedate. 
    function daysBetween(){
        var daysbetween = (date_last.getTime() - date_base.getTime()) / (1000 * 3600 * 24) 
        answersOcc.Outside = '';
        if (daysbetween >= 31){
            answersOcc.Outside = 'Spændet på de 30 dage for modellen er overskredet, resultatet er derfor udelukkende vejledende'
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
 
    convertSpecimen_last = datapoints[specimen_last].Value*1000/113.12;
    roundedSpecimen_last = Math.floor(convertSpecimen_last);
    
    last_date = new Date(datapoints[specimen_last].Date)
    
    //calculates the hours between the tests
    const hours = 60 * 60 * 1000; 
    totalHours = (last_date.getTime() - base_date.getTime()) / hours;
    totalHours = Math.round(totalHours)
    calcRatio(); 

    //gives an answer based on one test

    function calcRatio() {
        let ratio = roundedSpecimen_last / roundedSpecimen_base; 
        let roundedRatio = Math.floor(ratio * 100) / 100 


        console.log("roundRation: " + roundedRatio);
        console.log("totalHours: " + totalHours);
        calculate(totalHours, roundedRatio); 
    }

    function calculate(totalHours, roundedRatio) {
        if (totalHours <= param.time[1]) {
            answersOcc.Title = 'for lav'
            answersOcc.Text = 'for lav'
            answersOcc.Calculation = 'for lav'
            specimen_base = specimen_last
            old_title = 1;
        } 
        else if (totalHours > param.time[1] && totalHours <= param.time[2]) {
            result(param.max[1], roundedRatio)
        } 
        else if (totalHours > param.time[2] && totalHours <= param.time[3]) {
            result(param.max[2], roundedRatio)
        } 
        else if (totalHours > param.time[3] && totalHours <= param.time[4]) {
            result(param.max[3], roundedRatio)
        } 
        else if (totalHours > param.time[4] && totalHours <= param.time[5]) {
            result(param.max[4], roundedRatio)
        } 
        else if (totalHours > param.time[5] && totalHours <= param.time[6]) {
            result(param.max[5], roundedRatio)
        } 
        else if (totalHours > param.time[6] && totalHours <= param.time[7]) {
            result(param.max[6], roundedRatio)
        } 
        else if (roundedRatio > param.time[7] ) {
            answersOcc.Title = 'for høj'
            answersOcc.Text = 'for høj'
            answersOcc.Calculation = 'for høj'
            specimen_base = specimen_last
            old_title = 1;
        }
    }

    function result(max, ratio) {
        if (ratio>max){
            answersOcc.Title = 'new use'
            answersOcc.Text = 'new use'
            answersOcc.Calculation = 'new use'
            console.log(ratio, max)
        }
        else{
            answersOcc.Title = 'abstinent'
            answersOcc.Text = 'abstinent'
            answersOcc.Calculation = 'abstinent'
            console.log(ratio, max)
        }
    }}
