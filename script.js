let getGrading = document.querySelector(`#get-grade`);
let getDiscountPrice = document.querySelector(`#get-discount`);
let getWeatherAdvice = document.querySelector(`#get-weather-advice`);
let startATM = document.querySelector(`#atm-simulation`);
let getAssistant = document.querySelector(`#get-assistant`);

//
//
// Simple Grading System >>>

getGrading.addEventListener(`click`, getGrade);
function getGrade(score) {
  score = Number(prompt(`Enter the Student score:`));

  if (score >= 90 && score < 100) {
    alert(`A`);
    return console.log(`Score: ${score} \nGrade: A`);
  } else if (score >= 80 && score < 90) {
    alert(`B`);
    return console.log(`Score: ${score} \nGrade: B`);
  } else if (score >= 70 && score < 80) {
    alert(`C`);
    return console.log(`Score: ${score} \nGrade: C`);
  } else if (score >= 60 && score < 70) {
    alert(`D`);
    return console.log(`Score: ${score} \nGrade: D`);
  } else if (score < 60 && score >= 0) {
    alert(`F`);
    return console.log(`Score: ${score} \nGrade: F`);
  } else if (score === 100) {
    alert(`Outstanding Grade, A+`);
    return console.log(`Score: ${score} \nGrade: A+`);
  } else {
    alert(`Invalid!!!`);
    return console.log(`Invalid Score`);
  }
}

//
//
// Discount Calculator >>>

getDiscountPrice.addEventListener(`click`, calculatePrice);
function calculatePrice(price, customerType, isFirstPurchase) {
  price = Number(prompt(`Enter the Product Price:`));
  customerType = prompt(
    `Are you a STUDENT, SENIOR or EMPLOYEE?:`
  ).toLowerCase();
  isFirstPurchase = confirm(`CLICK "OK" IF THIS IS YOUR FIRST PURCHASE.`);

  if (price && customerType === `student`) {
    if (isFirstPurchase) {
      let discountAmount = (15 / 100) * price;
      let finalPrice = price - discountAmount;

      alert(
        `🎉 Congratulations!!! You've got 15% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(
          2
        )}`
      );

      console.log(
        `Original Price: ${price} \nDiscount Percent: 15% \nFinal Price: ${finalPrice.toFixed(
          2
        )}`
      );
    }

    if (!isFirstPurchase) {
      let discountAmount = (10 / 100) * price;
      let finalPrice = price - discountAmount;

      alert(
        `🎉 Congratulations!!! You've got 10% Discount for your purchase, your price is now ${finalPrice}`
      );

      console.log(
        `Original Price: ${price} \nDiscount Percent: 10% \nFinal Price: ${finalPrice.toFixed(
          2
        )}`
      );
    }
  } else if (price && customerType === `senior`) {
    if (isFirstPurchase) {
      let discountAmount = (20 / 100) * price;
      let finalPrice = price - discountAmount;

      alert(
        `🎉 Congratulations!!! You've got 20% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(
          2
        )}`
      );

      console.log(
        `Original Price: ${price} \nDiscount Percent: 20% \nFinal Price: ${finalPrice.toFixed(
          2
        )}`
      );
    }

    if (!isFirstPurchase) {
      let discountAmount = (15 / 100) * price;
      let finalPrice = price - discountAmount;

      alert(
        `🎉 Congratulations!!! You've got 15% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(
          2
        )}`
      );

      console.log(
        `Original Price: ${price} \nDiscount Percent: 15% \nFinal Price: ${finalPrice.toFixed(
          2
        )}`
      );
    }
  } else if (price && customerType === `employee`) {
    if (isFirstPurchase) {
      let discountAmount = (25 / 100) * price;
      let finalPrice = price - discountAmount;

      alert(
        `🎉 Congratulations!!! You've got 25% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(
          2
        )}`
      );

      console.log(
        `Original Price: ${price} \nDiscount Percent: 25% \nFinal Price: ${finalPrice.toFixed(
          2
        )}`
      );
    }

    if (!isFirstPurchase) {
      let discountAmount = (20 / 100) * price;
      let finalPrice = price - discountAmount;

      alert(
        `🎉 Congratulations!!! You've got 20% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(
          2
        )}`
      );

      console.log(
        `Original Price: ${price} \nDiscount Percent: 20% \nFinal Price: ${finalPrice.toFixed(
          2
        )}`
      );
    }
  } else {
    alert(`🤯You cracked me up buddy!`);
  }
}

//
//
// Weather Advisor >>>

getWeatherAdvice.addEventListener(`click`, weatherAdvice);
function weatherAdvice(temperature, isRaining) {
  temperature = Number(prompt(`Enter your City's Temperature:`));
  isRaining = confirm(`IS IT RAINING?`);

  if (Number.isNaN(temperature)) {
    alert(`🤯You cracked me up buddy!`);
    console.log(`🤯You cracked me up buddy!`);
    return;
  }

  let advice;

  if (temperature <= 32) {
    advice = isRaining
      ? `Temperature: ${temperature} \nWeather Advice: 🌧️Freezing rain! Stay inside!`
      : `Temperature: ${temperature} \nWeather Advice: 🥶Very cold, wear a heavy coat!`;
  } else {
    advice =
      temperature >= 32 && temperature <= 60
        ? `Temperature: ${temperature} \nWeather Advice: ❄️Chilly, bring a jacket!`
        : temperature <= 80
        ? `Temperature: ${temperature} \nWeather Advice: 🌞It's a nice day!`
        : `Temperature: ${temperature} \nWeather Advice: 🍷It's hot, stay hydrated!`;
  }

  alert(advice);
  console.log(advice);
}

