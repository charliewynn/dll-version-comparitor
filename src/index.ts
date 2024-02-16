import { Folder, Scan } from "./FolderScanner";
import { AreEqual, GetMetadata, PrintDiff } from "./Metadata";

(async () => {
  const sourceA = await Scan("./dlls/SourceA");
  const sourceB = await Scan("./dlls/SourceB");
  let a = 1;
  // ^ good spot to put breakpoint
})();

const testMD = async () => {
  const mdA = await GetMetadata("./dlls/SourceA/Newtonsoft.JSON.dll");
  const mdB = await GetMetadata("./dlls/SourceB/Newtonsoft.JSON.dll");

  if (!AreEqual(mdA, mdB)) {
    PrintDiff(mdA, mdB);
  }
};
