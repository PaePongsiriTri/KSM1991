interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
}

const CANONICAL_HOST = "www.ksm1991.co.th";
const KNOWN_HOSTS = new Set(["ksm1991.co.th", "www.ksm1991.co.th"]);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (KNOWN_HOSTS.has(url.hostname)) {
      let changed = false;
      if (url.hostname !== CANONICAL_HOST) {
        url.hostname = CANONICAL_HOST;
        changed = true;
      }
      if (url.protocol !== "https:") {
        url.protocol = "https:";
        changed = true;
      }
      if (changed) {
        return Response.redirect(url.toString(), 301);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
