const miGlobal = 0;

function myFunction() {
    const myconst = 1;
    console.log(miGlobal);

    function parent(){
        const inner = 2;
        console.log(myconst, miGlobal);

        function child() {
            console.log(inner, myconst, miGlobal)
        }
        return child
    }
    return parent
}

myFunction();