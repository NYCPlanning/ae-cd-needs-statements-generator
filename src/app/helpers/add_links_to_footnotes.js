function applySuperscriptToBrackets() {
  // A regular expression to find text between square brackets globally and non-greedily.
  // The pattern is /\\[(.*?)\\]/g:
  // \\[: matches the opening square bracket literally.
  // (.*?): a capturing group that matches any character (.) zero or more times (*) non-greedily (?).
  // \\]: matches the closing square bracket literally.
  // g flag: ensures all occurrences on the page are matched.
  // const regex = /\\[(.*?)\\]/g;
  const regex = /\[([^\]]*)\]/g;
  // Just numbers - can't use because of references like [5, 6, 7, 8]
  // const regex = /\[(\d+)\]/g;

  // const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i;
  // A comprehensive regex for matching URLs
  // const urlRegex = /(?:(?:https?|ftp):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
  const urlRegex = /(?:(?:https?|ftp):\/\/|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;


  // Select all elements in the body to check their text content.
  // A more specific selection (e.g., body p, body h1, etc.) can be used for better performance.
  // const elements = document.body.getElementsByTagName('*');
  const elements = document.body.getElementsByTagName('p');
  // console.log(elements)
  for (const element of elements) {

    // Use innerHTML to allow HTML tags to be inserted
    if (element.innerHTML.match(regex)) {
      // Replace the matched text with the content wrapped in <sup> tags.
      // $1 refers to the content captured in the first (and only) capturing group (.*?).

      element.innerHTML = element.innerHTML.replace(regex, '<sup>[$1]</sup>');
    }
    if (element.innerHTML.match(urlRegex)) {

      element.innerHTML.match(urlRegex).forEach((matchedURL) => {
        element.innerHTML = element.innerHTML.replace(matchedURL, `<a href="${matchedURL[0]}DONOTMATCHAGAIN${matchedURL.slice(1)}" target="_blank">${matchedURL[0]}DONOTMATCHAGAIN${matchedURL.slice(1)}</a>`);
      })

    }
  }

  for (const element of elements) {
    // console.log(element.innerHTML.search("DONOTMATCHAGAIN"), element.innerHTML);
    element.innerHTML = element.innerHTML.replaceAll("DONOTMATCHAGAIN", "");
  }
}

applySuperscriptToBrackets();