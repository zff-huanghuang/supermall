export function debounce(fn,delay){//防抖
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout( ()=>{
      fn.apply(this, args)
    }, delay)
  }
}
