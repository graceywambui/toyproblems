//Challenge 1: Student Grade Generator (Toy Problem)

//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

   //     A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

   let person = prompt("grade");
   const run=(grade)=>{
    if(grade>100||grade<0){
        alert('Grading is in between 0-100')
    }
   };

   function studentGrade(grade){
      if (grade>79){
        return "A";
      }
     if (grade >=60 &&grade <=79){
        return"B";
    }
     if (grade <=59 &&grade >=49){
        return "C";
    }
    else if (grade >=40 &&grade <49){
        return "D";
    }
    else (grade <40) {
        return "E";
    }   
}