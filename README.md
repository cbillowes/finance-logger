# Finance Logger

A TypeScript tutorial by [Net Ninja](https://www.youtube.com/@NetNinja)

Follow along on YouTube:
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI

Code repository:
https://github.com/iamshaunjp/typescript-tutorial

Compile to JavaScript:

```bash
tsc <filename>.ts -w
# automatically compiles this to a file with the same name but with a .js extension
# -w flag watches for changes and recompiles
```

## Getting started

```bash
tsc --init
```

This will create a `tsconfig.json` file which is a configuration file for TypeScript.

Now you only need to run `tsc -w` to compile all TypeScript files in the project.

## Generics

Generics allow us to create reusable blocks of code that can work with a variety of types rather than a single one.

```typescript
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

addUID({ name: "Yoshi", age: 40 });
```

The `<T extends object>` syntax is a generic type. It means that the function can accept any type of object.

```typescript
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

addUID({ name: "Yoshi", age: 40 });
```

With interfaces:

```typescript
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const document = Resource<object>({
  uid: 1,
  resourceName: "person",
  data: { name: "John" },
});

const document2 = Resource<string[]>({
  uid: 2,
  resourceName: "shoppingList",
  data: ["bread", "milk", "sugar", "eggs"],
});
```

## Enums

Number values associated with more friendly names.

```typescript
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

const document = Resource<object>({
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: "The Hobbit",
});
```

## Tuples

Arrays with a fixed number of elements and types.

```typescript
let tuple: [string, number, boolean] = ["ryu", 25, true];
```