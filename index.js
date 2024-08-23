import fileManager from "./fileManager.js";
import readlineSync from "readline-sync";
import path from "path";
import { fileURLToPath } from "url";

const main = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const baseDir = path.join(__dirname, "my_files");
  fileManager.createDirectory(baseDir);

  while (true) {
    // write menu
    console.log("");
    console.log("*********************");
    console.log("Choose an option:");
    console.log("1. Create a file");
    console.log("2. List the files");
    console.log("3. Exit");

    const choice = readlineSync.question("Enter your choice (1-3): ");

    switch (choice) {
      case "1":
        const fileName = readlineSync.question("Enter file name: ");
        const filePath = path.join(baseDir, fileName);
        const fileContent = readlineSync.question(
          "Enter file content (leave blank for empty file): "
        );
        const fileMessage = await fileManager.createFile(filePath, fileContent);
        console.log(fileMessage);
        break;

      case "2":
        const files = await fileManager.listFiles(baseDir);
        console.log("Files in the directory:", files);
        // files.forEach((file) => console.log(file));
        break;

      case "3":
        console.log("Exiting...");
        process.exit(0);

      default:
        console.log("Invalid choice. Please try again.");
    }
  }
};

main();
