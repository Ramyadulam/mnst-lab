function getMobileByVendor(manufacture:string):string[]{ let mobile_list:string[];
    if(manufacture==="Samsung"){
    mobile_list=["Samsumg galaxy","Samsung edge","Sanmsung s23"]; return mobile_list;
    }
    else if(manufacture==='Apple'){ mobile_list=["Apple s5","Apple s6"]; return mobile_list;
    }
    else {
    mobile_list=["Nokia 10","Nakia s1"]; return mobile_list;
}
}
console.log("Mobile list "+getMobileByVendor("Samsung"));
console.log("\nDeveloped by: 22MH1A0599");