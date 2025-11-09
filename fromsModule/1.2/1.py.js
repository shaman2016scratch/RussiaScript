const RussiaScriptPy = {
  "v1-2": {
    "version": "1.2",
  }
}
const RussiaScriptLibsPy = {
  "v1-2": {
    "data": {
      "object": {}
    },
    "object": "function(o) { RussiaScriptLibsby.v1-2.data.object = o }",
    "ok": {
      "main": "function() { objectLib = RussiaScriptLibsby.v1-2.data.object }",
      "status": "function() { return \"ok\" }"
    },
  },
}
function pyMain() {
  RussiaScriptPyIm = RussiaScriptPy.v1-2
  RussiaScriptLibsPyIm = RussiaScriptLibsPy.v1-2
  function Main() {
    RussiaScriptLibsPyIm.object = {}
    objectPy = {}
    objectPy.type = 'python'
    objectPy.v = '1.0'
    objectPy['rs v'] = RussiaScriptPyIm.version
    objectPy.name = 'PythonRsLibs1'
    objectPy.exampleFrom = {
      "from1": {
        "reporters": ["reporter1"],
        "commands": ["command1"],
      },
      "from2": {
        "reporters": ["reporter2"],
        "commands": ["command2"],
      },
    }
    RussiaScriptLibsPyIm.object = objectPy
    RussiaScriptLibsPyIm.ok.main
  }
}
