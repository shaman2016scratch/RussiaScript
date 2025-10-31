// rsml (RSML) — RussiaScript Markup Language
// rml/rsml
rsmlDocument = []
RSML = {
  "command": {}
}
function rsml(rsml, htmObject) {
  RSML.code = rsml
  rsmlDocument = rsml
  RSML.i = 0
  RSML.i2 = 'true'
  while (RSML.i2) {
    if (RSML.code.length < RSML.i) {
      RSML.i2 = (false)
    } else {
      RSML.i2 = (true)
    }
    RSML.i++
    RSML.i3 = RSML.code.[RSML.i]
    RSML.i4 = RSML.i3.tag
    RSML.i5 = RSML.i3.params
    RSML.i6 = RSML.i3.cod
  }
}
