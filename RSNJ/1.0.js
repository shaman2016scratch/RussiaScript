// RSNJ — RussiaScript not Json
// RSNJ — тот же RussiaScript но не в формате Json а в формате обычного языка программирования
RSNJ = {}
function RsnjGetValue(t) {
  if (typeof t == 'string' || typeof t == 'number' || typeof t == 'object' || typeof t == 'boolean') {
    return t
  }
}
function RunRSNJ(c) {
  RSNJ.code = c
  RSNJ.code = RSNJ.code.split("\n")
  for(RSNJ.i = 0; i < RSNJ.code.length; RSNJ.i++) {
    RSNJ.i2 = RSNJ.code[RSNJ.i]
  }
}
