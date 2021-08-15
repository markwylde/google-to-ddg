function main () {
  if (document.body.innerText.indexOf('Our systems have detected unusual traffic') > -1) {
    const currentUrl = new URL(document.location.href);
    const continueUrl = currentUrl.searchParams.get('continue');

    if (!continueUrl) {
      return;
    }

    const url = new URL(continueUrl);
    const query = url.searchParams.get('q');

    const dom = document.createElement('div');
    dom.style.maxWidth = '400px';
    dom.innerHTML = `
      <b>Google's being awful again:</b>
      <p><strong>Your search term was:</strong> ${query}</p>
      <p>Try one of these better search engines:</p>

      <ul>
        <li>
          <a href="https://duckduckgo.com/?q=${query}">DuckDuckGo</a>
        </li>
        <li>
          <a href="https://startpage.com/do/metasearch.pl?query=${query}">StartPage</a>
        </li>
        <li>
          <a href="https://www.bing.com/search?q=${query}">Bing</a>
        </li>
        <li>
          <a href="https://search.brave.com/search?q=${query}">Brave</a>
        </li>
      </ul>

      <p>
        Or, if you really need to, you can still solve the captcha below.
      </p>
    `;

    document.body.prepend(dom);
  }
}
main();
