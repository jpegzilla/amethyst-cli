const { exec } = require('pkg');
exec([ process.argv[2], '--target', 'host', '--output', process.argv[3]]).then(() => console.log('done 
with no errors.')).catch(err => console.error(error));
