//creating token and saving it in coookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //cookie options
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES * 60 * 24 * 24 * 1000
    ),
    secure: true,
    samesite: "none",
  };

  res.status(statusCode).cookie("token", token, options).json({
    message: "success",
    user,
    token,
  });
};
module.exports = sendToken;
