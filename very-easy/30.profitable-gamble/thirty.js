function profitableGamble(prob, prize, pay) {
	let result = (prob * prize - pay)
    if(result > 0){
        return true
    } 
    else return false
}