require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Database Connection
import ConnectDB from "./database/connection";

// private route authentication config
import privateRouteConfig from "./config/route.config";

// google authentication configs
import googleAuthConfig from "./config/google.config";

// API
import Auth from "./API/Auth";
import Food from "./API/Food";
import Restaurant from "./API/Restaurant";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/Reviews";
import User from "./API/User";

// passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());
//zomato.use(passport.session())

// Application Roures
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/restaurant", Restaurant);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);

zomato.listen(4000, () => {
  ConnectDB()
    .then(() => {
      console.log("Server is running !!!");
    })
    .catch((error) => {
      console.log("Server is running, but database connection failed");
      console.log(error);
    });
});
