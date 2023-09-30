const fs = require('fs');

const logData = 'Ini adalah data log yang ingin disimpan dalam file.';

// Tulis data log ke dalam file log.txt
fs.appendFile('log.txt', logData + '\n', (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menulis file log:', err);
  } else {
    console.log('Data log berhasil ditulis ke dalam file log.txt.');
  }
});
