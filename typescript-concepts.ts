// const types are inferred, do not need to declare them explicitly.
const hisName = 'Timothy';

// implicit number type casting.
let userId = 34;

// explicit number type casting.
let _userId: number = 34;

// primitive types: string, number, boolean.
let juserName = 'Max';
let userAge = 34;
let isValid = true;

// variable with multiple types.
let value: string | number = 'abc'; // union.
value = 123;
// value = true; throws an error.

let _value: any = 123; // allows for any type to be used (not recommended)
_value = '123';

// dealing with Objects.
let user: {
    name: string,
    age: number,
    isAdmin: boolean,
    id: string | number
};
// user = {}; throws an error; need to assign values to the types declared in the object.
user = {
    name: 'Tim',
    age: 22,
    isAdmin: true,
    id: 'abc'
}

// dealing with Arrays.
let hobbies: Array<number | string>;
let tim: (string | number)[]; // preferred way.

// dealing with functions.
const addAndReturn = (a: number, b: number): number => a + b; // []: number] is the return type
const addAndLog = (a: number, b: number): void => console.log(a + b); // void for functions with no return.
// outsourcing type definitions with type aliases.
type CalcFn = (a: number, b: number) => {};
const calculate = (a: number, b: number, calcFn: CalcFn): void => {
    calcFn(a, b);
}

// typescript Interfaces - commonly used to define objects/classes.
interface Credentials {
    password: string;
    email: string;
    id: number;
}
// can also extend the interfacen when working with libraries.
// aka. declaration merging.
interface Credentials { date: string }
let credentials: Credentials;

credentials = {
    password: 'abc',
    email: 'test@example.com',
    id: 123,
    date: '2012-10-10'
};

// merging types using the type keyword.
type Admin = { permissions: string[]; }
type AppUser = { userName: string; }
type AppAdmin = Admin & AppUser;

let admin: AppAdmin;
admin = {
    permissions: ['login'],
    userName: 'Tim'
};

interface _Admin { permissions: string[]; }
interface _AppUser { userName: string; }

// merging using interfaces.
interface _AppAdmin extends _Admin, _AppUser {}
let _admin: _AppAdmin;
_admin = {
    permissions: ['login'],
    userName: 'Tim'
}

// exploring literal types.
type Role = 'admin' | 'user' | 'editor';
let role: Role;
role = 'admin';
role = 'user';
role = 'editor';
// role = 'dictator'; throws an error.

// adding type guards.
const performAction = (action: string | number, role: Role): void => {
    if (role === 'admin' && typeof action === 'string') {
        // ...
    }
}

// generics type feature.
type DataStorage<T> = {
    storage: T[]; // don't know the types in the array.
    add: (data: T) => void;
}
const textStorage: DataStorage<string> = {
    storage: [],
    add: data => this.storage.push(data),
}
type User = string;
const userStorage: DataStorage<User> = {
    storage: [],
    add: (data: User): void => {}
}
// generic function
const merge = <T,U>(a: T, b: U) => {
    return {
        ...a,
        ...b
    }
}
const _user = merge<{name: string}, {age: number}>({name: 'Max'}, {age: 99});