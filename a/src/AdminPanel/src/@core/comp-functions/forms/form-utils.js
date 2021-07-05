export const useInputImageRenderer = (inputEl, callback) => {
  const inputImageRenderer = () => {
    const files = inputEl.value.files
    let readers = [];
    function readAsDataUrl(file){
      return new Promise(function(resolve,reject){
        console.log(file);
          let fr = new FileReader();

          fr.onload = function(){
              resolve(fr.result);
          };

          fr.onerror = function(){
              reject(fr);
          };

          fr.readAsDataURL(file);
      });
    }
    // reader.addEventListener(
    //   'load',
    //   () => {
    //     console.log(reader.result);
    //     callback([reader.result, 1])
    //   },
    //   false,
    // )

    if (files) {
      for(let i = 0;i < files.length;i++){
        console.log(1);
        readers.push(readAsDataUrl(files[i]));
      }
    }
    Promise.all(readers).then((values) => {
      console.log(values);
      callback(values)
    });
  }
  const inputImageRenderer2 = () => {
    const files = inputEl.value.files
    let readers = [];
    function readAsDataUrl(file){
      return new Promise(function(resolve,reject){
        console.log(file);
          let fr = new FileReader();

          fr.onload = function(){
              resolve(fr.result);
          };

          fr.onerror = function(){
              reject(fr);
          };

          fr.readAsDataURL(file);
      });
    }
    // reader.addEventListener(
    //   'load',
    //   () => {
    //     console.log(reader.result);
    //     callback([reader.result, 1])
    //   },
    //   false,
    // )

    if (files) {
      for(let i = 0;i < files.length;i++){
        console.log(1);
        readers.push(readAsDataUrl(files[i]));
      }
    }
    Promise.all(readers).then((values) => {
      console.log(values);
      callback(values)
    });
  }
  const inputImageRenderer3 = () => {
    const files = inputEl.value.files
    let readers = [];
    function readAsDataUrl(file){
      return new Promise(function(resolve,reject){
        console.log(file);
          let fr = new FileReader();

          fr.onload = function(){
              resolve(fr.result);
          };

          fr.onerror = function(){
              reject(fr);
          };

          fr.readAsDataURL(file);
      });
    }

    if (files) {
      for(let i = 0;i < files.length;i++){
        console.log(1);
        readers.push(readAsDataUrl(files[i]));
      }
    }
    Promise.all(readers).then((values) => {
      console.log(values);
      callback(values)
    });
  }
  return {
    inputImageRenderer,
    inputImageRenderer2,
    inputImageRenderer3,
  }
}

export const _ = null
