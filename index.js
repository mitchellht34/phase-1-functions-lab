// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination){
    let fare = distanceTravelledInFeet(start, destination);
    if(fare <= 400){
        return 0;    
    }
    else if(fare <= 2000){
        return (fare - 400) * 0.02;
    }
    else if(fare <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}