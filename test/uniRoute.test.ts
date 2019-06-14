import "jest";
import request from "supertest";
import { Server } from "../src/server";
var app = Server.bootstrap().app;

describe('Test the api root Path', () => {
    test("it should response the GET request", () => {
        return request(app)
            .get("/api")
            .expect("Content-Type", /json/)
            .expect("Content-Length", '38')
            .expect(200)
    })
})
describe('Test the university api path', () => {
    test("it should response the GET request", () => {
        return request(app)
            .get("/api/uni")
            .expect("Content-Type", /json/)
            .expect(200)
    })
})

describe('Test the Harvard University path', () => {
    test("it should response the GET request", () => {
        return request(app)
            .get("/api/uni/5d031899d348a55af525623f")
            .expect("Content-Type", /json/)
            .expect(200)
    })
})

describe('Test the false university id path', () => {
    test("it should not response the GET request", () => {
        return request(app)
            .get("/api/uni/5d031899d348a55af525623")
            .expect(404)
    })
})

describe('Test another false university id path', () => {
    test("it should not response the GET request", () => {
        return request(app)
            .get("/api/uni/555")
            .expect(404)
    })
})

// describe('Test injection case', () => {
//     test("it should response the GET request", () => {
//         return request(app)
//             .get("/api/uni/?name=123")
//             .expect(404);
//     })
// })

describe('Test getting university by country path', () => {
    test("it should response the GET request", () => {
        return request(app)
            .get("/api/uniByCountry/US")
            .expect(200)
    })
})

describe('Test getting university by false country path', () => {
    test("it should not response the GET request", () => {
        return request(app)
            .get("/api/uniByCountry/CN")
            .expect(404)
    })
})

describe('Test getting university by false country input path', () => {
    test("it should not response the GET request", () => {
        return request(app)
            .get("/api/uniByCountry/wnegnaeorngomareokgmoaergoafwmdfcmpamroemopgmaorjpgmakwemflmapoe")
            .expect(404)
    })
})