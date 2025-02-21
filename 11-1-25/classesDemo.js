class phone{
    constructor(model){
        this.model=model;
    }
}
class smartPhone extends phone{
    constructor(model,os){
        super(model);
        this.os=os;
    }
}
const myPhone = new smartPhone("Galaxy S21","Android");
console.log(`${myPhone.model} runs on ${myPhone.os}`);