import React from 'react';


 export  function DEALER() {
  const prefix = "LSD";
  const numberOfDigits = 6;
  
  // Generate a random number with 6 digits
  const min = Math.pow(10, numberOfDigits - 1); // Minimum value with 6 digits
  const max = Math.pow(10, numberOfDigits) - 1; // Maximum value with 6 digits
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Combine prefix with the random number
  const randomId = `${prefix}${randomNumber}`;

  return randomId;
}

export  function WHEREHOUSE() {
  const prefix = "LSW";
  const numberOfDigits = 6;
  
  // Generate a random number with 6 digits
  const min = Math.pow(10, numberOfDigits - 1); // Minimum value with 6 digits
  const max = Math.pow(10, numberOfDigits) - 1; // Maximum value with 6 digits
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Combine prefix with the random number
  const randomId = `${prefix}${randomNumber}`;

  return randomId;
}

export  function ADMIN() {
  const prefix = "LSA";
  const numberOfDigits = 6;
  
  // Generate a random number with 6 digits
  const min = Math.pow(10, numberOfDigits - 1); // Minimum value with 6 digits
  const max = Math.pow(10, numberOfDigits) - 1; // Maximum value with 6 digits
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Combine prefix with the random number
  const randomId = `${prefix}${randomNumber}`;

  return randomId;
}
export  function USER() {
  const prefix = "LSU";
  const numberOfDigits = 6;
  
  // Generate a random number with 6 digits
  const min = Math.pow(10, numberOfDigits - 1); // Minimum value with 6 digits
  const max = Math.pow(10, numberOfDigits) - 1; // Maximum value with 6 digits
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Combine prefix with the random number
  const randomId = `${prefix}${randomNumber}`;

  return randomId;
}

 
  
