# Chinuk Wawa App Setup

## Getting Started
Be sure to update the ./src/environments/environment.ts endpointURL to match your local setup

By default, the install will use the non-pretty permalink structure api endpoint

```
?rest_route=/
```

If you would wish to use the pretty permalink api endpoint, go to your wp admin and save your permalinks to the 'Post name' option.

Then, update the endpointURL in ./src/environments/environment.ts to 

```
https://mylocalsite.test/wp/wp-json/
```

Personally, I couldn't get that to work (I would try to access the endpoint /wp-json/ and would get a 404 error), so I used the non-permalink version instead.