const getDiff = (start, end)=>{
    const startSplit = start.split(":");
    const endSplit = end.split(":");

    let timeDiff = endSplit[0] - startSplit[0];
    let minDiff = endSplit[1] - startSplit[1];

    if(minDiff < 0){
        timeDiff -= 1;
        minDiff += 60;
    }

    console.log("heures", timeDiff);
    console.log("Minutes", minDiff);
}