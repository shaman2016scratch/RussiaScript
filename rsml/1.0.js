// rsml (RSML) — RussiaScript Markup Language
// rml/rsml
rsmlDocument = []
RSML = {
  "command": {
    "run": "function(rsml, htmlObject) { rsml(rsml, htmlObject) }"
  }
}
function rsml(rsml, htmlObject) {
  htmlRsmlDocument = ''
  RSML.code = rsml
  rsmlDocument = rsml
  RSML.i = 0
  RSML.i2 = 'уже не нужен'
  for (RSML.i = 0; RSML.i < RSML.code.length; RSML.i++)
    RSML.i3 = RSML.code[RSML.i]
    RSML.i4 = RSML.i3.tag
    RSML.i5 = RSML.i3.params
    RSML.i6 = RSML.i3.cod
    if (RSML.i4 == "код") {
      if (RSML.i5.lang == 'JavaScript' || RSML.i5.lang == 'js' || RSML.i5.lang == "javascript") {
        eval(RSML.i6)
      }
    }
    if (RSML.i4 == "код из источника") {
      if (RSML.i5.lang == 'JavaScript' || RSML.i5.lang == 'js' || RSML.i5.lang == "javascript") {
        RSML.i7 = fetch(RSML.i6, {  
          method: 'GET',  
          headers: { 
            "Content-Type": "application/json",  
          }
        })
        eval(RSML.i7)
      }
    }
    if (RSML.i4 == 'html') {
      htmlRsmlDocument = `${htmlRsmlDocument}${RSML.i6}`
    }
    if (RSML.i4 == 'html из источника') {
      RSML.i7 = fetch(RSML.i6, {  
        method: 'GET',  
        headers: { 
          "Content-Type": "application/json",  
        }
      })
      htmlRsmlDocument = `${htmlRsmlDocument}${RSML.i7}`
    }
  }
}
