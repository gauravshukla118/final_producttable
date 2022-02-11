var products = [];


$(document).ready(function(){
    $("#add_product").click(function(){
        var sku = $("#product_sku").val();
        var name = $("#product_name").val();
        var price = $("#product_price").val();
        var quantity = $("#product_quantity").val();

        var product={};
        product.sku = sku,
        product.name = name,
        product.price = price,
        product.quantity = quantity,

        products.push(product);
        console.log(products);
        clear();
        display();
    });
});

//function to clear the textboxes once the product is added
function clear(){
    $("#add_product_form label input").val(' ');
}

//dynamic function to edit the product
$('#product_list').on('click','.editProduct',function(){

});

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
            <a href="#" class="editProduct" data-pid="'+products[i].sku+'">Edit</a>\
            <a href="#" class="deleteProduct">Delete</a>\
        </td>\
        </tr>';
    }
    html += '</table>';
    console.log(products);
    $("#product_list").html(html);
}



