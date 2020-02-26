# AWS Lambda 101 - Node.js Function Base Project 

## Description

This project contains an AWS Lambda function that shows the received event data.

## Required

- [nodejs](https://nodejs.org/) v12.16.1 LTS or higher
- [serverless](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
- [webpack](https://webpack.js.org/)

## Test locally

1. Install the packages by running `npm install`
2. Create a local `config.yml` by copying the `config.example.yml` and replacing the variables in it.
3. For testing you can run the following commands:
    - `serverless invoke local --function test --path tests/event.json`

## Support & Troubleshooting

Emilio Bogantes <ejbogantes@gmail.com>
