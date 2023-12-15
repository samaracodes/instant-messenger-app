const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    // explanation: we're taking a username from this request body and we're getting a user in chatengine if they exist if not creating a new one. We're using our chatengine private key which allows us to create or store users. Depending on that we return the data or we return the error.
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/", 
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "3c4af2f4-be13-41ab-a42b-b5be4e80d06a" } }
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
});