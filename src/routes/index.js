module.exports = (express, app) => {
    const api_default = `/api`;
    // const web_default = ``;
  
    require("./api/auth.routes")(express, app, api_default);


    app.use((req, res, next) => {
      res.status(404).render("404", {
        title: "404 - Page not found",
        layout: "admin/layouts/login_layout",
      });
    });
  };
  