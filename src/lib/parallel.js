import async from "async";

export function parallel(methods) {
    const wrapper = {};

    for(let k in methods) {
        wrapper[k] = async cb => {
            const reponse = await methods[key]();
            cb(null, response);
        }
    }

    return new Promise((resolve, reject) => {
        async.parallel(wrapper, (err, result) => resolve(result));
    });
}