$( document ).ready(function(){ 
2   var Random=Math.floor(Math.random()*101+19) 
3   // Selects a random number to be shown at the start of the game 
4   // Number should be should be between 19 - 120 
5   // 
6   $('#randomNumber').text(Random); 
7   // Appending random number to the randomNumber id in the html doc 
8   // 
9   var num1= Math.floor(Math.random()*11+1) 
10   var num2= Math.floor(Math.random()*11+1) 
11   var num3= Math.floor(Math.random()*11+1) 
12   var num4= Math.floor(Math.random()*11+1) 
13   // Setting up random numbers for each jewel 
14   // Random number has to be between 1 - 12 
15   //  
16   var userTotal= 0;  
17   var wins= 0; 
18   var losses = 0; 
19   //  Decaring variables for tallies 
20 $('#numberWins').text(wins); 
21 $('#numberLosses').text(losses); 
22 //resets the game 
23 function reset(){ 
24       Random=Math.floor(Math.random()*101+19); 
25       console.log(Random) 
26       $('#randomNumber').text(Random); 
27       num1= Math.floor(Math.random()*11+1); 
28       num2= Math.floor(Math.random()*11+1); 
29       num3= Math.floor(Math.random()*11+1); 
30       num4= Math.floor(Math.random()*11+1); 
31       userTotal= 0; 
32       $('#finalTotal').text(userTotal); 
33       }  
34 //adds the wins to the userTotal 
35 function yay(){ 
36 alert("You won!"); 
37   wins++;  
38   $('#numberWins').text(wins); 
39   reset(); 
40 } 
41 //addes the losses to the userTotal 
42 function loser(){ 
43 alert ("You lose!"); 
44   losses++; 
45   $('#numberLosses').text(losses); 
46   reset() 
47 } 
48 //sets up click for jewels 
49   $('#one').on ('click', function(){ 
50     userTotal = userTotal + num1; 
51     console.log("New userTotal= " + userTotal); 
52     $('#finalTotal').text(userTotal);  
53           //sets win/lose conditions 
54         if (userTotal == Random){ 
55           yay(); 
56         } 
57         else if ( userTotal > Random){ 
58           loser(); 
59         }    
60   })   
61   $('#two').on ('click', function(){ 
62     userTotal = userTotal + num2; 
63     console.log("New userTotal= " + userTotal); 
64     $('#finalTotal').text(userTotal);  
65         if (userTotal == Random){ 
66           yay(); 
67         } 
68         else if ( userTotal > Random){ 
69           loser(); 
70         }  
71   })   
72   $('#three').on ('click', function(){ 
73     userTotal = userTotal + num3; 
74     console.log("New userTotal= " + userTotal); 
75     $('#finalTotal').text(userTotal); 
76 //sets win/lose conditions 
77           if (userTotal == Random){ 
78           yay(); 
79         } 
80         else if ( userTotal > Random){ 
81           loser(); 
82         }  
83   })   
84   $('#four').on ('click', function(){ 
85     userTotal = userTotal + num4; 
86     console.log("New userTotal= " + userTotal); 
87     $('#finalTotal').text(userTotal);  
88        
89           if (userTotal == Random){ 
90           yay(); 
91         } 
92         else if ( userTotal > Random){ 
93           loser(); 
94         } 
95   });    
96 });  
