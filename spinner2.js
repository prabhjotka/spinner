
const spinner = function(value, duration) {

  setTimeout(() => {
    process.stdout.write(`'\r${value}   '`);
  }, duration);


};
spinner('|', 100);
spinner('/', 300);
spinner('-', 500);
spinner('\\', 700);
spinner('|', 900);

