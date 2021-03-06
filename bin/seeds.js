const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Recipe = require("../models/Recipe");

const bcryptSalt = 10;

const users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  },
];

const recipes = [
  {
    user: "alice",
    title: "Savoury White Fish With Simmered Tomatoes",
    shortDescription:
      "Best white fish is cooked with a lot of butter and love from agustina",
    steps:
      "Heat the olive oil in a large skillet over medium-low heat. Add the garlic and 1 teaspoon of Savory spice blend and cook until fragrant, stirring often and ensuring the garlic does not brown, about 3 minutes.Increase the heat to medium. Add the tomatoes and their juices, crushing well with your hands, then add the wine and bay leaves. Bring to a boil, then reduce the heat to medium-low and simmer for 5 minutes. Season with salt and pepper.Season the fish with the remaining teaspoon of Savory spice blend, salt, and pepper and place in the skillet. Cover and cook at a bare simmer until the fish is opaque throughout and beginning to flake, 5–7 minutes (thicker pieces will take longer to cook).Gently transfer the fish to shallow bowls and spoon the poaching liquid over. Top with basil.",
    ingredients: [
      { quantity: 2, measure: "spoon", name: "olive oil" },
      { quantity: 100, measure: "kg", name: "White Fish" },
      { quantity: 3000, measure: "g", name: "salmon" },
      { quantity: 3, measure: "l", name: "White Fish" },
      { quantity: 1, measure: "unit", name: "corn" },
      { quantity: 100, measure: "kg", name: "salami" },
    ],
    imgName: "whitefish",
    imgPath:
      "https://img.freepik.com/free-photo/roasted-fish-garnished-with-lemon-slices-served-with-vegetables_140725-1413.jpg?size=626&ext=jpg",
    preparationTime: 40,
    difficulty: 4,
    tags: ["vegan", "keto"],
    servings: 4,
    rating: 4,
    // reviews: [
    //   { user: "bob", comment: "alice, it was amazing" },
    //   { user: "dioni", comment: "complatly a materpiece" },
    // ],
  },
  {
    user: "bob",
    title: "Burger with cheese",
    shortDescription: "Chessburge with ketchup and mustard lovelly",
    steps:
      "Heat the olive oil in a large skillet over medium-low heat. Add the garlic and 1 teaspoon of Savory spice blend and cook until fragrant, stirring often and ensuring the garlic does not brown, about 3 minutes.Increase the heat to medium. Add the tomatoes and their juices, crushing well with your hands, then add the wine and bay leaves. Bring to a boil, then reduce the heat to medium-low and simmer for 5 minutes. Season with salt and pepper.Season the fish with the remaining teaspoon of Savory spice blend, salt, and pepper and place in the skillet. Cover and cook at a bare simmer until the fish is opaque throughout and beginning to flake, 5–7 minutes (thicker pieces will take longer to cook).Gently transfer the fish to shallow bowls and spoon the poaching liquid over. Top with basil.NAd bla bla bla bla bla , but boom boom boom",
    ingredients: [
      { quantity: 2, measure: "spoon", name: "olive oil" },
      { quantity: 100, measure: "kg", name: "White Fish" },
      { quantity: 3000, measure: "g", name: "salmon" },
      { quantity: 3, measure: "l", name: "White Fish" },
      { quantity: 1, measure: "unit", name: "corn" },
      { quantity: 100, measure: "kg", name: "salami" },
    ],
    imgName: "burger",
    imgPath:
      "https://barbecuebible.com/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg",
    preparationTime: 10,
    difficulty: 2,
    tags: ["vegan", "keto"],
    servings: 2,
    rating: 3,
    // reviews: [
    //   { user: "bob", comment: "alice, it was amazing" },
    //   { user: "dioni", comment: "complatly a materpiece" },
    // ],
    //likes: ["bob", "samantha", "manu", "jan", "robert"],
  },

  {
    user: "bob",
    title: "Cesar salad",
    shortDescription: "Best cesar salad in berlin by an Argentinian",
    steps:
      "Cook and enjo y my cesar salada that can be made in 10 min, keep reeding it Heat the olive oil in a large skillet over medium-low heat. Add the garlic and 1 teaspoon of Savory spice blend and cook until fragrant, stirring often and ensuring the garlic does not brown, about 3 minutes.Increase the heat to medium. Add the tomatoes and their juices, crushing well with your hands, then add the wine and bay leaves. Bring to a boil, then reduce the heat to medium-low and simmer for 5 minutes. Season with salt and pepper.Season the fish with the remaining teaspoon of Savory spice blend, salt, and pepper and place in the skillet. Cover and cook at a bare simmer until the fish is opaque throughout and beginning to flake, 5–7 minutes (thicker pieces will take longer to cook).Gently transfer the fish to shallow bowls and spoon the poaching liquid over. Top with basil.",
    ingredients: [
      { quantity: 2, measure: "spoon", name: "olive oil" },
      { quantity: 100, measure: "kg", name: "White Fish" },
      { quantity: 3000, measure: "g", name: "salmon" },
      { quantity: 3, measure: "l", name: "White Fish" },
      { quantity: 1, measure: "unit", name: "corn" },
      { quantity: 100, measure: "kg", name: "salami" },
    ],
    imgName: "cesar salad",
    imgPath:
      "https://www.fifteenspatulas.com/wp-content/uploads/2011/10/Caesar-Salad-Fifteen-Spatulas-2-640x427.jpg",
    preparationTime: 10,
    difficulty: 3,
    tags: ["vegan", "dairy-free", "low-sugar"],
    servings: 2,
    rating: 2,
    // reviews: [
    //   { user: "bob", comment: "alice, it was amazing" },
    //   { user: "dioni", comment: "complatly a materpiece" },
    // ],
    //likes: ["manu", "jan", "robert"],
  },

  {
    user: "bob",
    title: "Lovely cheese cake like in NY",
    shortDescription:
      "Best cheesecake is cooked with a lot of butter and love from Spain",
    steps:
      "Heat the olive oil in a large skillet over medium-low heat. Add the garlic and 1 teaspoon of Savory spice blend and cook until fragrant, stirring often and ensuring the garlic does not brown, about 3 minutes.Increase the heat to medium. Add the tomatoes and their juices, crushing well with your hands, then add the wine and bay leaves. Bring to a boil, then reduce the heat to medium-low and simmer for 5 minutes. Season with salt and pepper.Season the fish with the remaining teaspoon of Savory spice blend, salt, and pepper and place in the skillet. Cover and cook at a bare simmer until the fish is opaque throughout and beginning to flake, 5–7 minutes (thicker pieces will take longer to cook).Gently transfer the fish to shallow bowls and spoon the poaching liquid over. Top with basil.",
    ingredients: [
      { quantity: 2, measure: "spoon", name: "olive oil" },
      { quantity: 100, measure: "kg", name: "White Fish" },
      { quantity: 3000, measure: "g", name: "salmon" },
      { quantity: 3, measure: "l", name: "White Fish" },
      { quantity: 1, measure: "unit", name: "corn" },
      { quantity: 100, measure: "kg", name: "salami" },
      { quantity: 100, measure: "kg", name: "White Fish" },
      { quantity: 3000, measure: "g", name: "salmon" },
      { quantity: 3, measure: "l", name: "White Fish" },
      { quantity: 1, measure: "unit", name: "corn" },
      { quantity: 100, measure: "kg", name: "salami" },
    ],
    imgName: "cheese cake",
    imgPath:
      "https://laurenslatest.com/wp-content/uploads/2020/02/cheesecake-recipe-5.jpg",
    preparationTime: 40,
    difficulty: 4,
    tags: ["vegan", "keto"],
    servings: 4,
    rating: 4,
    // reviews: [
    //   { user: "bob", comment: "alice, it was amazing" },
    //   { user: "dioni", comment: "complatly a materpiece" },
    //   { user: "bob", comment: "alice, it was amazing" },
    //   { user: "dioni", comment: "complatly a materpiece" },
    //   { user: "bob", comment: "alice, it was amazing" },
    //   { user: "dioni", comment: "complatly a materpiece" },
    //   { user: "bob", comment: "alice, it was amazing" },
    //   { user: "dioni", comment: "complatly a materpiece" },
    // ],
    // likes: [
    //   "bob",
    //   "samantha",
    //   "manu",
    //   "jan",
    //   "robert",
    //   "bob",
    //   "samantha",
    //   "manu",
    //   "jan",
    //   "robert",
    //   "bob",
    //   "samantha",
    //   "manu",
    //   "jan",
    //   "robert",
    //   "bob",
    //   "samantha",
    //   "manu",
    //   "jan",
    //   "robert",
    // ],
  },
];

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/new-project", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// User.deleteMany()
//   .then(() => {
//     return User.create(users);
//   })
//   .then((usersCreated) => {
//     console.log(`${usersCreated.length} users created with the following id:`);
//     console.log(usersCreated.map((u) => u._id));
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     Recipe.deleteMany()
//       .then(() => {
//         return Recipe.create(recipes);
//       })
//       .then((recipesCreated) => {
//         console.log(
//           `${recipesCreated.length} recipes created with the following id:`
//         );
//         console.log(recipesCreated.map((u) => u._id));
//       })
//       .then(() => {
//         // Close properly the connection to Mongoose
//         mongoose.disconnect();
//       })
//       .catch((err) => {
//         mongoose.disconnect();
//         throw err;
//       });
//   })
//   .catch((err) => {
//     mongoose.disconnect();
//     throw err;
//   });

async function uploadSeeds() {
  const promises = [];
  const deleteUsers = await User.deleteMany();
  const deleteRecipes = await Recipe.deleteMany();
  for (let user of users) {
    const userCreated = await User.create(user);

    for (let recipe of recipes) {
      if (user.username === recipe.user) {
        recipe.user_id = userCreated._id;
        const recipeCreated = await Recipe.create(recipe);
        promises.push(recipeCreated);
      }
    }
  }

  Promise.all(promises).then((response) => {
    User.find().then((response) => {
      mongoose.disconnect();
    });
  });
}

uploadSeeds();
