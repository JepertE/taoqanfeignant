export async function onRequest(context){
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
    return new Response(html, {
        status: response.status,
        headers: headers,
    });
} // this_is_not_a_trap a fait caca cette beauté