//Q-43. Assigment Ni. 1 of 45 Questions.
//Unchanged Magicians: Start with your work from Exercise 42
//const Great_Magicians:string[]= ["Michal","Peter","Bhushan","Jill"]

const GMagCopy: string[] = ["Michal", "Peter", "Bhushan", "Jill"];
const Narray: string[] = []
function make_great(GMagCopy: string[])//Great_Magicians:string[] declared in Q42
{
    for (var i = 0; i < GMagCopy.length; i++)
        (Narray[i] = "Great " + GMagCopy[i])
} //disp Function Call executes this statement

function Sh_Magcn() {
    console.table(GMagCopy)
    console.table(Narray)
}
//Narray[j]=("Great"+GMagCopy[j])
make_great(GMagCopy)
Sh_Magcn()




