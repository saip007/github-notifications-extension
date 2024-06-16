document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('notifications', (data) => {
    console.log('Stored notifications data:', data);

    const notifications = data.notifications || [];
    const notificationsDiv = document.getElementById('notifications');

    notificationsDiv.innerHTML = '';

    if (Array.isArray(notifications)) {
      if (notifications.length === 0) {
        notificationsDiv.textContent = 'No notifications found.';
      } else {
        notifications.forEach(notification => {
          const div = document.createElement('div');
          div.className = 'notification';

          // Create a link to the GitHub issue or pull request
          const title = document.createElement('a');
          title.textContent = notification.subject.title;
          title.href = notification.subject.url.replace('api.github.com/repos', 'github.com').replace('/issues', '/pull');
          title.target = '_blank'; // Open link in new tab

          const repositoryName = document.createElement('p');
          repositoryName.textContent = notification.repository.name;

          const updatedAt = document.createElement('p');
          updatedAt.textContent = `Updated at: ${new Date(notification.updated_at).toLocaleString()}`;

          // Append elements to notification div
          div.appendChild(title);
          div.appendChild(repositoryName);
          div.appendChild(updatedAt);

          notificationsDiv.appendChild(div);
        });
      }
    } else {
      notificationsDiv.textContent = 'No notifications found or data format error.';
      console.error('Expected an array but got:', notifications);
    }
  });
});
