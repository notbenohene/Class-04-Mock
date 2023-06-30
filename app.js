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

    document.write(mango + dayOfWeek + '!')

        
  
//     if (militaryTime < 12) {
//       document.write(mango + dayOfWeek + '!');
//     } else if (militaryTime > 23) {
//       document.write('That is not a valid time unit');
//     } else {
//       document.write('It is ' + dayOfWeek + ' in the afternoon /evening');
//     }
  }