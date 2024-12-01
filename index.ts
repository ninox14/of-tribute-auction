Bun.serve({
  static: {
    // health-check endpoint
    "/api/health-check": new Response("All good!"),

    // redirect from /old-link to /new-link
    "/old-link": Response.redirect("/new-link", 301),

    // serve static text
    "/": new Response("Hello World"),

    // serve a file by buffering it in memory
    "/index.html": new Response(await Bun.file("./index.html").bytes(), {
      headers: {
        "Content-Type": "text/html",
      },
    }),
    "/favicon.ico": new Response(await Bun.file("./public/favicon.ico").bytes(), {
      headers: {
        "Content-Type": "image/x-icon",
      },
    }),
  },

  fetch(req) {
    return new Response("404!");
  },
});