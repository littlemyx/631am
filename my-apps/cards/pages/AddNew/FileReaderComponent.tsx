import { ChangeEvent, useEffect, useRef } from "react";

interface FileReaderProps {
  onReady: (content: string) => void;
  isOpen: boolean;
}

export const FileReaderComponent = ({ onReady, isOpen }: FileReaderProps) => {
  const ref = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (!isOpen) {
      ref.current!.value = "";
    }
  }, [isOpen]);

  return <input ref={ref} type="file" onChange={readFile} />;
};
