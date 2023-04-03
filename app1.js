function add(x,y){
    return x+y;
};

function sub(x,y){
    return x-y;
};

module.exports = {
    sum:add,
    diff:sub
};
// Here we can't use module.exports multi times. We have to assign all assignemts in single module as shown above.