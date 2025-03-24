
import "dotenv/config";

import jwt from "jsonwebtoken";
const jwtSecretKey=process.env.Jwt_SECRET_KEY || process.exit(1);

console.log(jwtSecretKey);
const payload: jwt.JwtPayload = {
  iss: "https://github.com/NACHIKETKORI",
  sub: "nachiket",
};


const token = jwt.sign(payload, jwtSecretKey,{
  algorithm: "HS256",
  expiresIn: "7d",
});

console.log(token);
try{
  const decodedPayload = jwt.verify(token, jwtSecretKey);
  console.log("decode",decodedPayload);
}
  
catch(err){
  console.log("error",err);
}