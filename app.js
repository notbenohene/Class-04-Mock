function whatDayIsIt() { // camel case naming
let dayOfWeek = prompt("What Day Is It?")
    console.log(typeof(dayOfWeek)); 
let mango;
    if (dayOfWeek === 'Monday'){
        mango = 'Mallika Mango '
    } else if (dayOfWeek === 'Tuesday'){
        mango = 'Tommy Atkins Mango '
    } else if (dayOfWeek === 'Wednesday'){
        mango = 'Wednesday Mango '
    } else if (dayOfWeek === 'Thursday'){
        mango = 'Tommy Atkins Mango '
    } else if (dayOfWeek === 'Friday'){
        mango = 'Francis Mango '
    } else if (dayOfWeek === 'Saturday'){
        mango = 'Sunset Mango '
    } else if (dayOfWeek === 'Sunday'){
        mango = 'Sunset Mango '
    }

    document.write(mango + dayOfWeek + '!');

function askNumber() {
  let number = prompt('Pick a number between 1 and 5.');
  console.log(typeof(number));
  
  while (!number){
    number = prompt('Go ahead and enter that number.');
  }
  
  alert('Here you go!');
  return number;
}

let number = parseInt(askNumber());
console.log(typeof(number));

for (let i = 0; i < number; i++) {
  console.log(i);
  document.write('<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHpuejMycWpscTNsbnR2bWE0bG04NzI1bHlibmt0Mnl4d3o5N3Z6OCZlcD12MV9naWZzX3NlYXJjaCZjdD1z/Mfi6kHoONUMH2CQftr/giphy.gif">');
}
}

//     if (militaryTime < 12) {
//       document.write(mango + dayOfWeek + '!');
//     } else if (militaryTime > 23) {
//       document.write('That is not a valid time unit');
//     } else {
//       document.write('It is ' + dayOfWeek + ' in the afternoon /evening');
//     }
  