var products = [];


$(document).ready(function(){
    $("#add_product").click(function(){
        var sku = $("#product_sku").val();
        var name = $("#product_name").val();
        var price = $("#product_price").val();
        var quantity = $("#product_quantity").val();

        var product={};
        product.sku = sku;
        product.name = name;
        product.price = price;
        product.quantity = quantity;

        products.push(product);

        console.log("add button clicked");
        clear();
        display();
    });
});

//function to clear the textboxes once the product is added
function clear(){
    $("#add_product_form label input").val('');
}

//dynamic function to edit the product
$('#product_list').on('click','.editProduct',function(e){
        e.preventDefault();     //to prevent the page from reloading
        var pid = $(this).data('pid');

        var temp = getproduct(pid);

        //populating the form
        $("#product_sku").val(temp.sku);
        $("#product_name").val(temp.name);
        $("#product_price").val(temp.price);
        $("#product_quantity").val(temp.quantity);
        
        $('.submit').toggle();  //functionality to hide and show buttons at once by giving separate ids and classes to them and then using it
});

$('#update').on('click',function(){
    var sku = $("#product_sku").val();
    var name = $("#product_name").val();
    var price = $("#product_price").val();
    var quantity = $("#product_quantity").val();

    var product={};
    product.sku = sku;
    product.name = name;
    product.price = price;
    product.quantity = quantity;
    
    updateProduct(product);
    display();
});


function updateProduct(pproduct)
{
    for(var i=0;i<products.length;i++)
    {
        if(pproduct.sku == products[i].sku)
            products[i] = pproduct;
    }
}
$('#product_list').on('click','.deleteProduct',function(){

});

//fetch that particular object index from products array
function getproduct(pid)
{
    for(var i=0;i<products.length;i++)
    {
        if(products[i].sku==pid)
            return products[i];
    }   
}
//function to display array in table format
function display(){
    var html = '';
    html += '<table><tr><th>Product Sku</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th></tr>';

    for(var i=0;i<products.length;i++)
    {
        html += '<tr>\
        <td>'+products[i].sku+'</td>\
        <td>'+products[i].name+'</td>\
        <td>'+products[i].price+'</td>\
        <td>'+products[i].quantity+'</td>\
        <td>\
            <a href="javascript:void(0);" class="editProduct" data-pid="'+products[i].sku+'">Edit</a>\
            <a href="javascript:void(0);" class="deleteProduct" data-pid="'+products[i].sku+'">Delete</a>\
        </td>\
        </tr>';
    }
    html += '</table>';
    console.log(products);
    $("#product_list").html(html);
}


