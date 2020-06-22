leapYear(1600,2020)

function leapYear(dataStart, dateEnd){
    for (dataStart;dataStart<=dateEnd;dataStart++)
    {
        if(dataStart %4 ==0){
             console.log(dataStart + " Adalah tahun kabisat")
        }else{
            console.log(dataStart + " Adalah bukan tahun kabisat")
        }
    }
}