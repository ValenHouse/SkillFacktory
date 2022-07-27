function Calculate()
        {
          var a = document.forms.r.a.value;
          var b = document.forms.r.b.value;
          var x = document.forms.r.x.value;
          var y = document.forms.r.y.value;
               
            s= Math.tan(x);
            s1= Math.log(y);
            s2= Math.x-s1;
            s3= Math.atan(s2);
            s4= Math.s-s3;
            r= Math.x*x;
            r1= Math.a*x;
            r2= Math.b*b;
            r3= Math.r+r1;
            r4= Math.r3+r2;
            m= Math.abs(r4);
            d= s4/m;
            document.forms.r.x1.value = d;
             }
        
         
         
         function calcResult(numFirst, numSecond, operator) {
           return eval(`${numFirst}` + operator + `${numSecond}`);
         }
         
         alert(calcResult(numFirst, numSecond, operator));