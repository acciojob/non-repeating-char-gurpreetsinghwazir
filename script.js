function firstNonRepeatedChar(str) {
	for (let i of str) {
		let name = (str.split(i).length -1);
		if (name == 1){
			return i
			break;
		}else{
			return null
		}
	}
}