function checkPointInACircle (x, y, R) {
    const z = Math.pow(x, 2) + Math.pow(y, 2);
    return Math.sqrt(z) <= R ? 'Point in a circle' : 'Point NOT in a circle';
}

alert (checkPointInACircle(4, 9, 10));