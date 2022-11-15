import { addNumbers } from "./testLibrary";

let hello: string = "world";

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("Franklin", "Melden"));

interface IUser{
    name: string;
    age?: number;

    getMessage(): string
}

const user: IUser = {
    name: "Manny",
    age: 50,
    getMessage(){
        return "Hello" + name;
    }
}

const user2: IUser = {
    name: "Philmore",

    getMessage(){
        return "Hello" + name;
    }
}

console.log(addNumbers(1, 2));