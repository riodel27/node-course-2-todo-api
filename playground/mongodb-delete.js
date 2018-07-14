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

    // deleteMany
    // try {
    //   const result = await db
    //     .collection("Todos")
    //     .deleteMany({ text: "Eat lunch" });
    //   console.log(result);
    // } catch (error) {
    //   console.log(`${error}`);
    // }

    // deleteOne
    // try {
    //   const result = await db
    //     .collection("Todos")
    //     .deleteOne({ text: "Eat lunch" });
    //   console.log(result);
    // } catch (error) {}

    // findOneAndDelete
    // try {
    //   const result = await db
    //     .collection("Todos")
    //     .findOneAndDelete({ completed: false });`

    //   console.log(result);
    // } catch (error) {}

    try {
      const result = await db.collection("Users").deleteMany({ name: "Rio" });
      console.log(result);
    } catch (error) {}

    // try {
    //   const result = await db
    //     .collection("Users")
    //     .findOneAndDelete({ _id: new ObjectID("5b4a2e843e537a28b47e4eb9") });
    //   console.log(result);
    // } catch (error) {}

    // client.close();
  }
);
