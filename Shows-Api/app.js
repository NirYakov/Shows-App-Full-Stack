const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const dataStatic = require("./dataObj");

const app = express();


const connectToMyMongo = require("./connectDb");


////// invoke connection to mongoDB
connectToMyMongo();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});


app.get("/api/health", (req, res, next) => { res.status(200).json({ health: "Online ! :)" }); })

app.get("/api/test", async (req, res, next) => {


    let responseApi = "none";

    const searchShow = "inception 2010";

    const urlApi = `https://imdb-api.com/en/API/Search/${process.env.ApiKey}/${searchShow}`;

    // console.log(urlApi);

    // req from rate api
    await axios({
        method: 'get',
        url: urlApi,
    })
        .then((response) => {
            // rateCAN = response.data.rates.CAD;
            // rateEuro = response.data.rates.EUR;

            responseApi = response;
            // console.log(response);


        }).catch(e => {
            console.log({
                message: "oops :(",
                error: e,
            })
        });

    responseApi = responseApi.data;

    res.status(200).json({
        health: "Online ! :)",
        responseApi
    });
})

app.get("/api/datastatic/movies", async (req, res, next) => {

    // dataStatic.dataObj;
    const dataObj = dataStatic.dataObj.movies;

    res.status(200).json({
        msg: "Okay",
        dataObj
    });
});

app.get("/api/datastatic/tv", async (req, res, next) => {

    // let responseApi = "none";


    // const urlApi = `https://imdb-api.com/en/API/Top250TVs/${process.env.ApiKey}`;

    // // console.log(urlApi);

    // // req from rate api
    // await axios({
    //     method: 'get',
    //     url: urlApi,
    // })
    //     .then((response) => {
    //         // rateCAN = response.data.rates.CAD;
    //         // rateEuro = response.data.rates.EUR;

    //         responseApi = response;
    //         // console.log(response);


    //     }).catch(e => {
    //         console.log({
    //             message: "oops :(",
    //             error: e,
    //         })
    //     });

    // responseApi = responseApi.data;



    // // dataStatic.dataObj;
    // const dataObj = responseApi;

    const dataObj = dataStatic.dataObj.tv;


    res.status(200).json({
        msg: "Okay",
        dataObj
    });
});


let numberOfTrys = 0;

app.get("/api/poll", async (req, res, next) => {


    let rateCAN = 1.0;
    let rateEuro = 1.0;

    numberOfTrys++;

    if (numberOfTrys % 3 == 0) {

        // req from rate api
        await axios({
            method: 'get',
            url: `https://open.er-api.com/v6/latest/USD`,
        })
            .then(function (response) {
                rateCAN = response.data.rates.CAD;
                rateEuro = response.data.rates.EUR;

            }).catch(e => {
                console.log({
                    message: "oops :(",
                    error: e,
                })
            });

    }


    res.status(200).json({
        rateCAN,
        rateEuro
    });
});


module.exports = app;
