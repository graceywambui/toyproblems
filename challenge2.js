
//Challenge 2: Speed Detector (Toy Problem)

//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   //> For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

   function carSpeed(){
      if (speed<70){
         return "Ok";
      }
      else if (speed>70){
         let demeritPoints = (speed-(70/5))
         return demeritPoints:
      }
   }

