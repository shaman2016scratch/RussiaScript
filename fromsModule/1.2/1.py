from 1.2 import RussiaScript
from Runner import JavaScript
from 1.2 import RussiaScriptLibs
def main():
  js('console.log(\'started\')')
  RussiaScriptLibs.v1-2.object({
    "type": "python",
    "v": "1.0",
    "rs v": "1.2",
    "name": "PythonRsLibs1",
  })
  RussiaScriptLibs.v1-2.object.rs_v(RussiaScript.v1-2.terminal('get RussiaScript version'))
  RussiaScriptLibs.v1-2.object.v('1.0')
  RussiaScriptLibs.v1-2.object.type('python')
  RussiaScriptLibs.v1-2.object.name('PythonRsLibs1')
  RussiaScriptLibs.v1-2.object.exampleFrom({
    "from1": {
      "reporters": ["reporter1"],
      "commands": ["command1"],
    },
    "from2": {
      "reporters": ["reporter2"],
      "commands": ["command2"],
    },
  })
