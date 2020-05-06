// this the firebase functions setup code
const functions = require("firebase-functions");
const admin = require("firebase-admin");
let Promise = require("promise");
const cors = require("cors")({ origin: true });
const auth = require("basic-auth");
const request = require("request");
const algoliasearch = require("algoliasearch");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
// listen for creating a piece of users in Firestore
exports.addusersToAlgolia = functions.firestore
  .document("users/{user_id}")
  .onCreate((event) => {
    console.log("ADD EQUIP EVENT IS", event);
    const active = event.data().active === true ? "true" : "false";
    const data = {
      //user_id: event.data().user_id,
      objectID: event.data().user_id,
      condition: event.data().condition,
      description: event.data().description,
      location: event.data().location,
      name: event.data().name,
      phone_number: event.data().phone_number,
      price: event.data().price,
    };
    return addToAlgolia(data, "users")
      .then((res) => console.log("SUCCESS ALGOLIA users ADD", res))
      .catch((err) => console.log("ERROR ALGOLIA users ADD", err));
  });
// listen for editing a piece of users in Firestore
exports.editusersToAlgolia = functions.firestore
  .document("users/{user_id}")
  .onUpdate((event) => {
    console.log("edit event", event.data.data());
    const active = event.data().active === true ? "true" : "false";
    const data = {
      //user_id: event.data().user_id,
      objectID: event.data().user_id,
      condition: event.data().condition,
      description: event.data().description,
      location: event.data().location,
      name: event.data().name,
      phone_number: event.data().phone_number,
      price: event.data().price,
    };
    console.log("DATA in is", data);
    return editToAlgolia(data, "users")
      .then((res) => console.log("SUCCESS ALGOLIA users EDIT", res))
      .catch((err) => console.log("ERROR ALGOLIA users EDIT", err));
  });
// listen for a delete of a piece of users in Firestore
exports.removeusersFromAlgolia = functions.firestore
  .document("users/{user_id}")
  .onDelete((event) => {
    const objectID = event.data().user_id;
    return removeFromAlgolia(objectID, "users")
      .then((res) => console.log("SUCCESS ALGOLIA users ADD", res))
      .catch((err) => console.log("ERROR ALGOLIA users ADD", err));
  });
// helper functions for create, edit and delete in Firestore to replicate this in Algolia
function addToAlgolia(objectID, indexName) {
  console.log("GETS IN addToAlgolia");
  //console.log("object", objectID);
  console.log("indexName", indexName);
  const ALGOLIA_ID = functions.config().algolia.app_id;
  const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
  const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(indexName);
  return new Promise((resolve, reject) => {
    index
      .saveObject(objectID, { autoGenerateObjectIDIfNotExist: true })
      .then((res) => {
        console.log("res GOOD", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("err BAD", err);
        reject(err);
      });
  });
}
function editToAlgolia(objectID, indexName) {
  const ALGOLIA_ID = functions.config().algolia.app_id;
  const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
  const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(indexName);
  return new Promise((resolve, reject) => {
    index
      .saveObject(objectID, { autoGenerateObjectIDIfNotExist: true })
      .then((res) => {
        console.log("res GOOD", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("err BAD", err);
        reject(err);
      });
  });
}
function removeFromAlgolia(objectID, indexName) {
  const ALGOLIA_ID = functions.config().algolia.app_id;
  const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
  const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(indexName);
  return new Promise((resolve, reject) => {
    index
      .deleteObject(objectID)
      .then((res) => {
        console.log("res GOOD", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("err BAD", err);
        reject(err);
      });
  });
}
