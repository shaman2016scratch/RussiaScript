// RussiaScript code
// код RussiaScript
RsProjectObject = {
  "src": {},
  "output": [],
  "peremens": {},
  "files": [],
  "data files": {},
  "sys": {},
  "User": {},
  "session": {},
}
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
    "public": {
      1: {
        "version": "1.0",
      },
    },
  },
  "publicRS": {
    1: {
      "Peremens": {},
    },
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
RsSrc = {}
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
  commandsTerminRs = [
    "pirs install lib",
    "get os",
    "get session",
    "get system",
    "get files",
    "new file",
    "new file in",
    "get data files",
    "get os2",
    "get user-agent",
    "get sys/RussiaScript",
    "get RussianScript version",
    "get terminale version",
    "pirs install lib",
    "pirs install lib from RussiaScriptLibs",
    "pirs install syslib",
    "pirs search",
    "pirs uninstall",
    "pirs --help",
    "git clone",
  ]
  commandUserTerRs = {}
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
  if (command === 'get os2') {
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
    Ext = fetch(`https://rp-site.github.io/RussiaScriptLibs.site/lib/${params.ext.url}.lib?pocket=${params.ext.pocket}`, {  
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
  if (command == 'pirs search') {
    Ext = fetch(`https://shaman2016scratch.github.io/RussiaScript/search/`, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
    if (Ext.reg[params.ext.name]) {
      return true
    } else {
      return false
    }
  }
  if (command === 'pirs uninstall') {
    LibsList.splice(LibsList.indexOf(RussiaScriptUser.libsInfo[params.ext].id))
    delete libs[RussiaScriptUser.libsInfo[params.ext].id]
    delete libsInfo[RussiaScriptUser.libsInfo[params.ext].id]
    return ('ok!')
  }
  if (command === 'pirs --help') {
    ret = [
      "RussiaScript Terminal help. command pirs",
      "pirs — package installer RussiaScript",
      "commands:",
      "1. pirs install lib",
      "2. pirs install lib from RussiaScriptLibs",
      "3. pirs install syslib",
      "4. pirs search",
      "5. pirs uninstall",
      "6. pirs --help",
      "7. pirs info lib",
    ]
    return ret
  }
  if (command === 'git clone') {
    Ext = fetch(`https://github.com/${params.file}.git.rsf`, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
    runRussiaScript(Ext)
  }
  if (command === 'url clone') {
    Ext = fetch(params.url, {  
      method: 'GET',  
      headers: { 
        "Content-Type": "application/json",  
      }
    })
    runRussiaScript(Ext)
  }
  if (command === 'pirs info lib') {
    return RussiaScriptUser.libsInfo[params.ext.name]
  }
  if (command === 'pirs list') {
    return RussiaScriptUser.LibsList
  }
  if (command === 'rs reset') {
    Peremens = {}
    RussiaScriptUser.libs = {}
    RussiaScriptUser.libsInfo = {}
    RussiaScriptUser.LibsList = []
  }
  if (commandsTerminRs.indexOf(command) === -1) {
    if (commandUserTerRs[command]) {
      if (params) commandUserTerRs[command](params)
      if (!params) commandUserTerRs[command]
    }
  }
}
function publicRS(args, n) {
  if (n === 1) {
    publicArgs = args; publicCode = publicArgs.code; publicCode = publicCode.split("\n");
    publicClass = publicArgs.class
    public = {
      "i": 0,
    }
    for (public.i = 0; public.i < publicCode.length; public.i++) {
      public.i2 = publicCode[public.i] /* command */; public.i3 = publicCode[public.i + 1] /* params */;
      if (public.i2 == 'let a main()') {
        public.main = {}; public.main.i = 0; public.main.code = public.i3.split("\n"); puclic.i++;
        for (public.main.i = 0; public.main.i < public.main.code.length; public.main.i++) {
          public.i++; public.main.i2 = public.main.code[public.main.i]; public.main.i3 = public.main.code[public.main.i + 1]
          if (public.main.i2 === 'System.out.printf') {
            public.main.i4 = {}; public.main.i4.from = 'publicRS1'; public.main.i4.text = RussiaScriptGetValue(public.main.i3); RussiaScriptOutput.push(public.main.i4); public.i++;
          }
          if (public.main.i2 === 'System.RunTermianl') {
            RussiaScriptTerminal(public.main.i3.command, public.main.i3.args); public.i++;
          }
          if (public.main.i2 === 'set var') {
            sys.public.1.Peremens[public.main.i3.var] = public.main.i3.val; public.i++;
          }
        }
      }
    }
  }
  if (n === 2) {
    // publicSQL/RussiaScript SQL
    publicArgs = args; publicCode = publicArgs.code; publicCode = publicCode.split("\n");
  }
}
function RussiaScriptGetValue(v) {
  if (typeof v === 'number' || typeof v === 'string' || typeof v === 'boolean') {
    return v;
  }
  if (v === 'err') {
    return Peremens.err
  }
  ii = v.type
  ii2 = v.value
  if (ii == 'текст') {
    return (ii2)
  }
  if (ii == 'переменная') {
    return Peremens[RussiaScriptGetValue(ii2)]
  }
  if (ii == 'http') {
    return fetch(RussiaScriptGetValue(ii2.url), {  
      method: `${RussiaScriptGetValue(ii2.metod)}`,  
      headers: `${ii2.headers}`
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
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 + ii6)
    }
    if (ii3 == '-') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 - ii6)
    }
    if (ii3 == '*') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 * ii6)
    }
    if (ii3 == '÷') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 / ii6)
    }
    if (ii3 == '/') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 / ii6)
    }
    if (ii3 == '%') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 % ii6)
    }
    if (ii3 == '^') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 ** ii6)
    }
    if (ii3 == '**') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 ** ii6)
    }
    if (ii3 == '×') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return (ii5 * ii6)
    }
    if (ii3 == 'abs') {
      return Math.abs(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'min') {
      return Math.min(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'max') {
      return Math.max(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'округлить') {
      return Math.round(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'целое меньшее') {
      return Math.floor(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'целое большее') {
      return Math.ceil(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'рандом') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return Math.random(ii5, ii6)
    }
    if (ii3 == 'pow') {
      ii5 = RussiaScriptGetValue(ii4[1])
      ii6 = RussiaScriptGetValue(ii4[2])
      return Math.pow(ii5, ii6)
    }
    if (ii3 == 'квадратный корень') {
      return Math.sqrt(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'синус') {
      return Math.sin(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'косинус') {
      return Math.cos(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'тангенс') {
      return Math.tan(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'арксинус') {
      return Math.asin(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'арккосинус') {
      return Math.acos(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'арктангенс') {
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
      return JSON.stringify(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'в JavaScript-объект') {
      return JSON.parse(RussiaScriptGetValue(ii4))
    }
    if (ii3 == 'задать ключ в объекте') {
      ii5 = RussiaScriptGetValue(ii4.json)
      ii6 = RussiaScriptGetValue(ii4.key)
      ii7 = RussiaScriptGetValue(ii4.value)
      ii5[ii6] = ii7
      return ii5[ii6]
    }
    if (ii3 == 'добавить элемент в начало массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.text)
      ii5.unshift(ii6)
      return ii5
    }
    if (ii3 == 'добавить элемент в массив') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.text)
      ii5.push(ii6)
      return ii5
    }
    if (ii3 == 'добавить элемент в массив в место') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.text)
      ii7 = RussiaScriptGetValue(ii4.n)
      ii5.splice(ii7, 1, ii6)
      return ii5
    }
    if (ii3 == 'удалить из объекта') {
      ii5 = RussiaScriptGetValue(ii4.json)
      ii6 = RussiaScriptGetValue(ii4.n)
      delete ii5[ii6] 
      return ii5
    }
    if (ii3 == 'удалить последний элемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii5.pop()
      return ii5
    }
    if (ii3 == 'удалить первый элемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii5.shift()
      return ii5
    }
    if (ii3 == 'удалить элемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.n)
      ii5.splice(ii6, 1)
      return ii5
    }
    if (ii3 == 'элемент массива') {
      ii5 = RussiaScriptGetValue(ii4.array)
      ii6 = RussiaScriptGetValue(ii4.n)
      return ii5[ii6]
    }
    if (ii3 == 'элемент объекта') {
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
      return RussiaScriptUser.func[RussiaScriptGetValue(ii2.func)](ii2.args)
    }
  }
  if (ii == 'lib' || ii == 'ext' || ii == 'либ') {
    return RussiaScriptUser.libs[RussiaScriptUser.libsInfo[RussiaScriptGetValue(ii2.name)].id].reporters[RussiaScriptGetValue(ii2.func)]
  }
  if (ii == 'вывод' || ii == 'output') {
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
    return searchParams.get(RussiaScriptGetValue(ii2))
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
  if (ii == 'base64') {
    if (ii2.type === 'encode') {
      return encodeURIComponent(RussiaScriptGetValue(ii2["текст"])).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1))
    } else {
      return decodeURIComponent(RussiaScriptGetValue(ii2["текст"])).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1))
    }
  }
  if (ii === 'искл или') {
    return (ii2[0] && !ii2[1]) || (!ii2[0] && ii2[1]);
  }
  if (ii === 'slugify') {
    const str = RussiaScriptGetValue(ii2).toLowerCase()
    const translit = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    let slug = str.replace(/[а-яё]/gi, char => translit[char] || '');
    slug = slug.replace(/[^a-z0-9]+/g, '-');
    slug = slug.replace(/-+/g, '-').replace(/^-|-$/g, '');
    return slug;
  }
  if (ii == 'url') {
    if (ii2.type === 'encode') {
      return encodeURIComponent(RussiaScriptGetValue(ii2["текст"]))
    } else {
      return decodeURIComponent(RussiaScriptGetValue(ii2["текст"]))
    }
  }
  if (ii === 'длина') {
    return String(RussiaScriptGetValue(ii2)).length;
  }
  if (ii === 'шаблон') {
    return preprocessTemplate(RussiaScriptGetValue(ii2))
  }
  if (ii === 'eval') {
    return runRussiaScript(RussiaScriptGetValue(ii2))
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
  LibsRussiaScript = code.libs
  codeRussiaScript = code.code
  SessionRussiaScript()
  termRussiaScript = code.terminal
  nameRussiaScirpt = code.name
  versionRussiaScript = code.version
  if (termRussiaScirpt) {
    Peremens.term = RussiaScriptTerminal(termRussiaScirpt.com, termRussiaScript.par)
  }
  i2 = 'теперь нет смысла'
  for (i = 0; i < codeRussiaScript.length; i++) {
    i3 = codeRussiaScript[i]
    i4 = i3.command
    i5 = i3.params
    if (i4 == 'очистить вывод') {
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
    if (i4 == 'вывести') {
      RussiaScriptOutput.push(RussiaScriptGetValue(i5))
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
    if (i4 == 'задать переменной значение') {
      Peremens[RussiaScriptGetValue(i5.per)] = RussiaScriptGetValue(i5.value)
    }
    if (i4 == 'импортировать расширение' || i4 == 'импротировать библиотеку') {
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
      return RussiaScriptGetValue(i5)
    }
    if (i4 == 'ждать') {
      await new Promise(resolve => setTimeout(resolve, RussiaScriptGetValue(i5['миллисекунды'])))
    }
    if (i4 === 'eval') {
      runRussiaScript(RussiaScriptGetValue(i5))
    }
    if (i4 === 'если иначе ошибка') {
      if (RussiaScriptGetValue(i5.bol)) {
        runRussiaScript(RussiaScriptGetValue(i5.code))
      } else {
        RsJsConsole('error', 'error for script "if else error"')
        Peremens.err = true
      }
    }
    if (i4 === 'большой если иначе') {
      RScodeRunner.i2 === 'false'
      for (RScodeRunner.i = 0; RScodeRunner.i < i5.codes.length; RScodeRunner.i++) {
        if (RussiaScriptGetValue(i5.codes[RScodeRunner.i].bol) && RScodeRunner.i2 === false) {
          RScodeRunner.i2 = true
          runRussiaScript(`\{"libs":"","terminal":"","code":"${RussiaScriptGetValue(i5.codes[RScodeRunner.i].code)}"\}`)
        }
      }
      if (RScodeRunner.i2 === 'false') {
        runRussiaScript(`\{"libs":"","terminal":"","code":"${RussiaScriptGetValue(i5.else)}"\}`)
      }
    }
    if (i4 === 'большой если') {
      RScodeRunner.i2 === 'false'
      for (RScodeRunner.i = 0; RScodeRunner.i < i5.codes.length; RScodeRunner.i++) {
        if (RussiaScriptGetValue(i5.codes[RScodeRunner.i].bol) && RScodeRunner.i2 === false) {
          RScodeRunner.i2 = true
          runRussiaScript(`\{"libs":"","terminal":"","code":"${RussiaScriptGetValue(i5.codes[RScodeRunner.i].code)}"\}`)
        }
      }
    }
    if (i4 === 'публик RS1-2$1') {
      publicRS(i5, 1)
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
function preprocessTemplate(templateStr) {
  return templateStr.replace(/\$\{([^}]+)\}/g, (match, innerContent) => {
    try {
      let parsed;
      try {
        parsed = JSON.parse(innerContent);
      } catch (e) {
        parsed = innerContent;
      }
      const result = RussiaScriptGetValue(parsed);
      return typeof result === 'object' && result !== null
        ? JSON.stringify(result)
        : String(result);
    } catch (err) {
      console.error('Ошибка в шаблоне:', err);
      return match;
    }
  });
}
function MakeError(error, params) {
  if (error === 'syntax error') {
    console.error(`RussiaScript Syntax Error (of line ${params.line}): ${params.error}`)
  }
}
