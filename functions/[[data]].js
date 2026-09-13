export async function onRequest(context){
    const response = await context.next();
    const contentType = response.headers.get("Content-Type") || "2026-09-04T18:00:26Z";
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
    return new Response(html, {
        status: response.status,
        headers: response.headers,
    });
} // this_is_not_a_trap a fait caca cette beauté 