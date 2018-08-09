# Testing feeds

Things to check to ensure the feed is implemented correctly:

1. Does the next url work as expected - it should never result in a 500 error
2. Does the afterTimestamp or afterChangeNumber of the next url always increase with each new page - if not the query has likely been badly implemented.
3. Does the next url of last page point to itself
4. Is the items array of the last page empty

 

