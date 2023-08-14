```typescript
// Define a type which has a single property 'foo' of type 'number' and is marked as readonly.
type Result = {
  readonly foo: number;
};

// Define a function that returns an object with that property.
function produce(): Result {
  return {
    foo: 69,
  };
}

// Produce the result.
const item = produce();

// Define a function that takes a parameter 'result' and adds 1337 to its 'foo' property.
function mutate(result: { foo: number }) {
  result.foo += 1337;
}

// Try to mutate the produced 'item' with 'foo' marked as readonly property.
mutate(item);

// What do you think is going to happen here?
console.log(item);
```
