self.onmessage((event) => {
    let result = 0;
    for (let i = 0; i < event.data; i++) {
        result += i;
    }
    self.postMessage(result);
})