function isDirectlyOpposite(before, after) {
  return (
    (before.toLowerCase() === "south" && after.toLowerCase() === "north") ||
    (before.toLowerCase() === "north" && after.toLowerCase() === "south") ||
    (before.toLowerCase() === "east" && after.toLowerCase() === "west") ||
    (before.toLowerCase() === "west" && after.toLowerCase() === "east")
  ) 
}

function dirReduc(arr) {
  // ...
  for(let i = 0; i<=arr.length; i++){
    if(isDirectlyOpposite(arr[i], arr[i+1])){
        arr.splice(i, 2);
    }
  }
  console.log(arr);
}

dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
