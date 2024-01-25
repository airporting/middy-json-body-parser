[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Static Badge](https://img.shields.io/badge/coverage-100-brightgreen)
![Static Badge](https://img.shields.io/badge/release-1.0.5-blue)
[![test](https://github.com/airporting/middy-json-body-parser/actions/workflows/test.yml/badge.svg)](https://github.com/airporting/middy-json-body-parser/actions/workflows/test.yml)

Used by [Airporting](https://www.airporting.com)

NodeJs 18.x or newer only.

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/airporting)

# middy-json-body-parser

Automatically parses HTTP requests with a JSON body and converts the body into an object.

```javascript
import middy from '@middy/core';
import httpJsonBodyParserMiddleware from '@airporting/middy-json-body-parser';

middy(yourHandler).use(httpJsonBodyParserMiddleware());
```

## Usage

```javascript
export default async ({ body }) => {
  // direct usage of body as an object
};
```

## What about the official one ?

Middy organisation provides this
package: [@middy/http-json-body-parser](https://middy.js.org/docs/middlewares/http-json-body-parser)

It's a great package. Working well.

But. It's not really fault tolerant. You need to validate data passed to it in front of this middleware. We believe, at
Airporting that the execution order should be the reversed. That's all folks.
