function modify(worker){
    if(worker.handsShaking){
        worker.bloodAlcoholLevel+=0.1*worker.weight*worker.experience;
        worker.handsShaking=false
    }
    return worker;
}

console.log(modify({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));