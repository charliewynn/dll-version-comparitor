import { Chicken } from "./chicken";
import { AreEqual, GetMetadata, PrintDiff } from "./Metadata";

(async () => {
  console.log("Starting App");

  const chicken = new Chicken();
  chicken.cluck();

  try {
    const mdA = await GetMetadata("./dlls/SourceA/Newtonsoft.JSON.dll");
    const mdB = await GetMetadata("./dlls/SourceB/Newtonsoft.JSON.dll");

    if (!AreEqual(mdA, mdB)) {
      PrintDiff(mdA, mdB);
    }

    let a = 1;
  } catch (e) {
    console.error(e);
  }
})();
