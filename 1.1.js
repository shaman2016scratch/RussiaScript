// RussiaScript code
// код RussiaScript
RussiaScriptOutput = []
Peremens = {}
filesRS = []
sys = {
  "lang": "ru",
  "os": "kakaya-to operactionka"
}
RussiaScriptUser = {
  "func": {
    "return": "function\(args\) \{ return \(args\) \}",
  },
  "libs": {},
  "libsInfo": {},
  "LibsList": [],
}
function RussiaScriptTerminal(command, params) {
  if (command == 'pip Extension') {
    Ext = fetch(params.ext.url, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
    RussiaScriptUser.LibsList.push(eval(`${Ext}; return ExtLibRS.id`))
    RussiaScriptUser.libsInfo[params.ext.name] = eval(`${Ext}; return ExtLibRS`)
    RussiaScriptUser.libs[RussiaScriptUser.libsInfo[params.ext.name].id] = eval(`${Ext}; return Ext_${RussiaScript.libsInfo[params.ext.name].id}`)
  }
  if (command == 'get os') {
    return SessionRussiaScript['ОС']
  }
  if (command == 'get session') {
    return SessionRussiaScript
  }
  if (command == 'get system') {
    return sys
  }
  if (command == 'set system') {
    sys = params
    return {"ok":"true"}
  }
  if (command == 'get files') {
    return filesRS
  }
  if (command == 'new file') {
    filesRS.push(params.name)
    filesDataRS[params.name] = {
      "type": params.type,
      "args": [],
      "args2": {}
    }
    return filesDataRS
  }
  if (command == 'new file in') {
    filesRS[params.in].args.push(params.file.name)
    filesDataRS[params.in].args2[params.file.name] = {
      "type": params.file.type,
      "args": [],
      "args2": {},
    }
    return filesDataRS
  }
  if (command == 'get data files') {
    return filesDataRS
  }
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
    if (ii3 == 'abs') {
      return Math.abs(ii4)
    }
    if (ii3 == 'min') {
      return Math.min(ii4)
    }
    if (ii3 == 'max') {
      return Math.max(ii4)
    }
    if (ii3 == 'округлить') {
      return Math.round(ii4)
    }
    if (ii3 == 'целое меньшее') {
      return Math.floor(ii4)
    }
    if (ii3 == 'целое большее') {
      return Math.ceil(ii4)
    }
    if (ii3 == 'зabs') {
      return Math.abs(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зmin') {
      return Math.min(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зmax') {
      return Math.max(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зокруглить') {
      return Math.round(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зцелое меньшее') {
      return Math.floor(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зцелое большее') {
      return Math.ceil(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'рандом') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return Math.random(ii5, ii6)
    }
    if (ii3 == 'pow') {
      ii5 = ii4[1]
      ii6 = ii4[2]
      return Math.pow(ii5, ii6)
    }
    if (ii3 == 'квадратный корень') {
      return Math.sqrt(ii4)
    }
    if (ii3 == 'синус') {
      return Math.sin(ii4)
    }
    if (ii3 == 'зрандом') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return Math.random(ii5, ii6)
    }
    if (ii3 == 'зpow') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return Math.pow(ii5, ii6)
    }
    if (ii3 == 'зквадратный корень') {
      return Math.sqrt(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зсинус') {
      return Math.sin(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'косинус') {
      return Math.cos(ii4)
    }
    if (ii3 == 'тангенс') {
      return Math.tan(ii4)
    }
    if (ii3 == 'арксинус') {
      return Math.asin(ii4)
    }
    if (ii3 == 'арккосинус') {
      return Math.acos(ii4)
    }
    if (ii3 == 'арктангенс') {
      return Math.atan(ii4)
    }
    if (ii3 == 'зкосинус') {
      return Math.cos(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зтангенс') {
      return Math.tan(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зарксинус') {
      return Math.asin(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зарккосинус') {
      return Math.acos(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'зарктангенс') {
      return Math.atan(RussiaScriptGetValue(ii4))
    }
  }
  if (ii == 'обьеденить2') {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    return (`${ii3}${ii4}`)
  }
  if (ii == 'обьеденить3') {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    return (`${ii3}${ii4}${ii5}`)
  }
  if (ii == 'обьеденить4') {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    ii6 = RussiaScriptGetValue(ii2[4])
    return (`${ii3}${ii4}${ii5}${ii6}`)
  }
  if (ii == 'обьеденить5') {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    ii6 = RussiaScriptGetValue(ii2[4])
    ii7 = RussiaScriptGetValue(ii2[5])
    return (`${ii3}${ii4}${ii5}${ii6}${ii7}`)
  }
  if (ii == 'json') {
    ii3 = ii2['действие']
    ii4 = ii2['значение']
    if (ii3 == 'в json строку') {
      return JSON.stringify(ii4)
    }
    if (ii3 == 'zв json строку') {
      return JSON.stringify(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'в JavaScript-объект') {
      return JSON.parse(ii4)
    }
    if (ii3 == 'зв JavaScript-объект') {
      return JSON.parse(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'Задать ключ в объекте') {
      ii5 = ii4.json
      ii6 = ii4.key
      ii7 = ii4.value
      ii5[ii6] = ii7
      return ii5[ii6]
    }
    if (ii3 == 'зЗадать ключ в объекте') {
      ii5 = RussiaScriptGetValue(ii4.json)
      ii6 = RussiaScriptGetValue(ii4.key)
      ii7 = RussiaScriptGetValue(ii4.value)
      ii5[ii6] = ii7
      return ii5[ii6]
    }
    if (ii3 == 'Добавить элемент в начало массива') {
      ii5 = ii4.array
      ii6 = ii4.text
      ii5.unshift(ii6)
      return ii5
    }
    if (ii3 == 'зДобавить элемент в начало массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.text)
      ii5.unshift(ii6)
      return ii5
    }
    if (ii3 == 'Добавить элемент в массив') {
      ii5 = ii4.array
      ii6 = ii4.text
      ii5.push(ii6)
      return ii5
    }
    if (ii3 == 'зДобавить элемент в массив') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.text)
      ii5.push(ii6)
      return ii5
    }
    if (ii3 == 'Добавить элемент в массив в место') {
      ii5 = ii4.array
      ii6 = ii4.text
      ii7 = ii4.n
      ii5.splice(ii7, 1, ii6)
      return ii5
    }
    if (ii3 == 'зДобавить элемент в массив в место') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.text)
      ii7 = RussiaScriptGetValue(ii4.n)
      ii5.splice(ii7, 1, ii6)
      return ii5
    }
    if (ii3 == 'Удалить из объекта') {
      ii5 = ii4.json
      ii6 = ii4.n
      delete ii5[ii6] 
      return ii5
    }
    if (ii3 == 'зУдалить из объекта') {
      ii5 = RussiaScriptGetValue(ii4.json)
      ii6 = RussiaScriptGetValue(ii4.n)
      delete ii5[ii6] 
      return ii5
    }
    if (ii3 == 'Удалить последний элемент массива') {
      ii5 = ii4.array
      ii5.pop()
      return ii5
    }
    if (ii3 == 'зУдалить последний элемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii5.pop()
      return ii5
    }
    if (ii3 == 'Удалить первый элемент массива') {
      ii5 = ii4.array
      ii5.shift()
      return ii5
    }
    if (ii3 == 'зУдалить первый элемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii5.shift()
      return ii5
    }
    if (ii3 == 'Удалить элемент массива') {
      ii5 = ii4.array
      ii6 = ii4.n
      ii5.splice(ii6, 1)
      return ii5
    }
    if (ii3 == 'зУдалить элемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.n)
      ii5.splice(ii6, 1)
      return ii5
    }
    if (ii3 == 'Элемент массива') {
      ii5 = ii4.array
      ii6 = ii4.n
      return ii5[ii6]
    }
    if (ii3 == 'Элемент объекта') {
      ii5 = ii4.json
      ii6 = ii4.key
      return ii5[ii6]
    }
    if (ii3 == 'зЭлемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.n)
      return ii5[ii6]
    }
    if (ii3 == 'зЭлемент объекта') {
      ii5 = RussiaScriptGetValue(ii4.json)
      ii6 = RussiaScriptGetValue(ii4.key)
      return ii5[ii6]
    }
  }
  if (ii == 'обьеденить6') {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    ii6 = RussiaScriptGetValue(ii2[4])
    ii7 = RussiaScriptGetValue(ii2[5])
    ii8 = RussiaScriptGetValue(ii2[6])
    return (`${ii3}${ii4}${ii5}${ii6}${ii7}${ii8}`)
  }
  if (ii == 'пи') {
    return Math.PI
  }
  if (ii == 'число Эйлера') {
    return Math.E
  }
  if (ii == 'обьеденить7') {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    ii6 = RussiaScriptGetValue(ii2[4])
    ii7 = RussiaScriptGetValue(ii2[5])
    ii8 = RussiaScriptGetValue(ii2[6])
    ii9 = RussiaScriptGetValue(ii2[7])
    return (`${ii3}${ii4}${ii5}${ii6}${ii7}${ii8}${ii9}`)
  }
  if (ii == 'обьеденить8') {
    ii3 = RussiaScriptGetValue(ii2[1])
    ii4 = RussiaScriptGetValue(ii2[2])
    ii5 = RussiaScriptGetValue(ii2[3])
    ii6 = RussiaScriptGetValue(ii2[4])
    ii7 = RussiaScriptGetValue(ii2[5])
    ii8 = RussiaScriptGetValue(ii2[6])
    ii9 = RussiaScriptGetValue(ii2[7])
    ii10 = RussiaScriptGetValue(ii2[8])
    return (`${ii3}${ii4}${ii5}${ii6}${ii7}${ii8}${ii9}${ii10}`)
  }
  if (ii == 'getElement') {
    return document.getElementById(RussiaScriptGetValue(ii2['значение']))
  }
  if (ii == 'GetValue') {
    return document.getElementById(RussiaScriptGetValue(ii2['значение'])).value
  }
  if (ii == 'GetDocument') {
    return document
  }
  if (ii == 'Terminal') {
    return RussiaScriptTerminal(RussiaScriptGetValue(ii2.com), RussiaScriptGetValue(ii2.par))
  }
  if (ii == 'и') {
    return (RussiaScriptGetValue(ii2[1]) && RussiaScriptGetValue(ii2[2]))
  }
  if (ii == 'или') {
    return (RussiaScriptGetValue(ii2[1]) || RussiaScriptGetValue(ii2[2]))
  }
  if (ii == '=') {
    return (RussiaScriptGetValue(ii2[1]) == RussiaScriptGetValue(ii2[2]))
  }
  if (ii == '<') {
    return (RussiaScriptGetValue(ii2[1]) < RussiaScriptGetValue(ii2[2]))
  }
  if (ii == '>') {
    return (RussiaScriptGetValue(ii2[1]) > RussiaScriptGetValue(ii2[2]))
  }
  if (ii == 'не') {
    return (RussiaScriptGetValue(ii2[1]) != (true))
  }
  if (ii == 'true') {
    return (true)
  }
  if (ii == 'false') {
    return (false)
  }
  if (ii == 'пользователь' || ii == 'user') {
    if (ii2.type == 'функция') {
      return RussiaScriptUser.func[ii2.func]
    }
  }
  if (ii == 'lib' || ii == 'ext' || ii == 'либ') {
    return RussiaScriptUser.libs[RussiaScriptUser.libsInfo[RussiaScriptGetValue(ii2.name)].id].reporters[RussiaScriptGetValue(ii2.func)]
  }
  if (ii == 'вывод' || ii == output) {
    return RussiaScriptOutput
  }
  if (ii == 'prompt') {
    return prompt(RussiaScriptGetValue(ii2))
  }
  if (ii == 'comfirm') {
    return comfirm(RussiaScriptGetValue(ii2))
  }
}
function SessionRussiaScript() {
  SessionRussiaScript = {
    "ОС": sys.os,
    "Язык": sys.lang,
    "Версия RussiaScript": "1.1",
    "User-agent": "Mozilla/5.0"
  }
  UserAgent = fetch('https://httpbin.org/user-agent', {  
        method: 'GET',  
        headers: { 
          "Content-Type": "application/json",  
        }
      })
  SessionRussiaScript.["User-agent"] = UserAgent.["user-agent"]
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
  SessionRussiaScript()
  termRussiaScript = code.terminal
  i = 0
  i2 = 'true'
  while (i2) {
    if (codeRussiaScript.length < i) {
      i2 = (false)
    } else {
      i2 = (true)
    }
    i++
    i3 = codeRussiaScript[i]
    i4 = i3.command
    i5 = i3.params
    if (i4 == 'Очистить Вывод') {
      RussiaScriptOutput = []
    }
    if (i4 == 'http запрос') {
      HttpZapros = [
        "Post",
        "Delete",
        "Get"
      ]
      fetch(i5.url, i5.params)
    }
    if (i4 == 'Вывести') {
      RussiaScriptOutput.push(RussiaScriptGetValue(i5["Текст вывода"]))
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
          "Добавить элемент в массив в место",
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
          "GetValue"
        ]
      }
      if (RussiaScriptGetValue(i5["метод"]) == "innerHTML") {
        document.getElementById(RussiaScriptGetValue(i5["элемент"])).innerHTML = RussiaScriptGetValue(i5["значение"]);
      }
      if (RussiaScriptGetValue(i5["метод"]) == "TextContent") {
        document.getElementById(RussiaScriptGetValue(i5["элемент"])).textContent = RussiaScriptGetValue(i5["значение"]);
      }
    }
    if (i4 == 'Задать переменной значение') {
      peremens[RussiaScriptGetValue(i5.per)] = RussiaScriptGetValue(i5.value)
    }
    if (i4 == 'Импортировать расширение' || i4 == 'Импротировать библиотеку') {
      console.error(`RussiaScript error (line ${i}): command 'import' outdated, use the terminal RussiaScript|Команда '${i4}' устарела, используйте терминал + команду lib (lib, ext, либ)`)
    }
    if (i4 == 'js-консоль') {
      if (i5['метод'] == 'лог') {
        console.log(RussiaScriptGetValue(i5['значение']))
      }
      if (i5['метод'] == 'предупреждение') {
        console.warn(RussiaScriptGetValue(i5['значение']))
      }
      if (i5['метод'] == 'ошибка') {
        console.error(RussiaScriptGetValue(i5['значение']))
      }
    }
    if (i4 == 'если') {
      if (RussiaScriptGetValue(i5.bol)) {
        RunRussiaScript(RussiaScriptGetValue(i5["то"]))
      } else {
        RunRussiaScript(RussiaScriptGetValue(i5["иначе"]))
      }
    }
    if (i4 == 'js-функция') {
      RussiaScriptUser.func[RussiaScriptGetValue(i5.name)] = `function(args) \{ ${RussiaScriptGetValue(i5.code)} \}`
    }
    if (i4 == 'rs-функция') {
      RussiaScriptUser.func[RussiaScriptGetValue(i5.name)] = `function(args) \{ RunRussiaScript${RussiaScriptGetValue(i5.code)} \}`
    }
    if (i4 == 'пользователь' || i4 == 'user') {
      if (i5.type == 'функция') {
        RussiaScriptUser.func[RussiaScriptGetValue(i5.func)]
      }
    }
    if (ii == 'lib' || ii == 'ext' || ii == 'либ') {
      RussiaScriptUser.libs[RussiaScriptUser.libsInfo[RussiaScriptGetValue(ii2.name)].id].reporters[RussiaScriptGetValue(ii2.func)]
    }
    if (i4 == 'пока') {
      while (RussiaScriptGetValue(i5.bol)) {
        RunRussiaScript(RussiaScriptGetValue(i5.code))
      }
    }
    if (i4 == 'alert') {
      alert(RussiaScriptGetValue(i5))
    }
    if (i4 == 'rs-консоль') {
      
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
