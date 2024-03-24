function calculateDPoints(speed) {
    const speedLimit = 70
    const kmPerPoint = 5
    const maxDPoints = 12
    const excessSpeed = speed - speedLimit // calculates the excessSpeed
    const dPoints =(excessSpeed / kmPerPoint) // calculates dPoints
    {
        console.log(`Demerit points: ${dPoints}`) // prints out the number of demerit points
    }
    if  (speed < speedLimit) { //checks if the car is travelling at the right speed
        console.log("Ok")
    } 
    if (dPoints > maxDPoints){ //checks if the demerit points have passed excess
        console.log("Licence Suspended")
    } 
   
    
}

calculateDPoints("200")
// =>Demerit points: 26
// =>it will print out "Licence Suspended"
