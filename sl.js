const url = new URL(window.location)
const searchParams = url.searchParams
docData.txt = document.getElementById('lib')
docData.lib = searchParams.get('lib')
if (docData.lib === 'server') {
  lib = `
    
  `
}
