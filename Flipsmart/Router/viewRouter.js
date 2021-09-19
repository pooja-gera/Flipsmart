
const express = require('express');
const viewRouter = express.Router();
const { getCart, getLandingpage, getLearnMore, getProductsPage, getSignIn, getSignUp } = require('../Controller/viewController');

viewRouter.route("/signIn").get(getSignIn);
viewRouter.route("/signUp").get(getSignUp);
viewRouter.route("/").get(getLandingpage);
viewRouter.route("/productsPage").get(getProductsPage);
viewRouter.route("/cart").get(getCart);
viewRouter.route("/learnMore").get(getLearnMore);

module.exports.viewRouter = viewRouter;