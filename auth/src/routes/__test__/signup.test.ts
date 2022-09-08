import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  request(app)
    .post("/api/users/signup")
    .send({
      email: "user@example.com",
      password: "3e33d4f44",
    })
    .expect(201);
});
it("should disallow duplicates", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "user@example.com",
      password: "3e33d4f44",
    })
    .expect(201);
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "user@example.com",
      password: "3e33d4f44",
    })
    .expect(400);
});
it("set cookie on successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "user@example.com",
      password: "3e33d4f44",
    })
    .expect(201);
  expect(response.get("Set-Cookie")).toBeDefined();
});
it("returns a 400 on invalid email", async () => {
  request(app)
    .post("/api/users/signup")
    .send({
      email: "userexamplecom",
      password: "3e33d4f44",
    })
    .expect(400);
});
it("returns a 400 on invalid password", async () => {
  request(app)
    .post("/api/users/signup")
    .send({
      email: "userexamplecom",
      password: "q",
    })
    .expect(400);
});
it("returns a 400 with missing body", async () => {
  request(app).post("/api/users/signup").send({}).expect(400);
});
