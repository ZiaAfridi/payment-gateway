/**
 * A class that is use for the response structure (model) to client.
 * response structure is {data: some data, error: some error, status: status code }
 */

class responseModel {
	constructor() {
		this.setStatus('');
		this.setData('');
		this.setError('');
	}

	getStatus() {
		return this.status;
	}

	setStatus(status) {
		this.status = status;
	}

	getData() {
		return this.data;
	}

	setData(data) {
		this.data = data;
	}

	setError(error) {
		this.error = error;
	}

	getError() {
		return this.error;
	}
}

module.exports = responseModel;
