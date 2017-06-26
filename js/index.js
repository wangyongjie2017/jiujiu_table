/*
// window.onload的意思前面加载完毕执行这个？？？
window.onload = function(){
	let container=document.getElementById('container')
	// let container=document.querySelector('#container')
	// let container=document.getElementsByTagName('div')[0]
	// 外圈开始   i是控制走几行
	for(let i=1; i<10; i++){
		var res = ''
		//每行走几个   规律：第几行就走几j个
		// for(let j=1; j<=i; j++)  或者
		for(let j=1; j<i+1; j++){
			// res = res + `${j} X ${i} = ${i*j}  `
			res = res + i + 'x' + j + '=' + i*j + ' '
		}
		console.log(res)
	}
}  


// 1*1=1
// 1*2=2  2*2=4
// 1*3=3  2*3=6  3*3=9

*/

// window.onload = function(){
// 	let container=document.getElementById('container')
// 	let temp = document.createElement('div')
// 	// 添加选择器
// 	temp.className = 'temp'
// 	container.appendChild(temp)

// 	for(var i=1; i<10; i++){
// 		let temp = document.createElement('div')
// 		temp.className = 'temp'
// 		for(var j=1; j<=i; j++){
// 		let parper = document.createElement('parper')
// 		var text = `${i} * ${j} = ${i*j}`
// 		parper.className = 'parper'
// 		parper.innerText = text
// 		temp.appendChild(parper)
// 		}
// 	container.appendChild(temp)
// 	}
// 	let parpers = document.getElement}

//-----------------------------------------------------------------
/*
window.onload = function(){
	//获取元素
	//为什么添加container？需要往里面添加元素
	let container=document.getElementById('container')
	var resArr = []

	//外圈。描述第几行
	for(let i=1; i<10; i++){
	//需要造出一个元素
		let temp = document.createElement('div')
	//加入class名字
		temp.className='temp'
	//内层。描述第几个
		for(let j=1; j<=i; j++){
	//造出
		let paper = document.createElement('div')
	//加入class
		paper.className = 'paper'
	//写上内容
		paper.innerText = `${j} x ${i} = ?`
	//把值添加到resArr
		resArr.push(i*j)
	//具体添加
		temp.appendChild(paper)
		}
	//添加，把儿子给谁
	container.appendChild(temp)
	}

	let papers = document.getElementsByClassName('paper')
	for(let k=0; k<resArr.length;k++){
		papers[k].onmouseover = function(){
			papers[k].innerText = resArr[k]
			// alert('答案：'+resArr[k])
		}
	}
}
*/
//-----------------------------------------------------------------
window.onload = function(){
	//获取元素container
	//为什么添加container？需要往里面添加元素
	let container=document.getElementById('container')
	//造一个数组放答案
	var resArr = []

	//外层表示第几i行
	for(var i=1; i<10; i++){
		//造元素
		var temp = document.createElement('div')
		//造名字class
		temp.className='temp'
		//内测j表示第i行第j列
		for(var j=1; j<=i; j++){
		//里面的内容，暂未添加
		var text = `${j} x ${i} = ? `
		//造元素
		var paper = document.createElement('div')
		//造名字class
		paper.className='paper'
		//给他具体的值  赋值
		// paper.innerText = text
		paper.innerHTML = '<p>'+ text + '</p>'
		//给paper添加具体的值
		resArr.push(i*j)
		//找个爹，添加到谁里面
		temp.appendChild(paper)
		}
		//找个爹，添加到谁里面
		container.appendChild(temp)
	}
	//获取parper
	var papers = document.getElementsByClassName('paper')
	for(let k=0; k<papers.length; k++){
		papers[k].onclick = function(){
			papers[k].innerHTML = resArr[k]
		}
	}
}










// 另一种的添加方法
// paper.innerHTML = '<p>'+text + '</p>'










