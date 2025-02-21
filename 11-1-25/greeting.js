//default exports 
export default function greet(name){
    return `Hello , ${name}!`;
}

//Named exports
export function sayGood(name){
    return `GoodBye , ${name}!`;
}

export const greeting = "Welcome!";