import { ChangeEvent } from "react";

interface FileReaderProps {
  onReady: (content: string) => void;
}

export const FileReaderComponent = ({ onReady }: FileReaderProps) => {
  const readFile = (event: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const { files } = event.target;

    if (files === null) return;

    fileReader.readAsText(files[0], "UTF-8");
    fileReader.addEventListener(
      "load",
      () => {
        onReady(fileReader.result as string);
      },
      false
    );
  };

  return <input type="file" onChange={readFile} />;
};
