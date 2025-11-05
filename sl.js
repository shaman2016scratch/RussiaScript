const url = new URL(window.location)
const searchParams = url.searchParams
docData.txt = document.getElementById('lib')
docData.lib = searchParams.get('lib')
if (docData.lib === 'server') {
  lib = `
    ExtLibRS = {
      "version": "1.0",
      "name": "Terminal RussiaScript+",
      "id": "TerminalRS_sl",
      "docs": "not",
      "created by": "SHAMAN2016",
    }
    Ext_exampleExt = {
      "data": ExtLibRS,
      "commands": {
        "set lang": "function (args) { sys.lang = args }",
        "set os": "function (args) { sys.os = args }",
      },
      "commandList": [
        "set lang",
        "set os",
      ],
      "reporters": {
        "get version info": "function(args) { if (args === '1.2') { return {"creator":"shaman2016"} } }",
      },
      "reportersList": [
        "get version info",
      ],
    }
  `
}
