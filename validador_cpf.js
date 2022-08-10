export class CPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
        this._valid = this.validate();
        }

    validate() {
        switch((this.cpf.length !== 11) || (this.cpf[0].repeat(this.cpf.length) === this.cpf)){
            case true: return false; break;
            default: {
                let validate = this.cpf.slice(0, -2);
                validate = this.calc(validate);
                validate = 11 - (validate % 11);
                validate = this.nineConvert(validate);
                validate = `${this.cpf.slice(0, -2)}${validate}`;
                let validate2 = this.calc(validate);
                validate2 = 11 - (validate2 % 11);
                validate2 = this.nineConvert(validate2);
                validate2 = `${validate}${validate2}`;
                return validate2 === this.cpf;
            }
        }
    }

    calc (string){
        let cpf = Array.from(string);
        if (string.length === 9){
            let count = 10;
            let result = 0;
            cpf.forEach(e => {
                result += Number(count * e);
                count--
            })
            return result;
        }

        if (string.length === 10){
            let count = 11;
            let result = 0;
            cpf.forEach(e => {
                result += Number(count * e);
                count--
            })
            return result;
        }
    }

    nineConvert(value){
        if (value > 9){
            value = 0;
        }
        return value;
    }
}