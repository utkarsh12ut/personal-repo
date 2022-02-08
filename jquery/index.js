arr=[];

function add(){
    var pSKU = document.getElementById('pSKU').value;
    var pQty = document.getElementById('pQty').value;
    var pName = document.getElementById('pName').value;
    var pPrice = document.getElementById('pPrice').value;
console.log(pName,pPrice,pQty,pSKU);
    

    condition(pSKU,pQty,pName,pPrice);
    display(arr);

}

function condition(pSKU,pQty,pName,pPrice)
{
    for(var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
        if (arr[i].pSKU == pSKU)
        {
            alert("duplicate data is invalid");
            return;
        }
    }
    obj = {};
    obj["pSKU"] = pSKU;
    obj["pQty"] = pQty;
    obj["pName"] = pName;
    obj["pPrice"] = pPrice;
    arr.push(obj);

}



function display(result){
    var text=document.getElementById("table");
    text.innerHTML="<tr>\
    <td>Product ID</td>\
    <td>Product Name</td>\
    <td>Product Price</td>\
    </tr>"
    for(let i=0;i<result.length; i++){
        text.innerHTML+='<tr>\
        <td>' + result[i].pSKU + '</td>\
        <td>' + result[i].pQty + '</td>\
        <td>' + result[i].pName + '</td>\
        <td>' + result[i].pPrice + '</td>\
        <td>' +'<a href="#" class="edit" onclick="fun()">Edit</a><a href="#" class="delete" onclick="del()">Delete</a>' + '</td>\
        </tr>';
    }
}


function fun(){  // jquery function
    $('.edit').click(function(){
        $('.submit').hide();
        $('.btn').show();
        $('#wrapper').hide();
    })
   
}

function del(){
    $(this).click(function(){
        $(this).remove();
    })
   
}