//
//
// ATM Simulation >>>

startATM.addEventListener(`click`, atm);
function atm(balance, action, amount) {
  balance = Number(prompt(`Enter your Account Balance:`));
  action = prompt(`DEPOSIT or WITHDRAW?`).toLowerCase();
  amount = Number(prompt(`Enter the amount:`));

  if (Number.isNaN(balance) || Number.isNaN(amount)) {
    alert(`🤯You cracked me up buddy!`);
    console.log(`🤯You cracked me up buddy!`);
    return;
  }

  if (action === `withdraw` && amount < 500) {
    if (balance > amount) {
      let balanceNew = balance - amount;
      alert(
        `You withdrawed ₦${amount} and your balance is now ₦${balanceNew.toFixed(
          2
        )}`
      );
      console.log(
        `You withdrawed ₦${amount} and your balance is now ₦${balanceNew.toFixed(
          2
        )}`
      );
    } else if (balance === amount) {
      alert(
        `You cannot withdraw all your balance, your balance is ₦${balance}`
      );
      console.log(
        `You cannot withdraw all your balance, your balance is ₦${balance}`
      );
    } else {
      alert(`🤯Insufficent Funds!`);
      console.log(`🤯Insufficent Funds!`);
    }
  } else if (action === `deposit`) {
    let balanceNew = balance + amount;
    alert(`You deposited ₦${amount} and your balance is now ₦${balanceNew}`);
    console.log(
      `You deposited ₦${amount} and your balance is now ₦${balanceNew}`
    );
  } else {
    alert(`🤯You cracked me up buddy!`);
    console.log(`🤯You cracked me up buddy!`);
  }
}

//
//
// Personal Assistant >>>

getAssistant.addEventListener(`click`, personalAssistant);
function personalAssistant(time, weather, dayType) {
  time = Number(prompt(`Enter Time of the Day (E.G 17.56):`)).toFixed(2);
  weather = prompt(
    `Enter your city weather (SUNNY, RAINY, CLOUDY):`
  ).toLowerCase();
  dayType = prompt(
    `Enter the day of the week (WORKDAY, WEEKEND, HOLIDAY):`
  ).toLowerCase();

  let aiAssistant;

  // Validating the time inputs >>>
  if (Number.isNaN(time) || time < 0.0 || time > 24.0) {
    alert(`Enter a valid 24hour time!⏲️`);
    console.log(`Enter a valid 24hour time!⏲️`);
  }

  // Validating the weather inputs >>>
  if (weather !== `sunny` && weather !== `rainy` && weather !== `cloudy`) {
    alert(`Enter a valid weather!🌦️`);
    console.log(`Enter a valid weather!🌦️`);
  }

  // Validating the day inputs >>>
  if (dayType !== `workday` && dayType !== `weekend` && dayType !== `holiday`) {
    alert(`Enter a valid day type!📅`);
    console.log(`Enter a valid day type!📅`);
  }

  aiAssistant =
    time <= 11.59
      ? `🌄Good Morning, Boss!`
      : time >= 12.0 && time <= 15.59
      ? `☀️Good Afteroon, Boss!`
      : time >= 16.0 && time <= 21.59
      ? `🌥️Good evening, Boss!`
      : time >= 22.0 && time <= 23.0
      ? `💤Good Night, my Oga!`
      : time >= 23.01 && time <= 24.0
      ? `This is the zero-hour boss! Time to pray!🙏🏽`
      : `Error! Enter a valid time in 24hours format!`;

  alert(aiAssistant);
  console.log(aiAssistant);

  if (weather === `sunny` && dayType && time >= 0.0 && time <= 24.0) {
    if (dayType === `weekend`) {
      aiAssistant = `Its the weekend, relax and chop life.`;
    } else if (dayType === `holiday`) {
      aiAssistant = `Have a great holiday my oga!🎉`;
    } else if (dayType === `workday`) {
      aiAssistant = `Its a great weather today, do have a nice day ahead boss!😊👋`;
    } else {
      aiAssistant = `I think you made an inputed mistake. check your input again my guy.😊`;
    }
  } else if (weather === `rainy` && dayType && time >= 0.0 && time <= 24.0) {
    if (dayType === `weekend`) {
      aiAssistant = `My oga, its weekend and its rainy outside, consider staying indoor or perhaps take an umbrella when going out 😊.`;
    } else if (dayType === `holiday`) {
      aiAssistant = `Holiday is here, enjoy life boss! ⛳`;
    } else if (dayType === `workday`) {
      aiAssistant = `Its raining outside, you should take an umbrella with you.😊`;
    } else {
      aiAssistant = `Inputed error, please check again.`;
    }
  } else if (weather === `cloudy` && dayType && time >= 0.0 && time <= 24.0) {
    if (dayType === `weekend`) {
      aiAssistant = `Weekend is here boss, consider taking an umbrella when going out.☂️`;
    } else if (dayType === `holiday`) {
      aiAssistant = `It's cloudy outside boss, enjoy the holiday!🎉`;
    } else if (dayType === `workday`) {
      aiAssistant = `I think its about to rain because of the cloudy nature outside, consider taking an umbrella to work boss! 🌂`;
    } else {
      aiAssistant = `Inputed error, please check again.`;
    }
  } else {
    aiAssistant = `THERE IS AN ERROR SOMEWHERE!!! ❌❌❌`;
  }

  alert(aiAssistant);
  console.log(aiAssistant);
}
