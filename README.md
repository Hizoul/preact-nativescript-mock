Mocks for [preact-to-nativescript](https://github.com/hizoul/preact-to-nativescript)

## Usage with Jest
Add the following to your `package.json`
```json
{
  "jest": {
    "testEnvironment": "node",
    "moduleNameMapper": {
      "tns-core-modules(.*)": "preact-nativescript-mock$1"
    }
  }
}
```