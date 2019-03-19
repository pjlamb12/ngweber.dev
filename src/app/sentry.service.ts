import { Injectable, ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn: 'https://c906225ee45b4e9d9f2b38a2742a0c2c@sentry.io/1414944',
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
	constructor() {}
	handleError(error) {
		Sentry.captureException(error.originalError || error);
		throw error;
	}
}
