import sum from "./sum";
import {describe, expect, it} from 'vitest';

describe("sum", () => {
    it("returns 0 with no numbers", () => {
        expect(sum()).toBe(0)
    })

    it("returns sum with multiple numbers", () => {
        expect(sum(1,2,3)).toBe(6)
    })
})