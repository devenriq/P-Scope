const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    const innerConst = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(innerConst, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();
