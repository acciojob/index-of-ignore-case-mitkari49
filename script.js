function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for(let i=0;i<s1.length;i++){
		const str1=s1.toUpperCase();
		const str2=s2.toUpperCase();
		if(str1.charAt(i)===str2.charAt(0)){
			return i;
		}
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
