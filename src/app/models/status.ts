export class Status {
    success: boolean;
    errorMessage: string;
    data: any;

    constructor(success?: boolean, errorMessage?: string, data?: any) {
        this.success = success;
        this.errorMessage = errorMessage;
        this.data = data;
    }
}
