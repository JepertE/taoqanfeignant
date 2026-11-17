export async function onRequest(context) {
    const { request, env } = context;

    if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method Not Allowed", {
            status: 405,
            headers: { "Allow": "GET, HEAD", "Content-Type": "text/plain; charset=utf-8" }
        });
    }

    const asset = await env.ASSETS.fetch(new Request(request.url));
    if (!asset.ok) return asset;

    const data = await asset.arrayBuffer();
    const total = data.byteLength;
    const headers = new Headers({
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=0, must-revalidate",
        "X-Content-Type-Options": "nosniff"
    });

    const m = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("Range") || "");
    if (!m || (m[1] === "" && m[2] === "")) {
        headers.set("Content-Length", String(total));
        return new Response(request.method === "HEAD" ? null : data, { status: 200, headers });
    }

    let start, end;
    if (m[1] === "") {
        start = Math.max(0, total - Number(m[2]));
        end = total - 1;
    } else {
        start = Number(m[1]);
        end = m[2] === "" ? total - 1 : Math.min(Number(m[2]), total - 1);
    }
    if (start >= total || start > end) {
        headers.set("Content-Range", `bytes */${total}`);
        return new Response(null, { status: 416, headers });
    }

    headers.set("Content-Range", `bytes ${start}-${end}/${total}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(request.method === "HEAD" ? null : data.slice(start, end + 1), { status: 206, headers });
}