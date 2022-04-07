import express from "express";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";
import RequestWithUser from "../util/rest/request";
import jsonwebtoken from "jsonwebtoken";
import APP_CONSTANTS from "../constants";
const authorize = (roles?: string[]) => {
 return async (
   req: RequestWithUser,
   res: express.Response,
   next: express.NextFunction
 ) => {
   try {
     const token = getTokenFromRequestHeader(req);
     jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
     const decodedToken = jsonwebtoken.decode(token);
     const tokenDetails = JSON.parse(JSON.stringify(decodedToken));
     if(roles.includes(tokenDetails.role)){
     return next();
     }
     else{
      next(new UserNotAuthorizedException());
     }
   } catch (error) {
     return next(new UserNotAuthorizedException());
   }
 };
};
const getTokenFromRequestHeader = (req: RequestWithUser) => {
    const tokenWithBearerHeader = req.header(
      `${APP_CONSTANTS.authorizationHeader}`
    );
    console.log(tokenWithBearerHeader);
    if (tokenWithBearerHeader) {
      return tokenWithBearerHeader.replace(`${APP_CONSTANTS.bearer} `, "");
    }
    return "";
   };
export default authorize;