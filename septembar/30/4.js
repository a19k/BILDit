function PDV(cijenaBezPDV){
    return "PDV:"+cijenaBezPDV*0.17+"\nUkupno:"+(cijenaBezPDV+cijenaBezPDV*0.17);
}

console.log(PDV(100));