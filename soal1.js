const shapes = require('./persegi');

const sisiPersegi = 5;
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;

const luasPersegi = shapes.luasPersegi(sisiPersegi);
const kelilingPersegi = shapes.kelilingPersegi(sisiPersegi);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);

const luasPersegiPanjang = shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
