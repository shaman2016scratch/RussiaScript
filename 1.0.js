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
  }
}
