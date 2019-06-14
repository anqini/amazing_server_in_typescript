import "jest";
import request from "supertest";
import { Server } from "../src/server";
var app = Server.bootstrap().app;

describe('Test the program api path', () => {
    test("it should response the GET request", () => {
        return request(app)
            .get("/api/prog")
            .expect(200);
    })
})

describe('Test the program by ID path', () => {
    test("it should response the GET request", () => {
        return request(app)
            .get("/api/prog/5d033e02d348a55af5256240")
            .expect(200);
    })
})

describe('Test the program by  wrong ID path', () => {
    test("it should not response the GET request", () => {
        return request(app)
            .get("/api/prog/5d033e02d348a55af525624")
            .expect(404);
    })
})

describe('Test the program by another wrong ID path', () => {
    test("it should not response the GET request", () => {
        return request(app)
            .get("/api/prog/123")
            .expect(404);
    })
})

describe('Test the program by domain path', () => {
    test("it should response the GET request", () => {
        return request(app)
            .get("/api/progByDomain/BM")
            .expect(200);
    })
})