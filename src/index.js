const express = require('express');
const app = express();
const path = require("path");

// Settings
app.set('port', 3000);
app.set("views", path.join(__dirname, "views"));
app.engine('html', require('ejs').renderFile)
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/"));

// Static files
app.use(express.static(path.join(__dirname , 'public')));

// Listening server
app.listen(app.get('port'), () => {
    console.log("server port", app.get('port'));
});
