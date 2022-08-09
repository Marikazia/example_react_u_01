let text = 'test variable';
const style = {
	fontSize: '24px',
	fontStyle : 'italic',
	color: 'red'
}

function App() {
	let text2 = '222';
  return (
		<>
			<div className="container">
				<h1 style={style}>app_1</h1>
			</div>
			<img src="/images/test.webp" alt="img"/>
			<ul>
				<li>Hello</li>
				<li>{text+text2}</li>
			</ul>
		</>
  );
}

export default App;
