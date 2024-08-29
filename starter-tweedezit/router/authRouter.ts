import express from "express";
import * as jwt from 'jsonwebtoken';
import { User } from "../types";
import { createUser, login } from "../database";

export default function loginRouter() {
    const router = express.Router();

    router.get("/login", (req, res) => {
        res.render("login");
  
    });

    router.post("/login", async(req, res) => {
        const user = req.body.username
        const password = req.body.password
        login(user, password) 
        const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1d" });
        res.cookie("jwt", token, { httpOnly: true, sameSite: "lax", secure: true });
        res.redirect("/");
    });

    router.get("/logout", (req, res) => {
        res.clearCookie("jwt")
        res.redirect("/login");
    });

    router.get("/register", (req, res) => {
    });

    router.post("/register", async(req, res) => {
    const user = req.body.username
    const password = req.body.password
    login(user, password)
    createUser(user)
    const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1d" });
    res.cookie("jwt", token, { httpOnly: true, sameSite: "lax", secure: true });
    res.redirect("/");
    });

    return router;
}