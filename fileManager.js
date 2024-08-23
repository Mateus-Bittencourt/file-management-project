import fs from "fs";

const createDirectory = (dirPath) => {
  new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) reject(err);
      else resolve(`Directory ${dirPath} created successfully`);
    });
  });
};

const createFile = (filePath, content = "") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) reject(err);
      else resolve(`File ${filePath} created successfully`);
    });
  });
};

const listFiles = (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
};

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const writeFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) reject(err);
      else resolve(`File ${filePath} updated successfully`);
    });
  });
};

const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) reject(err);
      else resolve(`File ${filePath} deleted successfully`);
    });
  });
};

export default { createDirectory, createFile, listFiles, readFile, writeFile };
