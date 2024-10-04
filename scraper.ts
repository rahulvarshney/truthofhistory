import { cheerio } from "https://deno.land/x/cheerio@1.0.7/mod.ts";
const { load } = cheerio;
import { encodeUrl } from "https://deno.land/x/encodeurl/mod.ts";

const encodedUrl = encodeUrl('https://x.com/truthofhistory');

try {
  const response = await fetch('https://api.scrapingant.com/v1/general?url=' + encodedUrl, {
    method: 'GET',
    headers: {
        'x-api-key': 'cdb5feebffec44e1a3cda4d3d8cfefd3'
    },
  });

  const data = await response.json();

  const $ = load(data.content);

  const pageText = $('div').text();

  console.log(pageText)
} catch(error) {
  console.log(error);
}