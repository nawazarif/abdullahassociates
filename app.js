// for home hover

function forHoverbtn1(){
    document.getElementById('hom').style.color='black'
    
}

function forhovbtn1(){
    document.getElementById('hom').style.color='whitesmoke' 
    
}

// for cal hover

function forcaclbtn1(){
    document.getElementById('calculator').style.color='black'
    
}

function forcacloutbtn1(){
    document.getElementById('calculator').style.color='whitesmoke' 
    
}

// for contact us

function forConbtn1(){
    document.getElementById('contact').style.color='black'
    
}

function forconoutbtn1(){
    document.getElementById('contact').style.color='whitesmoke' 
    
}




// calc


var saldispnone = document.getElementById('nam').style.display='none'
var busidispnone = document.getElementById('busi').style.display='none'
var rentdispnone = document.getElementById('rent').style.display='none'

function salDisp(){
    document.getElementById('nam').style.display='inline-block'
}

function busiDisp(){
    document.getElementById('busi').style.display='inline-block'
}

function renDisp(){
    document.getElementById('rent').style.display='inline-block'
}






// For Salary

var amo = document.getElementById('inp')
var pdiv = document.getElementById('nam')


function forCheck(){
    
    if(amo.value <= 600000){
        var forLessthan = "Nil"
        var newel = document.createElement('p')
        var newnam = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthan)
        newel.appendChild(newnam)        
        pdiv.appendChild(newel)
        amo.value = ''
    }

    else if (amo.value >600000 && amo.value <= 1200000){

        var slab2 = amo.value-600000;
        var taxAmount = slab2*0.05
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }


    else if (amo.value >1200000 && amo.value <= 1800000){

        var slab3 = amo.value-1200000;
        var fixtaxslab3 = 30000
        var variabletaxslab3 = slab3*0.1
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }

    
    else if (amo.value >1800000 && amo.value <= 2500000){

        var slab3 = amo.value-1800000;
        var fixtaxslab3 = 90000
        var variabletaxslab3 = slab3*0.15
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }

    else if (amo.value >2500000 && amo.value <= 3500000){

        var slab3 = amo.value-2500000;
        var fixtaxslab3 = 195000
        var variabletaxslab3 = slab3*0.175
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }


    else if (amo.value >3500000 && amo.value <= 5000000){

        var slab3 = amo.value-3500000;
        var fixtaxslab3 = 370000
        var variabletaxslab3 = slab3*0.2
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }


    else if (amo.value >5000000 && amo.value <= 8000000){

        var slab3 = amo.value-5000000;
        var fixtaxslab3 = 670000
        var variabletaxslab3 = slab3*0.225
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }

    else if (amo.value >8000000 && amo.value <= 12000000){

        var slab3 = amo.value-8000000;
        var fixtaxslab3 = 1345000
        var variabletaxslab3 = slab3*0.25
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }


    else if (amo.value >12000000 && amo.value <= 30000000){

        var slab3 = amo.value-12000000;
        var fixtaxslab3 = 2345000
        var variabletaxslab3 = slab3*0.275
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }

    else if (amo.value >30000000 && amo.value <= 50000000){

        var slab3 = amo.value-30000000;
        var fixtaxslab3 = 7295000
        var variabletaxslab3 = slab3*0.3
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }

    else if (amo.value >50000000 && amo.value <= 75000000){

        var slab3 = amo.value-50000000;
        var fixtaxslab3 = 13295000
        var variabletaxslab3 = slab3*0.325
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }


    else if (amo.value >75000000){

        var slab3 = amo.value-75000000;
        var fixtaxslab3 = 21420000
        var variabletaxslab3 = slab3*0.35
        var taxAmount = fixtaxslab3+variabletaxslab3
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        pdiv.appendChild(newelforslab2)
        amo.value = ''
    }       
}


// For Business


var busiAmo = document.getElementById('business')
var busiDiv = document.getElementById('busi')

