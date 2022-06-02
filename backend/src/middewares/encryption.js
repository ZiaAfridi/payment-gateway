var CryptoJS = require("crypto-js");
const Config = require('../../config');
const { validationResult } = require('express-validator');
const responseModel = require("../utils/responseModel.utils");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

// Encrypt card number and cvv and validate request 
module.exports = (req, res, next) => {
    
    // Validate incoming input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const response = new responseModel();
        response.setStatus(ReasonPhrases.PARTIAL_CONTENT);
		response.setError(errors.array());
        return res.status(StatusCodes.PARTIAL_CONTENT).send(response);
       
    }
    // Encrypt
        const cardNum = CryptoJS.AES.encrypt(req.body.creditCardNumber, Config.SECRET).toString();
        const cvv = CryptoJS.AES.encrypt(req.body.creditCardCVV, Config.SECRET).toString();

        req.body.creditCardNumber = cardNum;
        req.body.creditCardCVV = cvv;

// Decrypt
// const cardNumByte  = CryptoJS.AES.decrypt(cardNum, Config.SECRET);
// const card = cardNumByte.toString(CryptoJS.enc.Utf8);
// console.log("🚀 ~ file: sensitiveInfo.js ~ line 14 ~ card", card)

// const cvvNum  = CryptoJS.AES.decrypt(cvv, Config.SECRET);
// const cvvString = cvvNum.toString(CryptoJS.enc.Utf8);
// console.log("🚀 ~ file: sensitiveInfo.js ~ line 18 ~ cvvString", cvvString)

return next();
};
