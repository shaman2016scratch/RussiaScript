// RussiaScript code
// код RussiaScript
RussiaScriptOutput = '[]'
function SessionRussiaScript(RK) {
  SessionRussiaScript = {
    "ОС": "HarmonyOS",
    "ИмяПрограммы": "RussiaScriptRinner",
    "Язык": "Ru",
    "Версия RussiaScript": "1.0",
    "User-agent": "Mozilla/5.0"
  }
  SessionRS = JSON.stringify(SessionRussiaScript)
  OperationSystems = [
    "Unix",
    "MacOS",
    "BSD",
    "Linux",
    "Android",
    "HarmonyOS",
    "ios",
    "ipadOS",
    "tvOS"
  ]
  SessionRS.["ИмяПрограммы"] = RK.progname
  SessionRS.["Язык"] = RK.lang
  SessionRS.["Версия RussiaScript"] = "1.0"
  UserAgent = fetch('https://httpbin.org/user-agent', {  
        method: 'GET',  
        headers: { 
          "Content-Type": "application/json",  
        }
      })
  SessionRS.["User-agent"] = UserAgent.["user-agent"]
  OperationSystem = RK.os
  OperationSystem = fetch(`https://shaman2016scratch.github.io/os?os="${OperationSystem}"`, {  
        method: 'GET',  
        headers: { 
          "Content-Type": "application/json",  
        }
      })
  SessionRS.["ОС"] = OperationSystem
  SessionRussiaScript = JSON.parse(SessionRS)
}
function runRussiaScript(code) {
  DataTypes = [
    "text",
    "math",
    "boolean",
    "peremens",
    "block"
  ]
  RussiaScriptCommands = [
    "Очистить Вывод",
    "http запрос",
    "Вывести",
    "json",
    "dom",
    "Задать переменной значение",
    "Импортировать расширение",
    "Получить значение переменной"
  ]
  LibsRussiaScript = code.libs
  codeRussiaScript = code.code
  RunKey = code.RunKey
  SessionRussiaScript(RunKey)
  Peremens = {}
  i = 0
  i2 = 'true'
  while (i2) {
    if (codeRussiaScript.length < i) {
      i2 = (false)
    } else {
      i2 = (true)
    }
    i++
    i3 = codeRussiaScript.[i]
    i4 = i3.command
    i5 = i4.params
    if (i4 == 'Очистить Вывод') {
      RussiaScriptOutput = []
    }
    if (i4 == 'http запрос') {
      HttpZapros = [
        "Post",
        "Delete",
        "Get"
      ]
    }
    if (i4 == 'Вывести') {
      RussiaScriptOutput.push(i5["Текст вывода"])
    }
    if (i4 == 'json') {
      RSjsonData = {
        "Operations": [
          "в Json-строку",
          "в JavaScript обьект",
          "Пустой объект",
          "Пустой Массив",
          "Задать ключ в объекте",
          "Добавить элемент в начало массива",
          "Добавить элемент в массив",
          "Добавитл элемент в массив в место",
          "Удалить из объекта",
          "Удалить последний элемент массива",
          "Удалить первый элемент массива",
          "Удалить элемент массива",
          "Получить элемент массива",
          "Получить элемент объекта"
        ]
      }
    }
    if (i4 == 'dom') {
      RsDomData = {
        "Operations": [
          "getElement",
          "innerHTML",
          "TextContent",
          "GetValue",
          "NewElement"
        ]
      }
    }
    if (i4 == 'Задать переменной значение') {
      peremens[i5.per] = i5.value
    }
    if (i4 == 'Импортировать расширение') {
      console.error("RussiaScript Error: Import, Extensions (Libraries) not support!")
    }
  }
}
function RunRsCodeFromUrl(url) {
  getCode = fetch(url, {  
    method: 'GET',  
    headers: { 
      "Content-Type": "application/json",  
    }
  })
  runRussiaScript(getCode)
}
function RussiaScriptGetValue(v) {
  ii = v.type
  ii2 = v.value
  if (ii = 'текст') {
    return (ii2)
  }
  if (ii = 'переменная') {
    return peremens[ii2]
  }
  if (ii = 'get') {
    return fetch(ii2, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii = 'зget') {
    return fetch(RussiaScriptGetValue(ii2), {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii = 'post') {
    return fetch(ii2, {  
      method: 'POST',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii = 'зpost') {
    return fetch(RussiaScriptGetValue(ii2), {  
      method: 'POST',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii = 'delete') {
    return fetch(ii2, {  
      method: 'DELETE',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii = 'зdelete') {
    return fetch(RussiaScriptGetValue(ii2), {  
      method: 'DELETE',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii == 'Пустой массив') {
    return []
  }
  if (ii == 'Пустой объект') {
    return {}
  }
  if (ii == 'математика') {
    ii3 = ii2['операция']
    ii4 = ii2['значение']
    if (ii3 == '+') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 + ii6)
    }
    if (ii3 == '-') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 - ii6)
    }
    if (ii3 == '*') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 * ii6)
    }
    if (ii3 == '÷') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 / ii6)
    }
    if (ii3 == '/') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 / ii6)
    }
    if (ii3 == '%') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 % ii6)
    }
    if (ii3 == '^') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 ** ii6)
    }
    if (ii3 == '**') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 ** ii6)
    }
    if (ii3 == '×') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return (ii5 * ii6)
    }
    if (ii3 == 'з+') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 + ii6)
    }
    if (ii3 == 'з-') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 - ii6)
    }
    if (ii3 == 'з*') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 * ii6)
    }
    if (ii3 == 'з÷') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 / ii6)
    }
    if (ii3 == 'з/') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 / ii6)
    }
    if (ii3 == 'з%') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 % ii6)
    }
    if (ii3 == 'з^') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 ** ii6)
    }
    if (ii3 == 'з**') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 ** ii6)
    }
    if (ii3 == 'з×') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 * ii6)
    }
  }
  if (ii == обьеденить2) {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    return (`${ii3}${ii4}`)
  }
  if (ii == обьеденить3) {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    return (`${ii3}${ii4}${ii5}`)
  }
  if (ii == обьеденить4) {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    ii6 = RussiaScriptGetValue(ii2[4])
    return (`${ii3}${ii4}${ii5}${ii6}`)
  }
}
