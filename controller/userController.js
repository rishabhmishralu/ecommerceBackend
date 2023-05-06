const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "rishabh";

module.exports.signup = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const mobile = req.body.mobile;
  if (!name) {
    return res.status(400).send({
      message: "name Required",
    });
  } else if (!password) {
    return res.status(400).send({
      message: "password required",
    });
  } else {
    const hashpassword = await bcrypt.hash(password, 10);
    console.log(hashpassword);

    const newuser = await new userModel({
      name,
      password: hashpassword,
      email,
      mobile,
    });

    const saveusers = await newuser.save();
    res.send(saveusers);
  }
};


module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(password);

  if (!email) {
    return res.status(400).send({
      message: "name Required",
    });
  } else if (!password) {
    return res.status(400).send({
      message: "password required",
    });
  }

  // mainlogic

  const isNameExists = await userModel.findOne({ email: email });

  if (isNameExists) {
   
    if (await bcrypt.compare(password, isNameExists.password)) {
      const token = jwt.sign({ isNameExists }, secretKey, { expiresIn: "300s" });
      return res.send({
        code: 200,
        message: "login suceesss",
        token: token,
        userId: isNameExists._id,
      });
    } else {
      return res.send({ mesage: "password Wrong" });
    }
  } else {
    return res.send({ mesage: "email not find" });
  }
};


module.exports.addtodb = async (req, res) => {
  console.log(req.body, "90");

  const isUpdate = userModel.updateOne(
    { _id: req.body.userId },
    {
      $addToSet: { cart: req.body.productId },
    }
  );
  console.log(isUpdate);

  if (isUpdate) {
    return res.status(200).send({ message: "addto db" });
  } else {
    return res.send("server error");
  }
};

module.exports.gettodb = async (req, res) => {
  const userId = req.body.userId;

  const data = userModel.findOne({ _id: userId });
  if (data) {
    return res.status(200).send({ msg: "getadd to db" });
  } else {
    return res.send("server error");
  }
};
