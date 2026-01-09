function mincost(arr)
{ 
//write your code here
// return the min cost
	
	let n = arr.length;
	if(n<=1) return 0;
	let cost = 0;
	arr.sort((a,b)=>a-b);
	while(n>1){
		let first = arr.shift();
		let second = arr.shift();
		let sum = first + second;
		cost+=sum;
		arr.push(sum);
		arr.sort((a,b)=>a-b);
	}
	return cost;
  
}

module.exports=mincost;
