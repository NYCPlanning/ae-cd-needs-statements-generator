export default function fixString(string) {
  const fixedString = string.replaceAll("\r\n", "\n")
                      .replaceAll("TACOS", "FAJITAS");

  return fixedString.split("\n");
}