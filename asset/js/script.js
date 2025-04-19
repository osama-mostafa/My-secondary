var F_name = "Osama ";
    S_name = "Motafa";
    F_S_name = F_name + " " + S_name;
    Class1 = [ 10,  10,  10]
    Class11 = Class1[0] + Class1[1] + Class1[2]
    Class2 = [ 5,  6,  3]
    Class22 = Class2[0] + Class2[1] + Class2[2]

document.getElementById("Name").innerHTML = "<span style ='color: #080; font-size: 30px;'>" + F_name + "</span>" + "<span style = 'color: #99ff99; font-size: 50px;'>" + S_name + "</span>"

if( Class11 >= 15 ){
    console.log("ناجح")
}
else{
    console.log("ساقط")
}


if( Class22 >= 15 ){
    console.log("ناجح")
}
else{
    console.log("ساقط")
}

