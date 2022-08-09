Results for the extraLargeArray
insert 774.599042 ms
append 2.375042 ms

Results for the largeArray
insert 9.292417 ms
append 628.542 μs

Results for the mediumArray
insert 191.25 μs
append 136.708 μs

Results for the smallArray
insert 36.625 μs
append 76.875 μs

Results for the tinyArray
insert 20.334 μs
append 54.958 μs


Based off the results , I believe doublerAppend() is more efficient than doublerInsert().
doublerAppend() more efficient when it is dealing with larger input. In conclusion, the graph appears more steep for the doublerInsert(), which means that it is less efficient.

