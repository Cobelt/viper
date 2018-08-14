export const objectIdToString = (o) => {
    o._id = o._id.toString();
    return o;
};