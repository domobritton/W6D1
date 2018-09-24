function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

function sumRest(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
}

console.log(sumRest(1, 2, 3, 4));
console.log(sumRest(1, 2, 3, 4, 5));

Function.prototype.myBind1 = function(ctx) {
  const fun = this;
  const bindArgs = Array.from(arguments).this.slice(1);
  return function _bindArgs() {
    const callArgs = Array.from(arguments);
    return fun.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => {
        total += n;
      });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}



Function.prototype.curry = function(numArgs) {
  const args = [];
  const fun = this;

  function _curriedFun(arg) {
    args.push(arg);

    if(args.length === numArgs) {
      return fun(...args);
    } else {
      return _curriedFun;
    }
  }

  return _curriedFun;
};

Function.prototype.curry1 = function(numArgs) {
  const args = [];
  const _curriedFun = (arg) => {
    args.push(arg);

    if(args.length === numArgs) {
      return this(...args);
    } else {
      return _curriedFun;
    }
  };

  return _curriedFun;
};
