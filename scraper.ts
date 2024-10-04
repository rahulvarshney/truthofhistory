import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";

const url = 'https://example.com';

try {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html)  

  const pageHeader = $('h1').text();

  console.log(pageHeader)
} catch(error) {
  console.log(error);
}