const request = require("supertest");
const app = require("./utils/app");
const { assert } = require("console");

describe("The http server responds fast to user requests regarding the load", () => {
  it("responds with json", function (done) {
    request(app)
      .get("/fibo?n=41")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        const resposeTime = parseFloat(res.headers["x-response-time"]);
        console.log({ resposeTime });
        expect(resposeTime).toBeLessThan(1000);
        return done();
      });
  });
});
