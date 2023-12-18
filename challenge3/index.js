function calculateNetSalary(basicSalary, benefits) {
    // Constants for paye rates and deductions
    const payeeRates = {
      "until 24,000": 10,
      "24,001 - 40,000": 15,
      "40,001 - 60,000": 20,
      "60,001 - 80,000": 25,
      "Above 80,000": 30
    };

    const nhifRates = {
      "until 5,999": 150,
      "6,000 - 7,999": 300,
      "8,000 - 11,999": 400,
      "12,000 - 14,999": 500,
      "15,000 - 19,999": 600,
      "20,000 - 24,999": 750,
      "25,000 - 29,999": 850,
      "30,000 - 34,999": 900,
      "35,000 - 39,999": 950,
      "40,000 - 44,999": 1000,
      "45,000 - 49,999": 1100,
      "50,000 - 59,999": 1200,
      "60,000 - 69,999": 1300,
      "70,000 - 79,999": 1400,
      "80,000 - 89,999": 1500,
      "90,000 - 99,999": 1600,
      "100,000 - 109,999": 1700,
      "110,000 - 119,999": 1800,
      "Above 120,000": 2000
    };
  
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate tax
    let tax=0

  
    // Calculate NHIF Deductions
    
  
    //  net salary calculation
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeduction;
  
    // Return various calculations
    return {
      payee,
      nhifDeductions,
      nssfDeduction,
      grossSalary,
      netSalary
    };
}