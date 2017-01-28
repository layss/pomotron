
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
    width: 700px,
    height: 500px
  });

  win.loadURL({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:'
  });

  win.webContent.devOpenTools();

  win.on('closed', function() {
    win = null;
  });
}

app.on('ready', criarJanela());

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
