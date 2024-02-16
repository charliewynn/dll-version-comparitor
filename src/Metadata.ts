export interface Metadata {
  AssemblyVersion: string;
  ProductVersion: string;
  ProductVersionNumber: string;
  FileVersion: string;
  FileVersionNumber: string;
  FileModifyDate: string;
  SourceFile: string;
}

export const AreEqual = (a: Metadata, b: Metadata): boolean => {
  return (
    a.AssemblyVersion === b.AssemblyVersion &&
    a.ProductVersion === b.ProductVersion &&
    a.ProductVersionNumber == b.ProductVersionNumber &&
    a.FileVersion === b.FileVersion &&
    a.FileVersionNumber === b.FileVersionNumber &&
    a.FileModifyDate === b.FileModifyDate
  );
};
export const PrintDiff = (a: Metadata, b: Metadata): void => {
  const separator = "\t";
  if (!AreEqual(a, b)) {
    console.log(
      "Found Diff: ",
      separator,
      a.SourceFile,
      separator,
      b.SourceFile
    );
  }
  if (a.ProductVersion !== b.ProductVersion) {
    console.log(
      "ProductVersion",
      separator,
      a.ProductVersion,
      separator,
      b.ProductVersion
    );
  }
  if (a.AssemblyVersion !== b.AssemblyVersion) {
    console.log(
      "AssemblyVersion",
      separator,
      a.AssemblyVersion,
      separator,
      b.AssemblyVersion
    );
  }
  if (a.ProductVersionNumber !== b.ProductVersionNumber) {
    console.log(
      "ProductVersionNumber",
      separator,
      a.ProductVersionNumber,
      separator,
      b.ProductVersionNumber
    );
  }
  if (a.FileVersion !== b.FileVersion) {
    console.log(
      "FileVersion",
      separator,
      a.FileVersion,
      separator,
      b.FileVersion
    );
  }
  if (a.FileVersionNumber !== b.FileVersionNumber) {
    console.log(
      "FileVersionNumber",
      separator,
      a.FileVersionNumber,
      separator,
      b.FileVersionNumber
    );
  }
  if (a.FileModifyDate !== b.FileModifyDate) {
    console.log(
      "FileModifyDate",
      separator,
      a.FileModifyDate,
      separator,
      b.FileModifyDate
    );
  }
};

export const GetMetadata = async (filename: string): Promise<Metadata> => {
  const Metadata = await GetMD();
  let exifPath = "C:\\program files\\exif\\exiftool";
  const metadata = await Metadata.get(filename, {
    path: exifPath,
    tags: [
      {
        name: "FileName",
        exclude: true,
      },
    ],
  });
  return metadata[0];
};

const GetMD = async () => {
  let Metadata = await (eval('import("@enviro/metadata")') as Promise<
    typeof import("@enviro/metadata/lib/index.js")
  >);
  Metadata = Metadata.default;

  return Metadata;
};
