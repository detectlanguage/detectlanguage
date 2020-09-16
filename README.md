Language Detection API Node.js Client
===

[![npm version](https://badge.fury.io/js/detectlanguage.svg)](https://badge.fury.io/js/detectlanguage)
[![Build Status](https://travis-ci.org/detectlanguage/detectlanguage-node.svg?branch=master)](https://travis-ci.org/detectlanguage/detectlanguage-node)

Node.js wrapper for [Language Detection API](https://detectlanguage.com/).

## Installation

```
npm install detectlanguage [--save]
```

## Configuration

Before using Detect Language API client you have to setup your personal API key.
You can get it by signing up at [detectlanguage.com](https://detectlanguage.com)

```javascript
var DetectLanguage = require('detectlanguage');

var detectlanguage = new DetectLanguage('YOUR API KEY');
```

## Usage

### Language Detection

Takes a text string and returns a list of detections.

```javascript
var text = "Hello! How are you?";

detectlanguage.detect(text).then(function(result) {
  console.log(JSON.stringify(result));
});
```

#### Response

```javascript
[
  {
    "language": "en",
    "isReliable": true,
    "confidence": 18.2
  }
]
```

### Batch Detection (recommended)

Takes an array of texts and returns a list of detections.
It is much faster than doing request for each text individually.

```javascript
var texts = ['šešios žąsys', 'Strč prst skrz krk'];

detectlanguage.detect(texts).then(function(result) {
  console.log(JSON.stringify(result));
});
```

#### Response

```javascript
[
  [
    {
      "language": "lt",
      "isReliable": true,
      "confidence": 5.5
    }
  ],
  [
    {
      "language": "cs",
      "isReliable": true,
      "confidence": 3.645
    },
    ...
  ]
]
```

### Language Code Detection 

Returns first detected language code.

```javascript
var text = "Hello! How are you?";

detectlanguage.detectCode(text).then(function(result) {
  console.log(JSON.stringify(result));
});
```

#### Response

```javascript
"en"
```

### Supported Languages

Returns the list of supported languages.

```javascript
detectlanguage.languages().then(function(result) {
  console.log(JSON.stringify(result));
});
```

#### Response

```javascript
[
  {
    code: "aa",
    name: "AFAR"
  },
  {
    code: "ab",
    name: "ABKHAZIAN"
  },
  {
    code: "af",
    name: "AFRIKAANS"
  }
  ...
]
```

### User Status

Returns information about your account and it's status.

```javascript
detectlanguage.userStatus().then(function(result) {
  console.log(JSON.stringify(result));
});
```

#### Response

```javascript
{
  date: "2020-01-01",
  requests: 31,
  bytes: 429,
  plan: "FREE",
  plan_expires: null,
  daily_requests_limit: 1000,
  daily_bytes_limit: 1048576,
  status: "ACTIVE"
}
```

## Author

Laurynas Butkus ([GitHub](https://github.com/laurynas))

## License

Licensed under the MIT License: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
