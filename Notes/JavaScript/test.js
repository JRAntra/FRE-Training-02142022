function foo() {
    // ------
        const a = 10;
    
        function print(data) {
            console.log(data);
        }
    // ------
        return {print, a};
    }