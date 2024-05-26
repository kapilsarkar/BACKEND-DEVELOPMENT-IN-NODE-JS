### $sort :

Example : From the products field find price greater than 1200 group by company name and also sum their prices in descending order using $sort?

Command : `db.products.aggregate([{$match:{price:{$gt:1200}}},{$group:{_id:"$company",totalProducts:{$sum:"$price"}}}])`

