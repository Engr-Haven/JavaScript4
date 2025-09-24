let getGrading = document.querySelector(`#get-grade`);
let getDiscountPrice = document.querySelector(`#get-discount`);
let getWeatherAdvice = document.querySelector(`#get-weather-advice`);
let startATM = document.querySelector(`#atm-simulation`);



getGrading.addEventListener(`click`, getGrade)
function getGrade(score) {
    score = Number(prompt(`Enter the Student score:`));

    if (score >= 90 && score < 100) {
        alert(`A`)
        return console.log(`Score: ${score} \nGrade: A`);
    }else if (score >= 80 && score < 90) {
        alert(`B`)
        return console.log(`Score: ${score} \nGrade: B`);
    }else if (score >= 70 && score < 80) {
        alert(`C`)
        return console.log(`Score: ${score} \nGrade: C`);
    }else if (score >= 60 && score < 70) {
        alert(`D`)
        return console.log(`Score: ${score} \nGrade: D`);
    }else if (score < 60 && score >= 0 ) {
        alert(`F`)
        return console.log(`Score: ${score} \nGrade: F`);
    }else if (score === 100) {
        alert(`Outstanding Grade, A+`)
        return console.log(`Score: ${score} \nGrade: A+`);
    }else {
        alert(`Invalid!!!`)
        return console.log(`Invalid Score`);
    }
}



getDiscountPrice.addEventListener(`click`, calculatePrice)
function calculatePrice(price, customerType, isFirstPurchase) {
    price = Number(prompt(`Enter the Product Price:`));
    customerType = (prompt(`Are you a STUDENT, SENIOR or EMPLOYEE?:`)).toLowerCase();
    isFirstPurchase = confirm(`CLICK "OK" IF THIS IS YOUR FIRST PURCHASE.`);

    if (price && customerType === `student`) {

        if (isFirstPurchase) {
            let discountAmount = (15 / 100) * price;
            let finalPrice = price - discountAmount;

            alert(`🎉 Congratulations!!! You've got 15% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(2)}`)

            console.log(`Original Price: ${price} \nDiscount Percent: 15% \nFinal Price: ${finalPrice.toFixed(2)}`);
        }

        if (!isFirstPurchase) {
            let discountAmount = (10 / 100) * price
            let finalPrice = price - discountAmount

            alert(`🎉 Congratulations!!! You've got 10% Discount for your purchase, your price is now ${finalPrice}`)

            console.log(`Original Price: ${price} \nDiscount Percent: 10% \nFinal Price: ${finalPrice.toFixed(2)}`);
        }
    } else if (price && customerType === `senior`) {

        if (isFirstPurchase) {
            let discountAmount = (20 / 100) * price;
            let finalPrice = price - discountAmount;

            alert(`🎉 Congratulations!!! You've got 20% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(2)}`)

            console.log(`Original Price: ${price} \nDiscount Percent: 20% \nFinal Price: ${finalPrice.toFixed(2)}`);
        }

        if (!isFirstPurchase) {
            let discountAmount = (15 / 100) * price;
            let finalPrice = price - discountAmount;

            alert(`🎉 Congratulations!!! You've got 15% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(2)}`)

            console.log(`Original Price: ${price} \nDiscount Percent: 15% \nFinal Price: ${finalPrice.toFixed(2)}`);
        }
    } else if (price && customerType === `employee`) {
        
        if (isFirstPurchase) {
            let discountAmount = (25 / 100) * price;
            let finalPrice = price - discountAmount;

            alert(`🎉 Congratulations!!! You've got 25% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(2)}`)

            console.log(`Original Price: ${price} \nDiscount Percent: 25% \nFinal Price: ${finalPrice.toFixed(2)}`);
        }

        if (!isFirstPurchase) {
            let discountAmount = (20 / 100) * price;
            let finalPrice = price - discountAmount;

            alert(`🎉 Congratulations!!! You've got 20% Discount for your purchase because it's your first time here, your price is now ${finalPrice.toFixed(2)}`)

            console.log(`Original Price: ${price} \nDiscount Percent: 20% \nFinal Price: ${finalPrice.toFixed(2)}`);
        }
    } else {
        alert(`🤯You cracked me up buddy!`)
    }
}



getWeatherAdvice.addEventListener(`click`, weatherAdvice)
function weatherAdvice(temperature, isRaining) {
    temperature = Number(prompt(`Enter your City's Temperature:`));
    isRaining = confirm(`IS IT RAINING?`);

    if (Number.isNaN(temperature)) {
        alert(`🤯You cracked me up buddy!`)
        console.log(`🤯You cracked me up buddy!`);
        return
    }

    let advice;
    
    if (temperature <= 32) {
        advice = isRaining 
        ? `Temperature: ${temperature} \nWeather Advice: 🌧️Freezing rain! Stay inside!` 
        : `Temperature: ${temperature} \nWeather Advice: 🥶Very cold, wear a heavy coat!`
    }else {
        advice = temperature >= 32 && temperature <= 60 
        ? `Temperature: ${temperature} \nWeather Advice: ❄️Chilly, bring a jacket!`
        :temperature <= 80 
        ? `Temperature: ${temperature} \nWeather Advice: 🌞It's a nice day!` 
        : `Temperature: ${temperature} \nWeather Advice: 🍷It's hot, stay hydrated!`
    }

    alert(advice)
    console.log(advice);
}



startATM.addEventListener(`click`, atm)
function atm(balance, action, amount) {
    balance = Number(prompt(`Enter your Account Balance:`));
    action = (prompt(`DEPOSIT or WITHDRAW?`)).toLowerCase();
    amount = Number(prompt(`Enter the amount:`));

    if (Number.isNaN(balance) || Number.isNaN(amount)) {
        alert(`🤯You cracked me up buddy!`)
        console.log(`🤯You cracked me up buddy!`);
        return
    }

    if (action === `withdraw` && amount < 500) {
        if (balance > amount) {
            let balanceNew = balance - amount;
            alert(`You withdrawed ${amount} and your balance is now ${balanceNew.toFixed(2)}`)
            console.log(`You withdrawed ${amount} and your balance is now ${balanceNew.toFixed(2)}`);
        }else if (balance === amount) {
            alert(`You cannot withdraw all your balance, your balance is ${balance}`)
            console.log(`You cannot withdraw all your balance, your balance is ${balance}`)
        }else {
            alert(`🤯Insufficent Funds!`)
            console.log(`🤯Insufficent Funds!`)
        }
    }else if (action === `deposit`) {
        let balanceNew = balance + amount;
        alert(`You deposited ${amount} and your balance is now ${balanceNew}`)
        console.log(`You deposited ${amount} and your balance is now ${balanceNew}`);
    }else {
        alert(`🤯You cracked me up buddy!`)
        console.log(`🤯You cracked me up buddy!`);
    }
}