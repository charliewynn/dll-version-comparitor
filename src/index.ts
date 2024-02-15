import { Chicken } from "./chicken";

(async () => {
  let Metadata = await (eval('import("@enviro/metadata")') as Promise<
    typeof import("@enviro/metadata/lib/index.js")
  >);
  Metadata = Metadata.default;

  console.log("hello");

  const chicken = new Chicken();
  chicken.cluck();

  async function read() {
    try {
      let exifPath = "C:\\program files\\exif\\exiftool";
      console.log("Path", exifPath);
      const metadata = await Metadata.get(
        "./dlls/SourceA/Newtonsoft.JSON.dll",
        {
          // path not required, since ExifTool is accessible from terminal using exiftool.
          path: exifPath,
          tags: [
            {
              name: "FileName",
              exclude: true,
            },
          ],
        }
      );
      console.log(metadata);
    } catch (e) {
      console.error(e);
    }
  }

  read();
})();
