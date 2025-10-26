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
    "params": {}
  }
]
Returners = [
  {
    "opcode": "return1",
    "name": "example returner",
    "params": {}
  }
]
function block(opcode, args) {
  if (opcode == 'block1') {
    cosnole.log('example log!')
  }
}
function returners(opcode, args) {
  if (opcode == 'return1') {
    return("example return!")
  }
}
lib = {
  "isLib": "true",
  "ext": "extension RussiaScript 1.0, 2025"
}
ext = {
  "isExt": "true",
  "lib": "library RussiaScript 1.0, 2025"
}
function LibID() {
  return null
}
ExtensionRussiaScript('ExampleId', '1.0', 'ExampleUser', 'Example Name', info, Blocks, 'block', 'returners', lib, ext)
ReturnNewLib(info.id, lib.ext, ext.lib)
