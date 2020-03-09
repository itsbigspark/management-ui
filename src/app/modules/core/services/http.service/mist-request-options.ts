import { HttpRequest } from '@angular/common/http';

export class MistRequestOptions extends Request {

  constructor(mistOptions?: any) {

    super();

    this.headers.append('Content-Type', 'application/json');

    if (mistOptions != null) {
      for (let option in mistOptions) {
        if (mistOptions.hasOwnProperty(option)) {
          const optionValue = mistOptions[option];
          this[option] = optionValue;
        }
      }
    }
  }
}
