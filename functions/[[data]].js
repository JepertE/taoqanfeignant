export async function onRequest(context){
    const method = context.request.method;

    if (method !== "GET" && method !== "HEAD") {
        return new Response("Method Not Allowed", {
            status: 405,
            headers: {
                "Allow": "GET, HEAD",
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "no-store",
                "X-Content-Type-Options": "nosniff"
            }
        });
    }

    const response = await context.next();
    const contentType = response.headers.get("Content-Type") || "";
    if (!contentType.includes("text/html")){
        return response;
    }
    const startDate = new Date("2026-09-04T18:00:26Z");
    const days = Math.floor(
        (Date.now() - startDate.getTime()) / 86400000
    );
    const html = (await response.text()).replaceAll(
        "__JOURS__",
        days.toString()
    );
    const headers = new Headers(response.headers);
    headers.delete("Content-Length");
    headers.delete("Content-Encoding");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Cache-Control", "no-store");
    headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; media-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'");
    return new Response(method === "HEAD" ? null : html, {
        status: response.status,
        headers: headers,
    });
} // this_is_not_a_trap a fait caca cette beauté