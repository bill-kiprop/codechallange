let salary = "100000" //assigns salary to 100000

  
  
  function calculatePAYE(salary) { //calculates the amount of PAYE that will be deducted
    if (salary < 24000) {
        return salary * 0.1;
    } else if (salary >= 24001 && salary <= 32333) {
        return salary * 0.25;
    } else if (salary >= 32334 && salary <= 500000) {
        return salary * 0.3;
    } else if (salary >= 500001 && salary <= 800000) {
        return salary * 0.325;
    } else if (salary > 800000) {
        return salary * 0.35;
    }
}

      function calculateNHIF(salary){ // calculates the salary after the NHIF is deducted
          if (salary < 5999 ){
            return salary - 150
          } 
          else if(salary >= 6000 && salary <= 7999){
            return salary - 300
          }
          else if(salary >= 8000 && salary <= 11999){
            return salary - 400
          }
          else if(salary >= 12000 && salary <= 14999){
            return salary - 500
          }
          else if(salary >= 15000 && salary <= 19999){
            return salary - 600
          }
          else if(salary >= 20000 && salary <= 24999){
            return salary - 750
          }
          else if(salary >= 25000 && salary <= 29999){
            return salary - 850
          }
          else if(salary >= 30000 && salary <= 34999){
            return salary - 900
          }
          else if(salary >= 35000 && salary <= 39999){
            return salary - 950
          }
          else if(salary >= 40000 && salary <= 44999){
            return salary - 1000
          }
          else if(salary >= 45000 && salary <= 49999){
            return salary - 1100
          }
          else if(salary >= 50000 && salary <= 59999){
            return salary - 1200
          }
          else if(salary >= 60000 && salary <= 69999){
            return salary - 1300
          }
          else if(salary >= 70000 && salary <= 79999){
            return salary - 1400
          }
          else if(salary >= 80000 && salary <= 89999){
            return salary - 1500
          }
          else if(salary >= 90000 && salary <= 99999){
            return salary - 1600
          }
          else if(salary >= 100000){
            return salary - 1700
          }
      }

      function calculateNSSF(salary){ // calculates the NSSF to be deducted
        return salary * 0.06
      }

      
      let PAYE = calculatePAYE(salary) 
      let nhifDeducted = salary - calculateNHIF(salary)
      let nhifDeduction = calculateNHIF(salary);
      let nssfdeduction = calculateNSSF(salary)
      let netpay = nhifDeduction - PAYE - nssfdeduction

console.log('GROSS PAY: Ksh.'+ salary) //prints out the gross pay  
//=>Ksh.100000 
console.log('PAYE: Ksh.' + PAYE )  //prints out the PAYE  
//=>Ksh.30000
console.log('NHIF: Ksh.' + nhifDeducted ) //prints out the NHIF deducted
//=>Ksh.1700
console.log('NSSF: Ksh.'+ nssfdeduction) //prints out the NSSF deducted
//=>Ksh.6000
console.log('NET PAY: Ksh.' + netpay) //prints out the net pay
//=>Ksh.62300
  