chrome.alarms.create('fetchNotifications', { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'fetchNotifications') {
    fetchNotifications();
  }
});

async function fetchNotifications() {
  const githubToken = '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'; // Replace with your actual GitHub token

  try {
    const response = await fetch('https://api.github.com/notifications', {
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const notifications = await response.json();

    console.log('Fetched notifications:', notifications);

    if (Array.isArray(notifications)) {
      chrome.storage.local.set({ notifications }, () => {
        console.log('Notifications saved to local storage:', notifications);
      });
    } else {
      console.error('Unexpected response format, expected an array but got:', notifications);
      chrome.storage.local.set({ notifications: [] });
    }
  } catch (error) {
    console.error('Error fetching notifications:', error);
    chrome.storage.local.set({ notifications: [] });
  }
}
