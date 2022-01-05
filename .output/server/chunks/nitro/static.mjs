import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2060-i7KmxgBKtafkQryDc0s5HzbO7E0\"",
    "mtime": "2022-01-05T18:18:08.210Z",
    "path": "../public/200.html"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"21bc-XwkmumvsWAWQvKTShmzlcL3xoys\"",
    "mtime": "2022-01-05T18:18:01.550Z",
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2060-i7KmxgBKtafkQryDc0s5HzbO7E0\"",
    "mtime": "2022-01-05T18:18:08.170Z",
    "path": "../public/index.html"
  },
  "/_nuxt/10c2b10.js": {
    "type": "application/javascript",
    "etag": "\"950-qb/TumbZ4jy80X30w+9U3xmElik\"",
    "mtime": "2022-01-05T18:18:01.580Z",
    "path": "../public/_nuxt/10c2b10.js"
  },
  "/_nuxt/10f808c.js": {
    "type": "application/javascript",
    "etag": "\"3f7-HnbVE6FouVQHr2uxEWr58wX35mw\"",
    "mtime": "2022-01-05T18:18:01.570Z",
    "path": "../public/_nuxt/10f808c.js"
  },
  "/_nuxt/18a2826.js": {
    "type": "application/javascript",
    "etag": "\"78e-ROmX/uumaGNetNAZJKpjKpw6+4E\"",
    "mtime": "2022-01-05T18:18:01.570Z",
    "path": "../public/_nuxt/18a2826.js"
  },
  "/_nuxt/84265ca.js": {
    "type": "application/javascript",
    "etag": "\"f32-3pA01LMb3x+oHquU6DMqLTijgMc\"",
    "mtime": "2022-01-05T18:18:01.570Z",
    "path": "../public/_nuxt/84265ca.js"
  },
  "/_nuxt/921da11.js": {
    "type": "application/javascript",
    "etag": "\"3af3d-aBvULq6NovH6WKdPbPYes1f5u2U\"",
    "mtime": "2022-01-05T18:18:01.570Z",
    "path": "../public/_nuxt/921da11.js"
  },
  "/_nuxt/99b2da0.js": {
    "type": "application/javascript",
    "etag": "\"8f504-62cAeEi4eTocGXFkpZ+r07kcqtI\"",
    "mtime": "2022-01-05T18:18:01.560Z",
    "path": "../public/_nuxt/99b2da0.js"
  },
  "/_nuxt/ae4ac24.js": {
    "type": "application/javascript",
    "etag": "\"1984-Sujdrw9xYK91ISOLwL2bibPpLOM\"",
    "mtime": "2022-01-05T18:18:01.560Z",
    "path": "../public/_nuxt/ae4ac24.js"
  },
  "/_nuxt/da3a971.js": {
    "type": "application/javascript",
    "etag": "\"1ab3-wRqF2qi3j32ENQKcOHVsUpHBaiY\"",
    "mtime": "2022-01-05T18:18:01.560Z",
    "path": "../public/_nuxt/da3a971.js"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/static" + "/" + "1641406681";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
