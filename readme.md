
---

# Selenium Webdriver Automated Testing with metamask

![working_demo](demo.gif)
## Prerequisites

Before running the code, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Firefox browser
- Selenium webdriver
## Setup

1. Clone this repository to your local machine.
2. Install the required dependencies by running:
   ```
   npm install
   ```

## Usage

1. Update the `profilePath` variable with the correct path to your Firefox profile.
2. Adjust the XPath expressions to match the elements on the target web page.
3. Run the script using:
   ```
   node uitest.js
   ```

## Explanation

1. The script opens the Firefox browser and navigates to `https://console.brahma.fi`.
2. It clicks the "Connect Wallet" button.
3. After a delay, it clicks the "Inject" button.
4. It switches to the new window and enters the password.
5. The script clicks the "Next" button and confirms the action.
6. It switches back to the original window.
7. The script clicks the "Sign" button.
8. A screenshot is taken and saved as "screenshot.png".
9. The script verifies that the text below UI testing says "$0.00".

Remember to customize the script according to your specific use case and website.

---

Feel free to modify the content as needed. If you have any further questions or need additional assistance, feel free to ask! 😊