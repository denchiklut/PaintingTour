import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
  handleError(error: any): void {
    alert('Error accord');
    console.log(error);
  }
}
