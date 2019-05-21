import React from 'react'
import API from '../../../util/API'
import ProxyTable from './Table'
import ProxyModal from './Modal'


const Proxies = props => {

	let [proxy, setProxy] = React.useState({
		proxies: []
	})
	let { proxies } = proxy

	const handleInput = event => {
		setProxy({
			...proxy, [event.target.name]: event.target.value.split(',')
		})
	}

	const handleProxy = (event) => {
		event.preventDefault()
		proxies.forEach((proxy) => {
			API.proxy(proxy.trim())
		})
	}

	return (
		<>
			<p className="display-4 mt-0">Proxy</p>
			<div>
				<form className="form-inline" onSubmit={handleProxy}>
					<input className="form-control mb-2 mr-sm-2" style={{ minWidth: "200px" }} type="text" name="proxies" onChange={handleInput} />

				</form>
				<ProxyTable />
				<ProxyModal />
			</div>
		</>
	)
}

export default Proxies