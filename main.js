class Validation {
  static validateFunction(callback) {
    if (typeof callback !== 'function') {
      throw new Error("Invalid callback passed");
    }
  }

  static validateObject(obj) {
    if (typeof obj !== "object") {
      throw new Error("Invalid Object passed!");
    }
  }

  static validateArray(arr) {
    if (typeof arr !== "object" || !arr.length) {
      throw new Error("Invalid array passed");
    }
  }

  static validateNumber(accumulator) {
    if (typeof accumulator !== 'number') {
      throw new Error("Invalid accumulator passed")
    }
  }


}
class LeanDash {
  constructor() {
    this.arr = [];
  }
}

LeanDash.prototype.map = function (arr, cb) {

  try {
    Validation.validateArray(arr);

    Validation.validateFunction(cb);

  } catch (e) {
    console.log(e.message)
  }

  const result = arr.map(cb);

  return result;
}

LeanDash.prototype.filter = function (arr, callback) {


  try {
    Validation.validateArray(arr);

    Validation.validateFunction(callback);

  } catch (e) {
    console.log(e.message)
  }

  const result = arr.filter(callback);

  return result;
}

LeanDash.prototype.reduce = function (arr, callback, accumulator) {


  try {
    Validation.validateArray(arr);

    Validation.validateFunction(callback);

    Validation.validateNumber(accumulator);

  } catch (e) {
    console.log(e.message)
  }

  const result = arr.reduce(callback, accumulator)

  return result;
}

LeanDash.prototype.find = function (arr, callback) {

  try {
    Validation.validateArray(arr);

    Validation.validateFunction(callback);

  } catch (e) {
    console.log(e.message)
  }

  for (let i of arr) {
    if (callback(i)) {
      return i;
    }
  }
  return false;
}

LeanDash.prototype.sortBy = function (arr, func) {


  try {
    Validation.validateArray(arr);

    Validation.validateFunction(func)

  } catch (e) {
    console.log(e.message)
  }

  return arr.sort(func);
}

LeanDash.prototype.merge = function (...objs) {
  let result = {};

  for (let i of objs) {
    result = { ...result, ...i };
  }

  return result;
}

LeanDash.prototype.clone = function (args) {

  try {
    Validation.validateObject(args);

  } catch (e) {
    console.log(e.message)
  }

  return args.slice();
}

LeanDash.prototype.isEquals = function (arg1, arg2) {

}

LeanDash.prototype.intersection = function (arr1, arr2) {


  try {
    Validation.validateArray(arr1);

    Validation.validateArray(arr2);

  } catch (e) {
    console.log(e.message)
  }

  let long = [], short = [], result = [];
  if (arr1.length > arr2.length) {
    long = arr1;
    short = arr2;
  } else {
    long = arr2;
    short = arr1;
  }

  for (let i of long) {
    if (short.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

LeanDash.prototype.difference = function (arr1, arr2) {


  try {
    Validation.validateArray(arr1);

    Validation.validateArray(arr2);

  } catch (e) {
    console.log(e.message)
  }

  if (typeof arr2 !== "object" || !arr2.length) {
    throw new Error("Invalid second array passed!")
  }

  let result = [];

  for (let i of arr1) {
    if (!arr2.includes(i)) {
      result.push(i);
    }
  }

  return result;
};


LeanDash.prototype.first = function (arr) {
  try {
    Validation.validateArray(arr);

  } catch (e) {
    console.log(e.message)
  }

  return arr[0];
};

LeanDash.prototype.last = function (arr) {


  try {
    Validation.validateArray(arr);

  } catch (e) {
    console.log(e.message)
  }
  return arr[arr.length - 1];
}

LeanDash.prototype.every = function (arr, callback) {

  try {
    Validation.validateArray(arr);

    Validation.validateFunction(callback);
  } catch (e) {
    console.log(e.message)
  }


  for (let i of arr) {
    if (!callback(i)) {
      return false;
    }
  }
  return true;
}

LeanDash.prototype.take = function (arr, accumulator) {


  try {
    Validation.validateArray(arr);

    Validation.validateNumber(accumulator);
  } catch (e) {
    console.log(e.message)
  }

  return arr.slice(0, accumulator);

}

LeanDash.prototype.some = function (arr, callback) {

  try {
    Validation.validateArray(arr);

    Validation.validateFunction(callback);
  } catch (e) {
    console.log(e.message)
  }
  for (let i of arr) {
    if (callback(i)) {
      return true;
    }
  }
  return false;
}

LeanDash.prototype.shuffle = function (arr) {

  try {
    Validation.validateArray(arr);
  } catch (e) {
    console.log(e.message)
  }

  return arr.sort(() => Math.random() - 0.5);
}

LeanDash.prototype.invert = function (obj) {

  try {
    Validation.validateObject(obj);
  } catch (e) {
    console.log(e.message)
  }

  const result = {};
  for (let i in obj) {
    result[obj[i]] = i;
  }

  return result;
}

LeanDash.prototype.isEmpty = function (arr) {
  try {
    Validation.validateArray(arr);
  } catch (e) {
    console.log(e.message)
  }

  if (arr.length === 0) {
    return true
  };
  return false;
}

LeanDash.prototype.uniq = function (arr) {

  try {
    Validation.validateArray(arr);

  } catch (e) {
    console.log(e.message)
  }

  return [...new Set(arr)];
}

LeanDash.prototype.pick = function (obj, arr) {
  try {
    Validation.validateArray(arr);

    Validation.validateObject(obj);

  } catch (e) {
    console.log(e.message)
  }

  const result = {};

  for (let i of arr) {
    result[i] = obj[i]
  }
  return result;

}

LeanDash.prototype.partition = function (arr, callback) {


  try {
    Validation.validateArray(arr);

    Validation.validateFunction(callback);

  } catch (e) {
    console.log(e.message)
  }

  const result = [];

  for (let i of arr) {
    if (callback(i))
      result.push(i);
  }

  const result2 = this.difference(arr, result);

  return [result, result2];
}

LeanDash.prototype.omit = function (obj, arr) {

  try {
    Validation.validateObject(obj);

    Validation.validateArray(arr);

  } catch (e) {
    console.log(e.message)
  }
  const result = {};

  for (let i in obj) {
    if (!arr.includes(i)) {
      result[i] = obj[i];
    }
  }

  return result;
};

LeanDash.prototype.throttle = function () {

};

LeanDash.prototype.debounce = function (cb, delay) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };

};

const _ = new LeanDash();

export default _;