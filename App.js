// // Q1
// // I

// let exp = "faraz" || (true + false) + 5 && " " || "true";
// let step1 = "faraz" || (true + false) + 5; 
// let step2 = step1 && " "; 
// let step3 = step2 || "true"; 
// console.log(step3); 

// // II
// let b = 3; 

// let exp1 = (1 + 2) + ++b || 5 && 0;

// // Evaluate the expression step by step
// // 1. Evaluate (1 + 2) => 3
// // 2. Evaluate ++b => 4 (since we're incrementing b by 1 before using its value)
// // 3. Calculate 3 + 4 => 7

// // 4. Evaluate 5 && 0 => 0 (short-circuiting because the first operand 5 is truthy, so it moves to the next operand, which is 0, and returns 0)

// // 5. Evaluate 7 || 0 => 7 (since 7 is truthy, it short-circuits and returns 7)

// // The final value of exp1 is 7

// console.log(exp1); // Output: 7

// // iii

// let a = 5; // Assigning the value of a as 5

// let exp2 = 32 && true - ++a && " " || "true";

// // Evaluate the expression step by step
// // 1. Evaluate 32 && true => true (both operands are truthy, so it returns the second operand)
// // 2. Evaluate ++a => 6 (since we're incrementing a by 1 before using its value)
// // 3. Calculate true - 6 => -5 (true is coerced to 1, so 1 - 6 = -5)

// // 4. Evaluate -5 && " " => " " (short-circuiting because the first operand -5 is truthy, so it moves to the next operand, which is " ", and returns " ")

// // 5. Evaluate " " || "true" => " " (since " " is truthy, it short-circuits and returns " ")

// // The final value of exp2 is " "

// console.log(exp2); // Output: " "

// // iv

// let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
// console.log(exp3); // Output: "faraz5"

// // v
// let exp4 = 32 + "abc" || (true + false) + false || +5 || "true";
// console.log(exp4); // Output: "32abc"

// // vi
// let exp5 = false || (true + true) + 15 && "" || 50;
// console.log(exp5); // Output: 50

// // vii
// let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
// console.log(exp6); // Output: 6

// // viii
// let exp7 = "faraz" || false + 10 || "true";
// console.log(exp7); // Output: "faraz"

// // ix
// let exp8 = 12 + (false + false) + true && null || "faraz";
// console.log(exp8); // Output: "faraz"

// // x
// let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
// console.log(exp9); // Output: 3

// // xi
// let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
// console.log(exp10); // Output: 6

// // xii
// let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
// console.log(exp11); // Output: -13


// Q2

const brands = {
    apple: ["iPhone 12", "iPhone 11", "iPhone SE", "iPhone XR"],
    samsung: ["Galaxy S21", "Galaxy Note 20", "Galaxy A51", "Galaxy S10"]
   
  };
  
  const brandDropdown = document.getElementById("brand");
  const modelDropdown = document.getElementById("model");
  const resultDiv = document.getElementById("result");
  
  brandDropdown.addEventListener("change", function() {
    const selectedBrand = this.value;
    modelDropdown.innerHTML = "<option value=''>Select Model</option>";
    
    if (selectedBrand) {
      const models = brands[selectedBrand];
      models.forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelDropdown.appendChild(option);
      });
      modelDropdown.disabled = false;
    } else {
      modelDropdown.disabled = true;
    }
  });
  
  function search() {
    const selectedBrand = brandDropdown.value;
    const selectedModel = modelDropdown.value;
    
    if (selectedBrand && selectedModel) {
      resultDiv.innerHTML = `Selected Brand: ${selectedBrand}<br>Selected Model: ${selectedModel}`;
    } else {
      resultDiv.innerHTML = "Please select both brand and model.";
    }
  }
  



