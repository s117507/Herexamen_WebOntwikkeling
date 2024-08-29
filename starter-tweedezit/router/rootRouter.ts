import express from "express";
import { getSeries, getUser } from "../database";
import { User, Series } from "../types";
import { loginMiddleware } from "../middleware/jwtMiddleware";

export default function rootRouter() {
    const router = express.Router();

    router.get("/", async(req, res) => {
        loginMiddleware
        res.render("index");
    });

    router.post("/delete/:id", async(req, res) => {
        loginMiddleware
        res.redirect("/");
    })

    return router;
}