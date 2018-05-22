SELECT item_no item_description
FROM products
WHERE case_cost >= 100 AND pack >= 12


SELECT DISTINCT category_name, vendor_name
FROM products


SELECT * FROM products WHERE proof > CAST(85 as int);


SELECT DISTINCT vendor_name
FROM products
WHERE category_name in ( “PEACH BRANDIES”, “FLAVORED VODKA”, “FLAVORED RUM”)


