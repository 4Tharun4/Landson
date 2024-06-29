import React from 'react';


 export default function generateRandomId() {
  const prefix = "L";
  const numberOfDigits = 6;
  
  // Generate a random number with 6 digits
  const min = Math.pow(10, numberOfDigits - 1); // Minimum value with 6 digits
  const max = Math.pow(10, numberOfDigits) - 1; // Maximum value with 6 digits
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Combine prefix with the random number
  const randomId = `${prefix}${randomNumber}`;

  return randomId;
}

 
  
