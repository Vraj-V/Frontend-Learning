const CounterModule = (function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function reset() {
    count = 0;
    console.log("Reset");
  }

  return {
    increment,
    reset
  };
})();

CounterModule.increment();
CounterModule.increment();
CounterModule.reset();
