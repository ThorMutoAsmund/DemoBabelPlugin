module.exports = {
  write: (s) => { 
    process.stdout.write(s); 
  },
  writeLn: (s) => { 
    process.stdout.write(s + '\n'); 
  }  
}