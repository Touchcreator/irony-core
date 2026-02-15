import express from "express"
import fs from "fs"
import path from "path"

const level = express.Router()

level.post(/\/\/*uploadGJLevel.php/, (req, res) => {
    const data = fs.readFileSync(path.join(__dirname + "/../../data.json"), "utf8")
    const parsed = JSON.parse(data)
    if (req.body.levelID == 0) {
        // im tired
    }
});

export default level;