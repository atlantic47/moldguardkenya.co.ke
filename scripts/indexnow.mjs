// Tells search engines that pages have changed, using IndexNow.
//
// IndexNow is read by Bing (which also powers ChatGPT search and Copilot),
// Yandex, Seznam and Naver. Google does NOT support IndexNow, and Google
// retired its sitemap "ping" URL in 2023 — for Google, resubmit the sitemap
// in Search Console instead (see the note printed at the end).
//
// Run it AFTER the new version is live on Vercel, because the search engines
// fetch the key file from the live site to verify the request:
//
//   npm run indexnow                         # submit every URL in the sitemap
//   npm run indexnow -- --since=2026-11-15   # only URLs changed on/after a date

const HOST = "moldguardkenya.co.ke";
const KEY = "fc5e379531a7bf66f9926f537a3fb000"; // must match public/<KEY>.txt
const SITEMAP = `https://${HOST}/sitemap.xml`;

const sinceArg = process.argv.find((a) => a.startsWith("--since="));
const since = sinceArg ? sinceArg.split("=")[1] : null;

const keyRes = await fetch(`https://${HOST}/${KEY}.txt`);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`The key file https://${HOST}/${KEY}.txt is not live yet. Deploy first, then run this again.`);
  process.exit(1);
}

const xml = await (await fetch(SITEMAP)).text();
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: m[1].match(/<loc>(.*?)<\/loc>/)?.[1],
  lastmod: m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.slice(0, 10),
}));
const urls = entries
  .filter((e) => e.loc && (!since || (e.lastmod && e.lastmod >= since)))
  .map((e) => e.loc);

if (urls.length === 0) {
  console.log("No URLs to submit.");
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

// 200 = accepted, 202 = accepted and key being verified. Anything else is an error.
console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URL(s)`);
if (res.status !== 200 && res.status !== 202) {
  console.log(await res.text());
  process.exit(1);
}
console.log(
  "\nFor Google: open Search Console > Sitemaps, and resubmit https://moldguardkenya.co.ke/sitemap.xml.\n" +
    "For a single important page, use URL Inspection > Request indexing."
);
