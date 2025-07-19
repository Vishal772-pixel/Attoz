import request from "supertest";
import { startServer } from "../src/app";

let app: any;

beforeAll(async () => {
  app = await startServer(true); // pass flag to prevent .listen()
});

describe("User Auth Tests", () => {
  it("should register a new user", async () => {
    const query = `
      mutation {
        register(username: "TestUser", email: "test@x.com", password: "pass123") {
          token
          user {
            _id
            username
            email
          }
        }
      }
    `;

    const res = await request(app)
      .post("/graphql")
      .send({ query });

    expect(res.status).toBe(200);
    expect(res.body.data.register.user.email).toBe("test@x.com");
  });
});
