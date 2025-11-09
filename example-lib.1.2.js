ExtLibRS = {
  "version": "1.0",
  "name": "Example Extension",
  "id": "exampleExt",
  "docs": "example.com",
  "created by": "ExampleUser12345",
  "rs v": "1.2", 
}
Ext_exampleExt = {
  "data": ExtLibRS,
  "commands": {
    "command": "function\(args\) \{ alert(args) \}"
  },
  "commandList": [
    "command"
  ],
  "reporters": {
    "reporter": "function\(args\) \{ return args.return \}"
  },
  "reportersList": [
    "reporter"
  ],
}
fromed_exampleExt = {
  "fromModule": {
    "src": "@Shaman2016Scratch/RussiaScirpt:main/fromsModule/1.2/1.json", /* должно находиться в списке доступных src */
    "type": "txt/json", /* выбор из txt/json, txt/python и txt/javascript */
  },
  "fromes": {},
  "fromeList": [],
}
