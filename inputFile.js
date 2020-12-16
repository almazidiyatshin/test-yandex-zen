import fs from "fs";

const getBoardFromFile = () => {
	const str = fs.readFileSync(process.argv[2], 'utf8');
	return getArrFromStr(str);
};

const getArrFromStr = (str) => {
	const normalStr = str.slice(1, -1);
	const arr = [];
	
	for (let i = 0; i < normalStr.length; i += 1) {
		if (normalStr[i] === '[') {
			let resultStr = '';
			for (let j = i + 1; normalStr[j] !== ']'; j += 1) {
				resultStr = `${resultStr}${normalStr[j]}`;
			}
			arr.push(resultStr);
		}
	}
	
	return arr.map((value) => value.split(',').map((value) => +value));
};

export default getBoardFromFile;
