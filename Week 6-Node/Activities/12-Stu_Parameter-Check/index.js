console.log(process.argv)

if (process.argv[2] != process.argv[3]) {
    return console.log(false);
} else {
    return console.log(true);
};