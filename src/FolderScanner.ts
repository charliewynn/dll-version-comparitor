import { readdir } from "fs/promises";
import { GetMetadata, Metadata } from "./Metadata";

export interface Folder {
  Files: Metadata[];
  Folders: Folder[];
}

export const Scan = async (folderDir: string): Promise<Folder> => {
  console.log("Scanning: " + folderDir);
  const dir = await readdir(folderDir, { withFileTypes: true });
  const subDirs = dir.filter((d) => d.isDirectory());
  console.log("subDirs", subDirs);
  const files = dir.filter((d) => d.isFile());
  console.log("files", files);

  const folder: Folder = {
    Files: [],
    Folders: [],
  };
  for (let f of subDirs) {
    folder.Folders.push(await Scan(f.path + "/" + f.name));
  }

  for (let f of files) {
    console.log("f", f);
    folder.Files.push(await GetMetadata(f.path + "/" + f.name));
  }
  return folder;
};