function businessCheck(){

    if(busiAmo.value <= 400000){
        var forLessthan = "Nil"
        var newel = document.createElement('p')
        var newnam = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthan)
        newel.appendChild(newnam)        
        busiDiv.appendChild(newel)  
        busiAmo.value = ''
    }
    else if (busiAmo.value >400000 && busiAmo.value <= 600000){

        var slab2 = busiAmo.value-400000;
        var taxAmount = slab2*0.05
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        busiDiv.appendChild(newelforslab2)
        busiAmo.value = ''
    }
    else if (busiAmo.value >600000 && busiAmo.value <= 1200000){

        var slab2 = busiAmo.value-600000;
        var taxAmount = slab2*0.10
        var fixtaxslab3 = 10000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        busiDiv.appendChild(newelforslab2)
        busiAmo.value = ''
    }
    else if (busiAmo.value >1200000 && busiAmo.value <= 2400000){

        var slab2 = busiAmo.value-1200000;
        var taxAmount = slab2*0.15
        var fixtaxslab3 = 70000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        busiDiv.appendChild(newelforslab2)
        busiAmo.value = ''
    }
    else if (busiAmo.value >2400000 && busiAmo.value <= 3000000){

        var slab2 = busiAmo.value-2400000;
        var taxAmount = slab2*0.20
        var fixtaxslab3 = 250000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        busiDiv.appendChild(newelforslab2)
        busiAmo.value = ''
    }
    else if (busiAmo.value >3000000 && busiAmo.value <= 4000000){

        var slab2 = busiAmo.value-3000000;
        var taxAmount = slab2*0.25
        var fixtaxslab3 = 370000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        busiDiv.appendChild(newelforslab2)
        busiAmo.value = ''
    }
    else if (busiAmo.value >4000000 && busiAmo.value <= 6000000){

        var slab2 = busiAmo.value-4000000;
        var taxAmount = slab2*0.30
        var fixtaxslab3 = 620000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        busiDiv.appendChild(newelforslab2)
        busiAmo.value = ''
    }
    else if (busiAmo.value >6000000){

        var slab2 = busiAmo.value-6000000;
        var taxAmount = slab2*0.35
        var fixtaxslab3 = 1220000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        busiDiv.appendChild(newelforslab2)
        busiAmo.value = ''
    }
}


// For Rent

var rentAmo = document.getElementById('rentIncome')
var rentDiv = document.getElementById('rent')


function rentCheck(){

    if(rentAmo.value <= 200000){
        var forLessthan = "Nil"
        var newel = document.createElement('p')
        var newnam = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthan)
        newel.appendChild(newnam)        
        rentDiv.appendChild(newel)
        rentAmo.value = ''
    }
    else if (rentAmo.value >200000 && rentAmo.value <= 600000){

        var slab2 = rentAmo.value-400000;
        var taxAmount = slab2*0.05
        var forLessthanSlab1 = taxAmount;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        rentDiv.appendChild(newelforslab2)
        rentAmo.value = ''
    }
    else if (rentAmo.value >600000 && rentAmo.value <= 1000000){

        var slab2 = rentAmo.value-600000;
        var taxAmount = slab2*0.10
        var fixtaxslab3 = 20000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        rentDiv.appendChild(newelforslab2)
        rentAmo.value = ''
    }
    else if (rentAmo.value >1000000 && rentAmo.value <= 2000000){

        var slab2 = rentAmo.value-1000000;
        var taxAmount = slab2*0.15
        var fixtaxslab3 = 60000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        rentDiv.appendChild(newelforslab2)
        rentAmo.value = ''
    }
    else if (rentAmo.value >2000000 && rentAmo.value <= 4000000){

        var slab2 = rentAmo.value-2000000;
        var taxAmount = slab2*0.20
        var fixtaxslab3 = 210000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        rentDiv.appendChild(newelforslab2)
        rentAmo.value = ''
    }
    else if (rentAmo.value >4000000 && rentAmo.value <= 6000000){

        var slab2 = rentAmo.value-4000000;
        var taxAmount = slab2*0.25
        var fixtaxslab3 = 610000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        rentDiv.appendChild(newelforslab2)
        rentAmo.value = ''
    }
    else if (rentAmo.value >6000000 && rentAmo.value <= 8000000){

        var slab2 = rentAmo.value-6000000;
        var taxAmount = slab2*0.30
        var fixtaxslab3 = 1110000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        rentDiv.appendChild(newelforslab2)
        rentAmo.value = ''
    }
    else if (rentAmo.value >8000000){

        var slab2 = rentAmo.value-8000000;
        var taxAmount = slab2*0.30
        var fixtaxslab3 = 1710000
        var forLessthanSlab1 = taxAmount+fixtaxslab3;

        var newelforslab2 = document.createElement('p')
        var newnamforslab2 = document.createTextNode("Your Tax for Tax Year 2021 is " + forLessthanSlab1)
        newelforslab2.appendChild(newnamforslab2)        
        rentDiv.appendChild(newelforslab2)
        rentAmo.value = ''
    }
}








