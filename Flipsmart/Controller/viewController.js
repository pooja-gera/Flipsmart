// ek function h, jo html file ko render kraega!
const getCart = (req,res) => {
    res.render("cart.ejs");
}

 const getProductsPage = (req,res) => {
    res.render("homepage.ejs");
}
 const getSignIn = (req,res) => {
    res.render("signIn.ejs");
} 
 const getSignUp = (req,res) => {
    res.render("signUp.ejs");
} 
 const getLearnMore = (req,res) => {
    res.render("learnMore.ejs");
}
 const getLandingpage = (req,res) => {
    res.render("landingpage.ejs");
}

module.exports.getCart = getCart;
module.exports.getProductsPage = getProductsPage;
module.exports.getLandingpage = getLandingpage;
module.exports.getLearnMore = getLearnMore;
module.exports.getSignIn = getSignIn;
module.exports.getSignUp = getSignUp;