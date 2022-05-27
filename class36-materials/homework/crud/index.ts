import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("static"));

MongoClient.connect("mongodb://calendardb:27017").then((client) => {
    console.log("connected to database");
    const db = client.db("crud-quotes");
    const quotesCollection = db.collection("quotes");

    app.get("/", (req, res) => {
        const cursor = db
            .collection("quotes")
            .find()
            .toArray()
            .then((result) => {
                res.render("index.ejs", { quotes: result });
            })
            .catch((error) => console.error(error));
    });

    app.post("/quotes", (req, res) => {
        quotesCollection
            .insertOne(req.body)
            .then((result) => {
                res.redirect("/");
            })
            .catch((error) => console.error(error));
    });

    app.put("/quotes", (req, res) => {
        quotesCollection
            .findOneAndUpdate(
                { name: "me" },
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote,
                    },
                },
                { upsert: true }
            )
            .then((result) => {
                res.json('Success');
            })
            .catch((error) => console.error(error));
    });

    app.delete('/quotes', (req, res) => {
        quotesCollection.deleteOne(
            { name: req.body.name }
        )
        .then(result => {
            if (result.deletedCount === 0) {
                return res.json('No quote to delete!');
            }
            res.json('deleted a quote')
        })
        .catch(error => console.error(error));
    })
});

app.listen(3000, () => {
    console.log("listening on 3000");
});
