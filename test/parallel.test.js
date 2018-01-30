import { parallel } from "../index";

test("Parallel Success w/ object", async () => {
    const methods = {
        "one": async () => {
            return await timeoutSuccessStub();
        },
        2: async () => {
            return await timeoutSuccessStub();
        }
    }

    const results = await parallel(methods);
    
    expect(results).toMatchObject({
        "one": "success!",
        2: "success!"
    });
});

test("Parallel Success w/ array", async() => {
    const methods = [];
    methods.push(async () => { return await timeoutSuccessStub()});
    methods.push(async () => { return await timeoutSuccessStub()});

    const results = await parallel(methods);

    expect(results).toMatchObject({
        '0': 'success!',
        '1': 'success!'
    });
});

function timeoutSuccessStub() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("success!"), Math.random() * 1000);
    });
}

function timeoutErrorStub() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("error!"), Math.random() * 1000);
    });
}