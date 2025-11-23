// importing necessary modules
const router = require("express").Router();

// setting the route
router.get("/", (req, res) => {
    res.send("OSM Private by NovaGTPS");
});

// exporting the router
module.exports = router;
