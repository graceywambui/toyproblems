//Challenge 3: Net Salary Calculator (Toy Problem)

//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//NB: Use KRA, NHIF, and NSSF values provided in the link below.

//- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

 //Links to an external site.-  Links to an external site.Links to an external site.

- //www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

function netSalary = basicSalary+benefits;


function payee(salary){
    if (salary<=24,000){
        console.log(salary*10/100);}
    else if(salary>=24,001 && salary <=32,333){
        console.log(salary*25/100);
    }
    else (salary>32333){
        console.log(salary*30/100);
    }
}
Up to 5,999	150	 	40,000 - 44,999	1,000
6,000 - 7,999	300	 	45,000 - 49,999	1,100
8,000 - 11,999	400	 	50,000 - 59,999	1,200
12,000 - 14,999	500	 	60,000 - 69,999	1,300
15,000 - 19,999	600	 	70,000 - 79,999	1,400
20,000 - 24,999	750	 	80,000 - 89,999	1,500
25,000 - 29,999	850	 	90,000 - 99,999	1,600
30,000 - 34,999	900	 	100,000 and above	1,700
35,000 - 39,999	950	
function nhif(salary){
    if (salary<=5999){
        return 150
    }
    else if (salary>=6000&&salary<=7999){
        return 300;
    }
    else if (salary>=8000&&salary<=11999){
        return 400;
    }
    else if (salary>=12000&&salary<=14999){
        return 500;
    }
    else if (salary>=15000&&salary<=19999){
        return 600;
    }
    else if (salary>=20000&&salary<=24999){
        return 750;
    }
    else if (salary>=25000&&salary<=29999){
        return 850;
    }
    else if (salary>=30000&&salary<=34999){
        return 900;
    }
    else if (salary>=35000&&salary<=39999){
        return 950;
    }
    else if (salary>=40000&&salary<=44999){
        return 1000;
    }
    else if (salary>=45000&&salary<=49999){
        return 1100;
    }
    else if (salary>=50000&&salary<=59999){
        return 1200;
    }
    else if (salary>=60000&&salary<=69999){
        return 1300;
    }
    else if (salary>=70000&&salary<=79999){
        return 1400;
    }
    else if (salary>=80000&&salary<=89999){
        return 1500;
    }
    else if (salary>=90000&&salary<=99999){
        return 1600;
    }
    else if (salary>=100000){
        return 1700;
    }

}
