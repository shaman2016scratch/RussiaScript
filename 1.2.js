// RussiaScript code
// код RussiaScript
RussiaScriptOutput = []
Peremens = {}
filesRS = []
filesDataRS = {}
sys = {
  "lang": "ru",
  "os": "kakaya-to operactionka",
  "RussiaScript": {
    "version": "1.2",
    "terminal version": "1.2.0",
  },
}
RussiaScriptUser = {
  "func": {
    "return": "function(args) { return (args) }",
  },
  "libs": {},
  "libsInfo": {},
  "LibsList": [],
  "rs консоль": [],
  "config": {},
  "sysModules": {
    "Chat Bot": {},
  },
}
function RussiaScriptPomogFunc(args) {}
function RsJsConsole(ty, te) {
  if (ty === 'log') {
    console.log(`RussiaScript: ${te}`)
  }
  if (ty === 'warn') {
    console.warn(`RussiaScript warn: ${te}`)
  }
  if (ty === 'error') {
    console.error(`RussiaScript error: ${te}`)
  }
  if (ty === 'input') {
    console.log(`RussiaScript: ${te}`)
    console.log(prompt(`RussiaScript input: ${te}`))
  }
}
function RussiaScriptTerminal(command, params) {
  if (command == 'pirs install lib') {
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
  if (command === 'get lang') {
    return sys.lang
  }
  if (command === 'get os') {
    return sys.os
  }
  if (command === 'get user-agent') {
    return SessionRussiaScript['user-agent']
  }
  if (command === 'get sys/RussiaScript') {
    return sys.RussiaScript
  }
  if (command === 'get RussianScript version') {
    return sys.RussiaScript.version
  }
  if (command === 'get terminale version') {
    return sys.RussiaScript['terminal version']
  }
  if (command == 'pirs install lib from RussiaScriptLibs') {
    Ext = fetch(`https://rp-sote.github.io/RussiaScriptLibs.site/lib/${params.ext.url}.lib?pocket=${params.ext.pocket}`, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
    RussiaScriptUser.LibsList.push(eval(`${Ext}; return ExtLibRS.id`))
    RussiaScriptUser.libsInfo[params.ext.name] = eval(`${Ext}; return ExtLibRS`)
    RussiaScriptUser.libs[RussiaScriptUser.libsInfo[params.ext.name].id] = eval(`${Ext}; return Ext_${RussiaScript.libsInfo[params.ext.name].id}`)
  }
  if (command == 'pirs install syslib') {
    Ext = fetch(`https://shaman2016scratch.github.io/RussiaScript/sl?lib=${params.libName}`, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
    RussiaScriptUser.LibsList.push(eval(`${Ext}; return ExtLibRS.id`))
    RussiaScriptUser.libsInfo[params.ext.name] = eval(`${Ext}; return ExtLibRS`)
    RussiaScriptUser.libs[RussiaScriptUser.libsInfo[params.ext.name].id] = eval(`${Ext}; return Ext_${RussiaScript.libsInfo[params.ext.name].id}`)
  }
}
function RussiaScriptGetValue(v) {
  if (typeof v === 'number' || typeof v === 'string') {
    return v;
  }
  ii = v.type
  ii2 = v.value
  if (ii == 'текст') {
    return (ii2)
  }
  if (ii == 'переменная') {
    return Peremens[ii2]
  }
  if (ii == 'get') {
    return fetch(ii2, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii == 'зget') {
    return fetch(RussiaScriptGetValue(ii2), {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii == 'post') {
    return fetch(ii2, {  
      method: 'POST',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii == 'зpost') {
    return fetch(RussiaScriptGetValue(ii2), {  
      method: 'POST',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii == 'delete') {
    return fetch(ii2, {  
      method: 'DELETE',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
  }
  if (ii == 'зdelete') {
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
  if (ii == '=' || ii == '==' || ii == '===') {
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
  if (ii == 'confirm') {
    return confirm(RussiaScriptGetValue(ii2))
  }
  if (ii == 'чат-бот') {
    if (RussiaScriptGetValue(ii2.metod) == 'получить ответ') {
      return RussiaScriptUser.sysModules['Chat Bot'].otvet[RussiaScriptGetValue(ii2['запрос'])]
    }
  }
  if (ii == 'получить get-параменты') {
    // Не поддерживается в node.js, только в браузере.
    const url = new URL(window.location)
    const searchParams = url.searchParams
    return searchParams.get(ii2)
  }
  if (ii == '≠' || ii == '!=') {
    return (RussiaScriptGetValue(ii2[1]) != RussiaScriptGetValue(ii2[2]))
  }
  if (ii == '<=' || ii == '≤') {
    return (RussiaScriptGetValue(ii2[1]) <= RussiaScriptGetValue(ii2[2]))
  }
  if (ii == '>=' || ii == '≥') {
    return (RussiaScriptGetValue(ii2[1]) >= RussiaScriptGetValue(ii2[2]))
  }
}
function SessionRussiaScript() {
  SessionRussiaScript = {
    "ОС": sys.os,
    "Язык": sys.lang,
    "Версия RussiaScript": sys.RussiaScript.version,
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
  RScodeRunner = {}
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
  i2 = 'теперь нет смысла'
  for (i = 0; i < codeRussiaScript.length; i++) {
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
      Peremens[RussiaScriptGetValue(i5.per)] = RussiaScriptGetValue(i5.value)
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
        runRussiaScript(`\{"libs":"","terminal":"","code":"${RussiaScriptGetValue(i5["то"])}"\}`)
      } else {
        runRussiaScript(`\{"libs":"","terminal":"","code":"${RussiaScriptGetValue(i5["иначе"])}"\}`)
      }
    }
    if (i4 == 'js-функция') {
      RussiaScriptUser.func[RussiaScriptGetValue(i5.name)] = `function(args) \{ ${RussiaScriptGetValue(i5.code)} \}`
    }
    if (i4 == 'rs-функция') {
      RussiaScriptUser.func[RussiaScriptGetValue(i5.name)] = `function(args) \{ runRussiaScript${RussiaScriptGetValue(i5.code)} \}`
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
        runRussiaScript(`\{"libs":"","terminal":"","code":"${RussiaScriptGetValue(i5.code)}"\}`)
      }
    }
    if (i4 == 'alert') {
      alert(RussiaScriptGetValue(i5))
    }
    if (i4 == 'чат-бот') {
      if (RussiaScriptGetValue(i5.metod) == 'Задать ответ') {
        RussiaScriptUser.sysModules['Chat Bot'].otvet[RussiaScriptGetValue(i5['запрос'])] = RussiaScriptGetValue(i5['ответ'])
      }
    }
    if (i4 == 'rs-js-консоль') {
      if (i5['метод'] == 'лог') {
        RsJsConsole('log', RussiaScriptGetValue(i5['значение']))
      }
      if (i5['метод'] == 'предупреждение') {
        RsJsConsole('warn', RussiaScriptGetValue(i5['значение']))
      }
      if (i5['метод'] == 'ошибка') {
        RsJsConsole('error', RussiaScriptGetValue(i5['значение']))
      }
      if (i5['метод'] == 'запрос') {
        RsJsConsole('input', RussiaScriptGetValue(i5['значение']))
      }
    }
    if (i4 === 'повторять раз') {
      for (RScodeRunner.i = 0; RScodeRunner.i < RussiaScriptGetValue(i5['раз']); RScodeRunner.i++) {
        runRussiaScript(`\{"libs":"","terminal":"","code":"${RussiaScriptGetValue(i5["код"])}"\}`)
      }
    }
    if (i4 == 'return') {
      // для пользовательских функций
      return i5
    }
    if (i4 == 'ждать') {
      await new Promise(resolve => setTimeout(resolve, RussiaScriptGetValue(i5['миллисекунды'])))
    }
  }
}
function RunRsCodeFromUrl(url) {
  code = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  runRussiaScript(code);
}

function initRussiaScript() {
  const scripts = document.querySelectorAll('script[type="json/RussiaScript-RSF"]');

  scripts.forEach(script => {
    if (script.src) {
      RunRsCodeFromUrl(script.src);
    } else {
      try {
        const code = JSON.parse(script.textContent.trim());
        runRussiaScript(code);
      } catch (e) {
        RsJsConsole('error', `Ошибка парсинга встроенного кода: ${e.message}`);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initRussiaScript());
