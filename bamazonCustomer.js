var mysql = require("mysql2");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootc@mp18",
    database: "bamazondb"

});

connection.connect(function (err) {
    if (err) throw err;
     var sql = "SELECT * FROM  bamazondb.products";
    connection.query(sql, function (err, result) {
        console.log(result);
        userinput();
    })
  
   

    

    function userinput() {
        inquirer.prompt([{
            type: "input",
            name: "id",
            message: "What is the id of the product you want to purchase?"

        }]).then(function (answer) {
            var query = "SELECT * FROM bamazondb.products WHERE ?";
            connection.query(query, { item_id: answer.id }, function (err, res) {
                if (err) throw err;
                var productID = answer.id;
                console.log(res[0].product_name);

                inquirer.prompt([{
                    type: "input",
                    name: "units",
                    message: "How many units would you like to buy?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }]).then(function (answer) {
                    if (res[0].stock_quantity - answer.units > 0) {
                        connection.query("UPDATE bamazondb.products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: res[0].stock_quantity - answer.units
                                },
                                {
                                    item_id: res[0].item_id
                                }

                            ],
                            function (err, res) {
                                console.log("Product bought");
                            }
                        )
                    } else {
                        console.log("Insufficient quantity in stock");

                    };
                });


            })
        })

    }
})



