
/**
 *
 * @author Daniel Silva
 * @description Contém as configurações para a criação de uma janela
 *
 *
 */

const electron = require('electron');
const url = require('url');
const path = require('path');
const app = electron.app;

let win;

function criarJanela() {
  win = new electron.BrowserWindow({
    width: 1050,
    height: 700
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:'
  }));

  win.webContents.openDevTools();

  win.on('closed', function() {
    win = null;
  });
}

app.on('ready', criarJanela);

app.on('window-all-closed', function() {
  if (process.plataform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (win === null) {
    criarJanela();
  }
});
