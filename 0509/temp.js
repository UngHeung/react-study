function glc(A, B) {
    while (A % B) {
        [A, B] = [B, A % B];
    }

    return B;
}

console.log(glc(53, 12));
