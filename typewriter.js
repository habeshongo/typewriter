const sentence = "hello there from lighthouse labs" + "\n";
let i = 0;
function animation() {
  for (const char of sentence) {
    function close(char){
    i += 1;
    setTimeout(()=>{process.stdout.write(char)}, 200 * i)
  }
  close(char)
}
}
animation()