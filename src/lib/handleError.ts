class ErrorMessage {
	#hasError: boolean;
	message: string;

	constructor(public submitted: boolean) {
		this.#hasError = false;
		this.message = '';
	}

	condition(hasError: boolean, message: string) {
		if (!this.submitted || this.#hasError || !hasError) {
			return this;
		}

		this.#setError(message);
		return this;
	}

	#setError(message: string) {
		this.#hasError = true;
		this.message = message;
	}
}

export default function newErrorMessage(submitted: boolean) {
	return new ErrorMessage(submitted);
}
