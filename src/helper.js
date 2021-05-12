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

export const calculateMillisecondsToDays = (ms) => {
  return ms / 86400000;
};

export const get12hrTime = (time) => {
  let hr = Number(time.substring(0, 2));
  let min = time.substring(3, 5);

  if (hr === 0) {
    return `12:${min} AM`;
  }
  if (hr === 12) {
    return `12:${min} PM`;
  }
  if (hr > 12) {
    return `${hr - 12}:${min} PM`;
  } else {
    return `${time} AM`;
  }
};

export const getDay = (day) => {
  if(day === 'Sunday'){
    return 0;
  }else if(day === 'Monday'){
    return 1;
  }else if(day === 'Tuesday'){
    return 2;
  }else if(day === 'Wednesday'){
    return 3;
  }else if(day === 'Thursday'){
    return 4;
  }else if(day === 'Friday'){
    return 5;
  }else{
    return 6;
  }
}