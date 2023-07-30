const resultsElement = document.getElementById('results')
// обращаемся по id к элементу

/*console.log(resultsElement.textContent) текст контент
показывает что находится в значении results
*/
const resultBtn = document.getElementById('result')
// обращаемся к кнопке по id

// Обращаемся к инпутам
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

// поочередно ко всем конопкам 
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')

let action = '+'

/* js все элементы в html видит как строку
поэтому нужно примести к нужному типу данных */
const sum = Number(input1.value) + Number(input2.value)
resultsElement.textContent = sum



plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplyBtn.onclick = function () {
    action = '*'
}

divideBtn.onclick = function () {
    action = '/'
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2 
    }
    else if (actionSymbol == '-') {
       return num1 - num2
    }
     else if (actionSymbol =='*') {
        return num1 * num2
    }
    else if (actionSymbol =='/') {
        return num1 / num2
    }
}

//  почитать про тернарное выражение

/* функция. если result меньше 0, то цвет красный
если больше то зеленый
присвоим значение текстКонтент result */
function printResult(result) {
    if (result < 0) {
        resultsElement.style.color = 'red'
    } else {
        resultsElement.style.color = 'green'
    }
    resultsElement.textContent = result
}


resultBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    printResult(result)


    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    
    // }

    // else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
    // else if (action == '*') {
    //     const sum = Number(input1.value) * Number(input2.value)
    //     printResult(sum) 
    // }
    // else if (action == '/') {
    //     const sum = Number(input1.value) / Number(input2.value)
    //     printResult(sum)
    // }
    
}