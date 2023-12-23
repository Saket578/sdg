var sngno = localStorage.getItem("sngno");
var img = localStorage.getItem("Image");

document.getElementById("img").src = img;

var sdg_1 = "Globally, the number of people living in extreme poverty declined from 36 per cent in 1990 to 10 per cent in 2015. But the pace of change is decelerating and the COVID-19 crisis risks reversing decades of progress in the fight against poverty. New research published by the UNU World Institute for Development Economics Research warns that the economic fallout from the global pandemic could increase global poverty by as much as half a billion people, or 8% of the total human population. This would be the first time that poverty has increased globally in thirty years, since 1990."+
"More than 700 million people, or 10 per cent of the world population, still live in extreme poverty today, struggling to fulfil the most basic needs like health, education, and access to water and sanitation, to name a few. The majority of people living on less than 1.90 a day live in Saharan Africa. Worldwide, the poverty rate in rural areas is 17.2 per cent—more than three times higher than in urban areas. "+
"For those who work, having a job does not guarantee a decent living. In fact, 8 per cent of employed workers and their families worldwide lived in extreme poverty in 2018. One out of five children live in extreme poverty. Ensuring social protection for all children and other vulnerable groups is critical to reduce poverty.";

var sdg_2 = "";

var arrays = ["", sdg_1, ];

console.log(sdg_1);
console.log(sngno+ ", " +img);

document.getElementById("heading").innerHTML="This is about SDG "+sngno;