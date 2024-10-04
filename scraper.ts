import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

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