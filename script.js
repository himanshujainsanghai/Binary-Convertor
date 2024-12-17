// Get the "from" dropdown element
const fromDropdown = document.getElementById("from");
const toDropdown = document.getElementById("to");
const inputNo = document.getElementById("input");
const convert = document.querySelector(".convert-btn");

let no;

// Add an event listener to handle value change
fromDropdown.addEventListener("change", () => {
  // Get the selected value
  const from = fromDropdown.value;
  document.getElementById("input-no").textContent = `Enter ${from} Number`;
});

// Add an event listener to handle value change
toDropdown.addEventListener("change", () => {
  // Get the selected value
  const to = toDropdown.value;
  document.getElementById("output-no").textContent = `${to} Number`;
});

inputNo.addEventListener("change", () => {
  no = inputNo.value;
});





function convertBinary(binaryValue) {
  // Convert binary to decimal
  const decimal = parseInt(binaryValue, 2);

  // Convert binary to hexadecimal
  const hexadecimal = decimal.toString(16).toUpperCase();

  // Convert binary to octal
  const octal = decimal.toString(8);

  // Convert binary to binary (for the sake of the example)
  const binary = decimal.toString(2);

  return {
    binary: binary,
    decimal: decimal,
    hexadecimal: hexadecimal,
    octal: octal,
  };
}

function convertDecimal(decimalValue) {
  // Convert decimal to binary
  const binary = decimalValue.toString(2);

  // Convert decimal to hexadecimal
  const hexadecimal = decimalValue.toString(16).toUpperCase();

  // Convert decimal to octal
  const octal = decimalValue.toString(8);

  // The decimal value is already in decimal form
  const decimal = decimalValue;

  return {
    binary: binary,
    decimal: decimal,
    hexadecimal: hexadecimal,
    octal: octal,
  };
}

function convertOctal(octalValue) {
  // Convert octal to decimal
  const decimal = parseInt(octalValue, 8);

  // Convert octal to binary
  const binary = decimal.toString(2);

  // Convert octal to hexadecimal
  const hexadecimal = decimal.toString(16).toUpperCase();

  // The octal value is already in octal form
  const octal = octalValue;

  return {
    binary: binary,
    decimal: decimal,
    hexadecimal: hexadecimal,
    octal: octal,
  };
}

function convertHexadecimal(hexValue) {
  // Convert hexadecimal to decimal
  const decimal = parseInt(hexValue, 16);

  // Convert hexadecimal to binary
  const binary = decimal.toString(2);

  // Convert hexadecimal to octal
  const octal = decimal.toString(8);

  // The hexadecimal value is already in hexadecimal form
  const hexadecimal = hexValue.toUpperCase();

  return {
    binary: binary,
    decimal: decimal,
    hexadecimal: hexadecimal,
    octal: octal,
  };
}



convert.addEventListener("click", () => {
  const to = toDropdown.value;
  const from = fromDropdown.value;

  if (from === "Binary" && /^[01]+$/.test(no)) {

    const binaryToAny = convertBinary(no);

    if (to === "Binary") {
      document.getElementById("output").value = binaryToAny.binary;
    } else if (to === "Decimal") {
      document.getElementById("output").value = binaryToAny.decimal;
    } else if (to === "Hexadecimal") {
      document.getElementById("output").value = binaryToAny.hexadecimal;
    } else if (to === "Octal") {
      document.getElementById("output").value = binaryToAny.octal;
    } else {
      console.log("binary else");
    }
  } else if (from === "Decimal" && /^[0-9]+$/.test(no)) {

    const decimalToAny = convertDecimal(no);
    
    if (to === "Binary") {
      document.getElementById("output").value = decimalToAny.binary;
    } else if (to === "Decimal") {
      document.getElementById("output").value = decimalToAny.decimal;
    } else if (to === "Hexadecimal") {
      document.getElementById("output").value = decimalToAny.hexadecimal;
    } else if (to === "Octal") {
      document.getElementById("output").value = decimalToAny.octal;
    } else {
      console.log("decimal else");
    }
  } else if (from === "Hexadecimal" && /^[0-9A-Fa-f]+$/.test(no)) {

    const hexadecimalToAny = convertHexadecimal(no);

    if (to === "Binary") {
      document.getElementById("output").value = hexadecimalToAny.binary;
    } else if (to === "Decimal") {
      document.getElementById("output").value = hexadecimalToAny.decimal;
    } else if (to === "Hexadecimal") {
      document.getElementById("output").value = hexadecimalToAny.hexadecimal;
    } else if (to === "Octal") {
      document.getElementById("output").value = hexadecimalToAny.octal;
    } else {
      console.log("hexa else");
    }
  } else if (from === "Octal" && /^[0-7]+$/.test(no)) {

    const octalToAny = convertOctal(no);

    if (to === "Binary") {
      document.getElementById("output").value = octalToAny.binary;
    } else if (to === "Decimal") {
      document.getElementById("output").value = octalToAny.decimal;
    } else if (to === "Hexadecimal") {
      document.getElementById("output").value = octalToAny.hexadecimal;
    } else if (to === "Octal") {
      document.getElementById("output").value = octalToAny.octal;
    } else {
      console.log("octal else");
    }
  } else {
    alert("Invalid Input")
  }
});

const reset = document.querySelector(".reset-btn");

reset.addEventListener("click", () => {
  document.getElementById("input").value = "";
});

