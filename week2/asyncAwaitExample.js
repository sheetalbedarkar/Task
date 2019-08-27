function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hiiii..');
      }, 2000);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('good');
      }, 3000);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('morning!!!!!');
      }, 5000);
    });
  }
  
//   async function msg() {
//     const a = await who();
//     const b = await what();
//     const c = await where();

async function msg() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg(); 