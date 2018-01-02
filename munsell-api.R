library(munsell)
#input is STDIN from the Node script -- arrays start at [1] index in R
#typeof(input[1]) === list
x <- as.numeric(unlist(input[1])) 
y <- as.numeric(unlist(input[2])) 
z <- as.numeric(unlist(input[3]))  #TODO: figure out R's map function
myVar = rgb2mnsl(x,y,z) #returns color on the Munsell scale
if (!is.null(myVar)){	
	myVar[1]
} else { 
	NULL
}
#input[1]
