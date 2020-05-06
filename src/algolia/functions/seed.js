const admin = require("firebase-admin");
admin.initializeApp();

const faker = require("faker");

const db = admin.firestore();

const fakeIt = () => {
  return db.collection("users").add({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    bio: faker.hacker.phrase(),
    color: faker.internet.color(),
  });
};

Array(20)
  .fill(0)
  .forEach(fakeIt);
