//
export function makeFormData(data: { [x: string]: any}) {
    const formData = new FormData();

    for (const key in Object.keys(data)) {
        if (Array.isArray(data[key])) {
            for (const item of data[key]) {
                formData.append(key, item);
            }
        } else {
            formData.append(key, data[key]);
        }
    }

    return formData;
}
