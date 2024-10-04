const url = 'https://x.com/truthofhistory';

try {
  const res = await fetch(url);
  const html = await res.text();

  console.log(html)
} catch(error) {
  console.log(error);
}