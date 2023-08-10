const obj = { name : "Ellie"}

function bindTest(){
    console.log (this);
}

const bindTest2 = bindTest.bind(obj);
bindTest2();
