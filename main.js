const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs'); 

async function handleFileOpen() {
    const { canceled, filePaths } = await dialog.showOpenDialog()
    if (!canceled) {
      return filePaths[0]
    }
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('index.html');

    // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow();
    ipcMain.handle('dialog:openFile', handleFileOpen);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    const folder = '/home/liheng/Developer/memory-organizer/';

    fs.readdir(folder, (err, files) => {
        console.log(files);
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})