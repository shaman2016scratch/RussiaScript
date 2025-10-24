info = {
  "created": "Example User",
  "isDocs": "true",
  "Docs": "example.com",
  "id": "ExampleId",
  "Name": "Example Name",
  "version": "1.0",
  "isicon": "true",
  "icon": "example.com/example.img",
  "iscolor": "true",
  "colors": "3",
  "color1": "",
  "color2": "",
  "color3": ""
}
Blocks = [
  {
    "opcode": "block1",
    "name": "example block",
    "params": {},
    "block type": "command",
  }
]
function block(opcode, args) {
  if (opcode == 'block1') {
    cosnole.log('example log!')
  }
}
ExtensionRussiaScript('ExampleId', '1.0', 'ExampleUser', 'Example Name', info, Blocks, 'block')
