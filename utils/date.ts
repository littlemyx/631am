export function dataConverter(timestamp: string | null): string {
  if (timestamp === null) {
    return "Present";
  }

  return timestamp;
}
