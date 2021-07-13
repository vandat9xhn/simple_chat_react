//
export function makeFormData(data: any) {
    const formData = new FormData();

    for (const key in data) {
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
