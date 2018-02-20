const { write, writeLn } = require('./io');

module.exports = {
  fileToHtml: (file) => {
    var program = file.program;

    writeLn('<html>');
    writeLn('<body>');
    
    let rec = (node) => {    
      Object.keys(node).forEach(key => {
        switch (key) {
          case 'start':
          case 'end':
          case 'loc':
          case 'type':
            break;
          default:
            if (node[key] === null) {
              writeLn('<b>' + key + '</b>: NULL<br />');
            }
            else if (typeof node[key] === 'string') {
              writeLn('<b>' + key + '</b>: ' + node[key] + '<br />');
            }
            else if (node[key] instanceof Array) {
              writeLn('<b>' + key + '</b><br />');
              writeLn('<ol>');
              node[key].forEach(element => {              
                writeLn('<li>')
                rec(element);
                writeLn('</li>')
              });
              writeLn('</ol>');
            }
            else if (typeof node[key] === 'object') {
              writeLn('<b>' + key + ':</b> ' + node[key].type + '<br />');
              writeLn('<ul>');
              rec(node[key]);
              writeLn('</ul>');
            }
            else {
              writeLn('<b>' + key + '</b>: ' + node[key] + '<br />');
            }
        }

      })
    
    }

    writeLn('<ul>');
    writeLn('<b>' + 'program: ' + program.type + '</b><br />');
    writeLn('<ul>');
    rec(program);
    writeLn('</ul>');
    writeLn('</ul>');

    writeLn('</body>');
    writeLn('</html>');
  }
}