const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  async (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    /*
        db.collection("Todos")
          .find()
          .toArray()
          .then(
            docs => {
              console.log("Todos");
              console.log(JSON.stringify(docs, undefined, 2));
            },
            err => {
              console.log("Unable to fetch todos", err);
            }
          );
     */

    // try {
    //   const todos = await db
    //     .collection("Todos")
    //     .find({ _id: new ObjectID("5b4a2a96dd510a4d9d970ba7") })
    //     .toArray();

    //   console.log("Todos");
    //   console.log(JSON.stringify(todos, undefined, 2));
    // } catch (error) {
    //   console.log("Unable to fetch todo", error);
    // }

    // try {
    //   const todosCount = await db
    //     .collection("Todos")
    //     .find()
    //     .count();

    //   console.log("Todos");
    //   // console.log(JSON.stringify(todos, undefined, 2));
    //   console.log(`Todos count: ${todosCount}`);
    // } catch (error) {
    //   console.log("Unable to fetch todo", error);
    // }

    try {
      const users = await db
        .collection("Users")
        .find({ name: "Jen" })
        .toArray();

      console.log("Todos");
      console.log(JSON.stringify(users, undefined, 2));
      //   console.log(`Todos count: ${todosCount}`);
    } catch (error) {
      console.log("Unable to fetch users", error);
    }

    // client.close();
  }
);
