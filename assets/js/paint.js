function configureListeners() {
    //select each image via DOM element and group into an array
    var images = document.getElementsByTagName('img');
        // iterate over images array using a 'for' loop 
     for (var i = 0; i < images.length; i++) {     
         //mouseover to add Opacity   
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        //mouseout to remove Opacity
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
        };
}
//I was way off here... !this/this to toggle on Opacity, selecting 'dim' from stylesheet
function addOpacity(event) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}
//toggle off Opacity
function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    //in each switch case, price and colorName are updated
    switch (paintColor) {
        case 'pn1':
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)         
            break;     

        case 'pn2': 
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)   
            break;            

        case 'pn3': 
            price = '$22.99'
            colorName = 'Royal Blue' 
            updatePrice(colorName, price)   
            break;   

        case 'pn4': 
            price = '$13.42'
            colorName = 'Solid Red'  
            updatePrice(colorName, price)   
            break;   

        case 'pn5': 
            price = '$21.98'
            colorName = 'Solid White'  
            updatePrice(colorName, price)   
            break;   

        case 'pn6': 
            price = '$4.99'
            colorName = 'Solid Black'  
            updatePrice(colorName, price)   
            break;   

        case 'pn7': 
            price = '$8.22'
            colorName = 'Solid Cyan' 
            updatePrice(colorName, price)   
            break;   

        case 'pn8': 
            price = '$11.99'
            colorName = 'Solid Purple'  
            updatePrice(colorName, price)   
            break;   

        case 'pn9': 
            price = '$14.99'
            colorName = 'Solid Yellow' 
            updatePrice(colorName, price)   
            break;   

          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;

        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
}
