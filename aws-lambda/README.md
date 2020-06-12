## AWS Lambda

This repository helps you deploy Caravaggio to AWS Labda using [serverless](https://www.serverless.com/)
utility to do that. 
In order to deploy caravaggio to AWS Lambda, you need credentials. You can find more informations on [serverless documentation](http://slss.io/aws-creds-setup).

When you found your preferred way to setup your AWS credentials, rename the file `serverless.example.yml` to `serverless.yml` and change anything if needed.
It works even without any modification if you don't need to specify your serverless organisation.

Run.

```
npm install
npm run deploy
```

This will deploy Caravaggio in `dev` stage. If you want to dedploy into production

```
npm install
npm run production
```

## Updating configuration

The configuration si meant to be run on AWS Lambda platform and so some things already works like cache
settings or error and logs.    
If you wnt to change some parameters, edit file `lambda.js`.
