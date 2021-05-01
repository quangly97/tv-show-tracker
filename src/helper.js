export const getMonth = (number) => {
  if (number === "01") {
    return "January";
  } else if (number === "02") {
    return "February";
  } else if (number === "03") {
    return "March";
  } else if (number === "04") {
    return "April";
  } else if (number === "05") {
    return "May";
  } else if (number === "06") {
    return "June";
  } else if (number === "07") {
    return "July";
  } else if (number === "08") {
    return "August";
  } else if (number === "09") {
    return "September";
  } else if (number === "10") {
    return "October";
  } else if (number === "11") {
    return "November";
  } else if (number === "12") {
    return "December";
  }
};

export const getName = (name) => {
  const newName = name.replace(/\s/g, "-").toLowerCase();
  return newName;
};

