class Lib
  info = {
    "created": "Example User",
    "isDocs": "true",
    "Docs": "example.com",
    "id": "ExampleId",
    "Name": "ExampleName",
    "version": "1.0",
    "isicon": "true",
    "icon": "example.com/example.img",
    "iscolor": "true",
    "colors": "3",
    "color1": "",
    "color2": "",
    "color3": ""
  }
  Functions = [
    {
      "opcode": "block1",
      "name": "example block",
      "params": {},
      "block type": "command",
    }
  ]
  block(opcode, args) {
    if (opcode == 'block1') {
      cosnole.log('example log!')
    }
  }
