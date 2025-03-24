const express = require("express");
const app = express();
const PORT = 2371;
const spaceStationMW = require("./middleware");
const router = express.Router();
const planetData = require("./planets");
const errorHandler = require("./error_handler");

app.use(spaceStationMW);
app.use('/', router);

// Route pour récupérer la liste des planètes
router.get('/', (req, res) => {
    res.send(`🌍 Liste des planètes - Requête traitée depuis ${req.spacestation}`);
});

router.get('/planets', (req, res, next) => {
    if (!planetData.isAPlanet(req.query.planetName))
        throw new Error("Wrong Name Planet");
    res.json(planetData.planetsData[req.query.planetName])
});

app.use(errorHandler);/*ORDER MATTERS SO ERROR HANDLER ARE LAST*/
app.listen(
    PORT,
    '0.0.0.0',
    () => console.log(`🚀 API GSSI lancée sur http://localhost:${PORT}`)
);
