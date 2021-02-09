
      function handleProductChange(product, isIncreased){
         const productCount = getInputValue(product);
         let productNewCount = productCount;

         if(isIncreased == true){
            productNewCount = productCount + 1;
         }
         else if(isIncreased == false && productCount > 0){
            productNewCount = productCount - 1;
         }

         productInput = document.getElementById(product + '-count').value = productNewCount;
         let productTotal = 0; 
         var productPrice = 0;

         if(product == 'phone'){
             productPrice = 1219;
         }
         else if(product == 'case'){
            productPrice = 59;
         }

         productTotal = productNewCount * productPrice;
         document.getElementById(product + '-total').innerText =productTotal;
         calculateTotal();
      };


      function getInputValue(product){
         const productInput = document.getElementById(product + '-count');
         const productCount = parseInt(productInput.value);

         return productCount;
      };


      function calculateTotal(){

         // const phoneCount = getInputValue('phone');
         // const caseCount  = getInputValue('case');
         // const totalPrice = phoneCount * 1219 + caseCount * 59;
         const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
         const caseTotal = parseInt(document.getElementById('case-total').innerText);
         const totalPrice = phoneTotal + caseTotal;
         document.getElementById('total-price').innerText = '$' + totalPrice;

         const tax = Math.round(totalPrice * 0.2);
         document.getElementById('tax-total').innerText = '$' + tax;
         document.getElementById('grand-total').innerText = '$' + (tax + totalPrice);
      }




      //**** Another Practice***

// const minusButton = document.getElementById("minusBtn");
//       const plusButton  = document.getElementById("plusBtn");
      
//       // Grab initial value
//       const currentPrice = parseFloat(document.getElementById("phoneTotal").innerText);
//       var click = 0;


//       // Product value calculation 
//       minusButton.addEventListener('click', function(){
         
//          var sign = -1;
//          productValue("phoneQuantity", currentPrice, "phoneTotal",  sign);
         
//       });

//       plusButton.addEventListener('click', function(){
//          click = 0;
//          sign = 1;
//          productValue("phoneQuantity", currentPrice, "phoneTotal",  sign);
         
//       })
      

      
//       function productValue(productQuantity, currentPrice, productTotal,  sign){
//          click = 1;
         
//          let clickTotal = sign * click;
//          let clickProductValue = (sign * currentPrice);
         
//          // product quantity changes
//          const productQnt = parseInt(document.getElementById(productQuantity).value);
//          document.getElementById(productQuantity).value = (productQnt + clickTotal);

//          //Price with quantity changes
//          const productPrice = parseInt(document.getElementById(productTotal).innerText);
//          document.getElementById(productTotal).innerText = productPrice + clickProductValue;

//       };

//       //  function valueUpdate(productId, attribute, clickTotal){
//       //    const productQnty = parseFloat(document.getElementById(productId).attribute);
//       //    document.getElementById(productId).attribute = (productQnty + clickTotal); 
//       // }