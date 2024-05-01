const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should be respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);

    // expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launces", () => {
  const launchData = {
    mission: "USS Enterprise",
    rocket: "NCC SUpa Bowl",
    target: "Kepler-22 b",
    launchDate: "January 7, 2034"
  };

  const launchDataDateless = {
    mission: "USS Enterprise",
    rocket: "NCC SUpa Bowl",
    target: "Kepler-22 b",
  };

  const launchDataInvalidDate = {
    mission: "USS Enterprise",
    rocket: "NCC SUpa Bowl",
    target: "Kepler-22 b",
    launchDate: "Zoos"
  };

  test("It should respond with 201 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(launchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(requestDate).toBe(responseDate);
    expect(response.body).toMatchObject(launchDataDateless);
  });

  test("It should catch missing required properties.", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataDateless)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });
  test("It should catch invalid dates.", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
})