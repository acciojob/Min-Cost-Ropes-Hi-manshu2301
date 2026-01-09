function mincost(arr)
{ 
//write your code here
// return the min cost
	
	let n = arr.length;
	if(n<=1) return 0;
	let ropes = [...arr];
	let cost = 0;
	ropes.sort((a,b)=>a-b);
	while(n>1){
		ropes.sort((a,b)=>a-b);
		let first = ropes.shift();
		let second = ropes.shift();
		let sum = first + second;
		cost+=sum;
		ropes.push(sum);
		
	}
	return cost;
  
}

module.exports=mincost;
