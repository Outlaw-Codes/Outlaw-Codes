<html>
   <head>
   
      <script type = "text/javascript">
         <!--
            function getConfirmation() {
               var retVal = confirm("Do you want bread and egg ?");
               if( retVal == true ) {
                  document.write ("User wants bread and egg, rich kids!");
                  return true;
               }
               else {
                  document.write ("User wants bread and beans, user is a bricklayer!");
                  return false;
               }
            }
         //-->
      </script>
      
   </head>
   <body>
      <p>Click the following button to see the result: </p>
      
      <form>
         <input type = "button" value = "Click Me" onclick = "getConfirmation();" />
      </form>
      
   </body>
</html>
