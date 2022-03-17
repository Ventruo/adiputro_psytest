const Readable = require("stream").Readable;
const { google } = require("googleapis");

class GoogleDriveService {
  constructor(clientId, clientSecret, redirectUri, refreshToken) {
    this.driveClient = this.createDriveClient(
      clientId,
      clientSecret,
      redirectUri,
      refreshToken
    );
  }

  createDriveClient(clientId, clientSecret, redirectUri, refreshToken) {
    const client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    client.setCredentials({ refresh_token: refreshToken });

    return google.drive({
      version: "v3",
      auth: client,
    });
  }

  createFolder(folderName) {
    return this.driveClient.files.create({
      resource: {
        name: folderName,
        mimeType: "application/vnd.google-apps.folder",
      },
      fields: "id, name",
    });
  }

  searchFolder(folderName) {
    return new Promise((resolve, reject) => {
      this.driveClient.files.list(
        {
          q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}'`,
          fields: "files(id, name)",
        },
        (err, res) => {
          if (err) {
            return reject(err);
          }

          return resolve(res.data.files ? res.data.files[0] : null);
        }
      );
    });
  }

  searchInParent(folderID) {
    return new Promise((resolve, reject) => {
      this.driveClient.files.list(
        {
          q: `mimeType='application/vnd.google-apps.folder' and '${folderID}' in parents`,
          fields: "files(id, name)",
        },
        (err, res) => {
          if (err) {
            return reject(err);
          }

          return resolve(res.data.files ? res.data.files : null);
        }
      );
    });
  }

  bufferToStream(buffer) {
    var stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    return stream;
  }

  saveFile(fileName, fileBuffer, fileMimeType, folderId) {
    return this.driveClient.files.create({
      requestBody: {
        name: fileName,
        mimeType: fileMimeType,
        parents: folderId ? [folderId] : [],
      },
      media: {
        mimeType: fileMimeType,
        body: this.bufferToStream(fileBuffer),
      },
    });
  }

  deleteFile(fileId) {
    return this.driveClient.files.delete({ fileId: fileId });
  }

  updatePermission(fileId, role, type) {
    return this.driveClient.permissions.create({
      fileId: fileId,
      requestBody: {
        role: role,
        type: type,
      },
    });
  }
}

module.exports = GoogleDriveService;
