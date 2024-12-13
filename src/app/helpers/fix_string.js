export default function fixString(string) {
  const fixedString = string.replaceAll("\r\n", "\n")
                      .replaceAll("Äê", " ");

  return fixedString.split("\n");
}