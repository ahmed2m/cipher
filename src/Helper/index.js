export function uniqueString(val){
    const s = new Set();
      let newKey = "";
      let text=val;
      text.split('').filter(char=>{
        char =char.toUpperCase();
        // to only append letters
        if(char>='A'&&char<='Z'){
          if(!s.has(char)){
            s.add(char);
            newKey+=char;
          }
        }
      });
    return (newKey);
}