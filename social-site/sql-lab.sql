SELECT item_no item_description
FROM products
WHERE (case_cost >= 100 AND pack >= 12)

SELECT DISTINCT category_name, vendor_name
FROM products

SELECT *
FROM products 
WHERE CAST(proof AS int)  > 85

SELECT DISTINCT vendor_name, category_name
FROM products
WHERE category_name IN ('PEACH BRANDIES', 'FLAVORED VODKA', 'FLAVORED RUM')

SELECT *
FROM products
WHERE category_name like "%IMPORTED%"


SELECT COUNT(*), vendor_name
FROM products
WHERE category_name like "%IMPORTED%"
GROUP BY vendor_name
ORDER BY COUNT(*) DESC
LIMIT 10

SELECT AVG(total) as avg_sales, vendor_name
FROM products p
INNER JOIN sales s
WHERE p.vendor = s.vendor_no
GROUP BY vendor_name
HAVING SUM(total) > 100000
ORDER BY avg_sales desc
LIMIT 10

SELECT store_name, (sales_2017-ifnull(sales_2018, 0)) as delta
FROM (select store_name, sum(week1+week2+week3+week4) as sales_2017
from fy17p
group by store_name) a
INNER JOIN (select store_name, sum(week1+week2+week3+week4) as sales_2018
from fy18p
group by store_name) b
ON a.store_name = b.store_name
ORDER BY delta DESC
