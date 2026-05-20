const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'assets', 'css', 'home');
const backupDir = path.join(cssDir, 'backup');
const htmlFile = path.join(__dirname, 'Disney+ Brasil _ Filmes, séries e esportes ilimitados.html');

console.log("htmlFile exists:", fs.existsSync(htmlFile), htmlFile);
console.log("cssDir exists:", fs.existsSync(cssDir), cssDir);
console.log("backupDir exists:", fs.existsSync(backupDir), backupDir);

const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
console.log("cssFiles identified in cssDir:", cssFiles);

const backupFiles = fs.readdirSync(backupDir).filter(f => f.endsWith('.css'));
console.log("cssFiles identified in backupDir:", backupFiles);
