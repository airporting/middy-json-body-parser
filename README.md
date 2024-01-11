[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Static Badge](https://img.shields.io/badge/coverage-100-brightgreen)
![Static Badge](https://img.shields.io/badge/release-1.0.5-blue)
[![test](https://github.com/airporting/ebics-parser/actions/workflows/test.yml/badge.svg)](https://github.com/airporting/ebics-parser/actions/workflows/test.yml)

# middy-json-body-parser

Automatically parses HTTP requests with a JSON body and converts the body into an object.

```javascript
import middy from '@middy/core';
import httpJsonBodyParserMiddleware from '@airporting/middy-json-body-parser';

middy(yourHandler).use(httpJsonBodyParserMiddleware());
```

## Usage

```javascript
export default async ({ body }, { algolia }) => {
  // direct usage of body as an object
};
```
