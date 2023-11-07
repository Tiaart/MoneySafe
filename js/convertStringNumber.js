export const convertStringNumber = (Str) => {
    const noSpaceStr = Str.replace(/\s+/g, '');
    const num = parseFloat(noSpaceStr);

    if (!isNaN(num) && isFinite(num)) {
        return num
    } else {
        return false
    }
}