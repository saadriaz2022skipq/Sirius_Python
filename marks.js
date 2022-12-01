// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        totalMarks = math+english+science+social+language
        if (totalMarks>=0){
            resolve(totalMarks)
        } else {
            reject("Invalid Values")
        }
        }
        
    )}

// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        average = totalMarks/5
        if (average >=0){
            resolve(average)
        } else {
            reject ("Invalid Values")
        }
    
    }) 
}

module.exports = {
    calculateAverageMarks,calculateTotalMarks
}
