const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/get_connected", {
    keepAlive: true,
    useMongoClient: true
});




