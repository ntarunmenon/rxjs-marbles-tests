const { marbles } = require("rxjs-marbles");
const { map } = require("rxjs/operators");

describe("Hello World Server", function() {
    it("shold map values", marbles((m) => {
        const a = m.cold("--1--2--|");
        const asub = "^-------!";
        const expected = "--2--3--|";
    
        const result = a.pipe(
            map((s) => `${Number(s) + 1}`
            ));
        m.expect(result).toBeObservable(expected);
        m.expect(a).toHaveSubscriptions(asub);
    }))
  });