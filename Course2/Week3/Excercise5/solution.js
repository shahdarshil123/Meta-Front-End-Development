// Task 1
function logDairy(){
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for(var d of dairy){
        console.log(d);
    }
}

logDairy();

// Task 2
    function birdCan(){
        const animal = {

            canJump: true
            
            };
            
            const bird = Object.create(animal);
            
            bird.canFly = true;
            
            bird.hasFeathers = true;

        for(var b of Object.entries(bird)){
            console.log(b[0]+':'+b[1]);
        }
    }

    birdCan();

// Task 3
function animalCan(){
    const animal = {

        canJump: true
        
        };
        
        const bird = Object.create(animal);
        
        bird.canFly = true;
        
        bird.hasFeathers = true;

    for(b in bird){
        console.log(b+':'+bird[b]);
    }
}
animalCan()
