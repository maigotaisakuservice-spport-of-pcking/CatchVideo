// src/browserCheck.js
const supportedBrowsers = ["Chrome", "Firefox", "Edge", "Safari"];

function isSupported() {
  const userAgent = navigator.userAgent;
  return supportedBrowsers.some(browser => userAgent.includes(browser));
}

if (!isSupported()) {
  location.href = "unsupported.html";
}
