# GitHub Notifications Browser Extension

## Overview

The GitHub Notifications Browser Extension fetches and displays GitHub notifications directly within your browser. It provides a convenient way to stay updated on activities related to your GitHub repositories without needing to constantly visit the GitHub website.

## Status

- **Chrome:** Fully functional.
- **Brave:** Fully functional.
- **Firefox:** Fully functional.

## Features

- **Real-time Updates:** Automatically fetches notifications from GitHub at regular intervals.
- **Notification Display:** Shows notifications in a popup with details such as repository name, notification type (e.g., issue, pull request), and last updated timestamp.
- **Direct Access:** Click on notifications to directly access the corresponding GitHub issue or pull request in a new tab.

## Installation

### Chrome

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the extension directory.

### Brave

1. Clone or download this repository.
2. Open Brave and navigate to `brave://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the extension directory.

### Firefox

1. Clone or download this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" in the sidebar.
4. Click on "Load Temporary Add-on..." and select the `manifest.json` file from the extension directory.

## Usage

- Click on the extension icon to view your GitHub notifications.
- Notifications are displayed with clickable links for easy navigation to GitHub pages.

## Development

To customize or extend the extension:

1. Modify the source files (`manifest.json`, `background.js`, `popup.html`, `popup.js`, `style.css`) as needed.
2. Test your changes locally.
3. Commit your changes and push to your GitHub repository.

## Contribution

Contributions are welcome! If you find any issues or want to suggest enhancements, please:
- Fork this repository
- Create a new branch (`git checkout -b feature`)
- Make changes and commit (`git commit -am 'Add feature'`)
- Push to the branch (`git push origin feature`)
- Create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

This extension utilizes the GitHub API and browser extension APIs to provide a seamless experience for users.