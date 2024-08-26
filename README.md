# Abstract

Class decorator that enforces abstract classes.

## Install

npm:  
`npm install @status/abstract`

yarn:  
`yarn add @status/abstract`

## Usage

```typescript
import { Abstract } from '@status/abstract';

@Abstract
class FrameWorkAbstraction {
  // methods and properties
}

new FrameWorkAbstraction(); // error

class FrameWork extends FrameWorkAbstraction {
  // more methods and properties
}

const framework = new FrameWork();
```
