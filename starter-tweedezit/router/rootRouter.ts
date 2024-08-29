import express, { response } from "express";
import { getSeries, getUser } from "../database";
import { User, Series } from "../types";
import { loginMiddleware } from "../middleware/jwtMiddleware";

export default function rootRouter() {
    const router = express.Router();

    router.get("/", async(req, res) => {
        const response = await fetch('https://raw.githubusercontent.com/similonap/json/master/series.json');
        const data : Series[] = await response.json();
        res.render("index", {
            data
        }
        );
    });

    router.post("/delete/:id", async(req, res) => {
        loginMiddleware
        res.redirect("/");
    })

    return router;
}