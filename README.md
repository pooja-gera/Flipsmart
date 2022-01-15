<!--Banner-->
![Project Banner](https://res.cloudinary.com/pooja-gera/image/upload/v1630745346/flipsmart-readme_assets/Flipsmart-Readme_Header_ranue3.png)

# Flipsmart - A Smart Shopping Basket by Celestial Biscuit </b>
Flipsmart is an attempt to bring the features to life of the robust and popular E-Commerce application - Flipkart. This project was built as a part of the Flipkart GRID 3.0 where participants to build a Smart Bag Creator Challenge for Flipkart Grocery.

<b> Motivation: </b><br/>
With online shopping and e-commerce becoming an integral part of our day-to-day life, it is time that Artificial Intelligence take root into the experience of online shopping. Flipsmart is built to provide 

<b> Solved Problems: </b><br/>
#### 1. Recommending items based on Past Purchase History
- There is a repetition that happens while buying grocery items and a user's past purchase history is extremely crucial for offering good recommendations. 
- For recommendations on the past order, there is a need for an association between the current item and the previously bought items. Apriori Algorithm of ARL is used to find the association among products.

#### 2. Recommending items based on ratings from Similar Users
- People from the same region have similar staple food and dietary habits hence having similar product needs became the basis for us taking up this use case.
- To find the required similarities between the users, the Memory-based Collaborative filtering technique was used by implementing the nearest neighbors algorithm thereby identifying similar users with the common trends using the user rating data.

#### 3. Recommending items to the New Users based on Product Ratings
- Since a new user has no previous purchase history, there is no understanding about their buying habits before, hence it is only fair to show them the best-rated products to pique their interest. 
- In order to get the Top 10 recommendations based on the ratings by other users, products were filtered on the basis of a combination of a number of ratings and average ratings of the product by all the other users.

#### 4. Recommending items based on products similar to items in the cart
- An alternate choice of items that the user adds to the cart provides a variety of options for the same item to the user to choose and buy from. 
- All the similar items were grouped together into a single category. When an item was added in the cart, a random item for the corresponding category was recommended.


<!-- <b> Learnings: </b>

<img src="https://image.flaticon.com/icons/png/512/1384/1384060.png" alt="youtube-icon" width="50px"> [Watch the Demo on Youtube (To Be Added)](#)  -->

# Table of contents

- [Features of the Application (With Screenshots)](#features-of-the-application-with-demo)
- [Installation](#installation)
- [Try The Web Application](#try-the-web-application)
- [Support and Contact](#support-and-contact)

# Features of the Application (With Screenshots)

### Dark and Light UI Themed Homepage 

![Section 1 Light](https://res.cloudinary.com/pooja-gera/image/upload/v1632994332/flipsmart-readme_assets/Home_Page_Section_1_lcxao6.png)
![Section 1 Dark](https://res.cloudinary.com/pooja-gera/image/upload/v1632994331/flipsmart-readme_assets/Home_Page_Dark_Section_1_wuhzes.png)
![Section 2 Light](https://res.cloudinary.com/pooja-gera/image/upload/v1632994332/flipsmart-readme_assets/Home_Page_Section_2_m3nqkl.png)
![Section 2 Dark](https://res.cloudinary.com/pooja-gera/image/upload/v1632994331/flipsmart-readme_assets/Home_Page_Dark_Section_2_acjy5o.png)
![Section 3 Light](https://res.cloudinary.com/pooja-gera/image/upload/v1632994332/flipsmart-readme_assets/Home_Page_Section_3_n1ji6v.png)
![Section 3 Dark](https://res.cloudinary.com/pooja-gera/image/upload/v1632994331/flipsmart-readme_assets/Home_Page_Dark_Section_3_ggswd0.png)
![Section 4 Light](https://res.cloudinary.com/pooja-gera/image/upload/v1632994332/flipsmart-readme_assets/Home_Page_Section_4_qftqxd.png)
![Section 4 Dark](https://res.cloudinary.com/pooja-gera/image/upload/v1632994332/flipsmart-readme_assets/Home_Page_Dark_Section_4_afkenm.png)

### Sign In and Sign Up with Email 

![Sign In](https://res.cloudinary.com/pooja-gera/image/upload/v1632994333/flipsmart-readme_assets/Sign_In_rtyjei.png)
![Sign Up](https://res.cloudinary.com/pooja-gera/image/upload/v1632994333/flipsmart-readme_assets/Sign_Up_wssxbv.png)

### Products Page 

![Flipsmart Bag Empty](https://res.cloudinary.com/pooja-gera/image/upload/v1632994334/flipsmart-readme_assets/Products_Page_Empty_Flipsmart_mukuts.png)
![Flipsmart Bag Full](https://res.cloudinary.com/pooja-gera/image/upload/v1632994334/flipsmart-readme_assets/Products_Page_Filled_Flipsmart_wkjpmb.png)

### Cart Page 

![Cart](https://res.cloudinary.com/pooja-gera/image/upload/v1632994331/flipsmart-readme_assets/Cart_duvpn2.png)
![Payment](https://res.cloudinary.com/pooja-gera/image/upload/v1632994333/flipsmart-readme_assets/Payment_roc0sy.png)

[(Back to top)](#table-of-contents)

# Installation 
To use this project, follow the steps below:

Initialise git on your terminal.

```bash
git init
```
Clone this repository.

```bash
git clone 
``` 

Change the directory. 

```bash
cd Flipsmart 
```

Open the repository with your code editor. 
In case you do not have a code editor, it is recommended you use Visual Studio Code. 

```bash
code .
```

Open the terminal in Visual code by pressing Ctrl+J (Windows) and run the following commands:

```bash
npm i
```
After the required packages are installed, run the following command: 

```bash
nodemon app.js
```

Voila! Your application starts working. 

# Try The Web Application
[Flipsmart](http://flipsmartgrid.herokuapp.com/)<br/>
[(Back to top)](#table-of-contents)

# Support and Contact 

<!-- Email To: 
developergera@gmail.com
nishthagoyal8@gmail.com
gaurisharsrivastava@gmail.com -->
| S.No. | Name                  | Email Id                      | GitHub Username:octocat:                             |
| ----- | ------------------    | ----------------------------- | ---------------------------------------------------- |
| 1.    | Pooja Gera            | developergera@gmail.com       | [@pooja-gera](https://github.com/pooja-gera)       |
| 2.    | Gaurisha R Srivastava | gaurisharsrivastava@gmail.com | [@Gaurisha21](https://github.com/Gaurisha21)         |
| 3.    | Nishtha Goyel         | nishthagoyal8@gmail.com       | [@Nishtha0801](https://github.com/Nishtha0801)       |


[(Back to top)](#table-of-contents)

