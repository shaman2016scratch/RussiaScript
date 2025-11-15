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
  "fromes": {},
  "fromeList": [],
}
