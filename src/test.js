import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const readPackageJson = async () => {
  try {
    const pJsonPath = fileURLToPath(
      new URL("../package.json", import.meta.url)
    );
    console.log(pJsonPath);
    const packageJson = JSON.parse(await fs.readFile(pJsonPath, "utf-8"));
    console.log(packageJson);
  } catch (e) {
    console.log("error--->", e);
  }
};
const witeFile = async () => {
  try {
    const newFile = fileURLToPath(new URL("./demo.js", import.meta.url));
    await fs.writeFile(newFile, 'console.log("node file writing testing...")');
  } catch (err) {
    console.error("Error:", err);
  }
};

witeFile();
// readPackageJson();
