const request = () => ({ type: 'REQUEST'})
const success = payload => ({type: 'SUCCESS', payload})
const update = payload => ({type: 'UPDATE', payload })
const insert = () => ({type: 'INSERT' })
const delAction = () => ({type: 'DELETE'})
const failure = payload => ({type: 'FAILURE', payload})

export {
	request,
	success,
	update,
	insert,
	delAction,
	failure
}
